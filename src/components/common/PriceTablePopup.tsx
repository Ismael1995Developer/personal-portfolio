"use client";

import { useState, useEffect, useCallback } from "react";
import {
  X,
  Calculator,
  MessageCircle,
  Tag,
  CheckCircle,
  XCircle,
} from "lucide-react";
import {
  validateCoupon,
  applyDiscount,
  calculateDiscountAmount,
  type CouponData,
} from "@/lib/couponValidator";

interface PriceTablePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PriceRange {
  min: number;
  max: number | null;
  price: number;
  description: string;
}

const priceRanges: PriceRange[] = [
  { min: 0, max: 7.5, price: 499, description: "Até 7,5 kWp (Fast Track)" },
  { min: 7.5, max: 15, price: 80, description: "> 7,5 até 15 kWp" },
  { min: 15, max: 35, price: 70, description: "> 15 até 35 kWp" },
  { min: 35, max: 60, price: 65, description: "> 35 até 60 kWp" },
  { min: 60, max: 75, price: 90, description: "> 60 até 75 kWp" },
  {
    min: 75,
    max: 300,
    price: 60,
    description: "Minigeração: > 75 até 300 kWp",
  },
  {
    min: 300,
    max: 500,
    price: 50,
    description: "Minigeração: > 300 até 500 kWp",
  },
  { min: 500, max: null, price: 0, description: "Acima de 500 kWp" },
];

export default function PriceTablePopup({
  isOpen,
  onClose,
}: PriceTablePopupProps) {
  const [power, setPower] = useState<number>(0);
  const [calculatedPrice, setCalculatedPrice] = useState<number>(0);
  const [breakdown, setBreakdown] = useState<
    Array<{ range: string; power: number; price: number; total: number }>
  >([]);
  const [couponCode, setCouponCode] = useState<string>("");
  const [appliedCoupon, setAppliedCoupon] = useState<CouponData | null>(null);
  const [couponError, setCouponError] = useState<string>("");
  const [finalPrice, setFinalPrice] = useState<number>(0);

  const calculatePrice = useCallback(
    (powerValue: number) => {
      if (powerValue <= 0) {
        setCalculatedPrice(0);
        setBreakdown([]);
        return;
      }

      let total = 0;
      const breakdownItems: Array<{
        range: string;
        power: number;
        price: number;
        total: number;
      }> = [];
      let remainingPower = powerValue;

      // Primeira faixa: até 7,5 kWp (Fast Track)
      if (remainingPower > 0 && remainingPower <= 7.5) {
        const powerInRange = remainingPower;
        const rangeTotal = 499; // Preço fixo para Fast Track
        total += rangeTotal;
        breakdownItems.push({
          range: "Até 7,5 kWp (Fast Track)",
          power: powerInRange,
          price: 499,
          total: rangeTotal,
        });
        remainingPower = 0;
      } else if (remainingPower > 7.5) {
        const rangeTotal = 499; // Preço fixo para Fast Track
        total += rangeTotal;
        breakdownItems.push({
          range: "Até 7,5 kWp (Fast Track)",
          power: 7.5,
          price: 499,
          total: rangeTotal,
        });
        remainingPower -= 7.5;
      }

      // Demais faixas
      for (let i = 1; i < priceRanges.length; i++) {
        const range = priceRanges[i];

        if (remainingPower <= 0) break;

        if (range.max === null) {
          // Acima de 500 kWp - sob consulta
          breakdownItems.push({
            range: range.description,
            power: remainingPower,
            price: 0,
            total: 0,
          });
          break;
        }

        const powerInRange = Math.min(remainingPower, range.max - range.min);
        if (powerInRange > 0) {
          const rangeTotal = powerInRange * range.price;
          total += rangeTotal;
          breakdownItems.push({
            range: range.description,
            power: powerInRange,
            price: range.price,
            total: rangeTotal,
          });
          remainingPower -= powerInRange;
        }
      }

      setCalculatedPrice(total);
      setBreakdown(breakdownItems);

      // Recalcula o preço final com cupom aplicado
      if (appliedCoupon) {
        const discountedPrice = applyDiscount(
          total,
          appliedCoupon.discountPercentage,
        );
        setFinalPrice(discountedPrice);
      } else {
        setFinalPrice(total);
      }
    },
    [appliedCoupon],
  );

  useEffect(() => {
    calculatePrice(power);
  }, [power, calculatePrice]);

  const handleCouponSubmit = () => {
    if (!couponCode.trim()) {
      setCouponError("Digite um código de cupom");
      return;
    }

    const coupon = validateCoupon(couponCode);

    if (coupon) {
      setAppliedCoupon(coupon);
      setCouponError("");
      // Recalcula o preço com o desconto
      const discountedPrice = applyDiscount(
        calculatedPrice,
        coupon.discountPercentage,
      );
      setFinalPrice(discountedPrice);
    } else {
      setCouponError("Cupom inválido ou expirado");
      setAppliedCoupon(null);
      setFinalPrice(calculatedPrice);
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    setCouponError("");
    setFinalPrice(calculatedPrice);
  };

  const handlePowerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setPower(value);
  };

  const generateWhatsAppMessage = () => {
    const discountAmount = appliedCoupon
      ? calculateDiscountAmount(
          calculatedPrice,
          appliedCoupon.discountPercentage,
        )
      : 0;

    const message = `Olá! Gostaria de solicitar uma proposta para projeto de energia solar.

📊 *Informações do Projeto:*
• Potência: ${power} kWp
• Valor base: R$ ${calculatedPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}

${
  appliedCoupon
    ? `🎫 *Cupom Aplicado:*
• Código: ${appliedCoupon.code}
• Desconto: ${appliedCoupon.discountPercentage}% (R$ ${discountAmount.toLocaleString("pt-BR", { minimumFractionDigits: 2 })})
• Valor final: R$ ${finalPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}

`
    : ""
}${
      breakdown.length > 0
        ? `📋 *Detalhamento do Cálculo:*
${breakdown
  .map(
    (item) =>
      `• ${item.range}: ${item.power} kWp × R$ ${item.price}/kWp = R$ ${item.total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`,
  )
  .join("\n")}`
        : ""
    }

Gostaria de receber mais informações sobre os serviços da Ultratech Sistemas.`;

    return encodeURIComponent(message);
  };

  const whatsappUrl = `https://wa.me/5554999961487?text=${generateWhatsAppMessage()}`;

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay escuro */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Fechar popup"
      />

      {/* Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800 rounded-t-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-600 rounded-lg flex items-center justify-center">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Tabela de Preços - Ultratech Sistemas
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Cálculo progressivo por faixas de potência
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Conteúdo */}
          <div className="p-6">
            {/* Calculadora */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Calculadora de Preços
              </h4>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <div className="flex flex-col sm:flex-row gap-4 items-end">
                  <div className="flex-1">
                    <label
                      htmlFor="power-input"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Potência do Projeto (kWp)
                    </label>
                    <input
                      id="power-input"
                      type="number"
                      value={power || ""}
                      onChange={handlePowerChange}
                      placeholder="Ex: 12.5"
                      step="0.1"
                      min="0"
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      R${" "}
                      {finalPrice.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {appliedCoupon ? "Valor Final" : "Valor Total"}
                    </div>
                    {appliedCoupon && (
                      <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                        Desconto: {appliedCoupon.discountPercentage}%
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Campo de Cupom */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Cupom de Desconto
              </h4>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                {!appliedCoupon ? (
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <label
                        htmlFor="coupon-input"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Código do Cupom
                      </label>
                      <input
                        id="coupon-input"
                        type="text"
                        value={couponCode}
                        onChange={(e) =>
                          setCouponCode(e.target.value.toUpperCase())
                        }
                        placeholder="Digite o código do cupom"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                      />
                      {couponError && (
                        <div className="flex items-center gap-2 mt-2 text-red-600 dark:text-red-400 text-sm">
                          <XCircle className="w-4 h-4" />
                          {couponError}
                        </div>
                      )}
                    </div>
                    <div className="flex items-end">
                      <button
                        onClick={handleCouponSubmit}
                        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <Tag className="w-4 h-4" />
                        Aplicar Cupom
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <div>
                          <div className="font-semibold text-green-800 dark:text-green-200">
                            Cupom Aplicado: {appliedCoupon.code}
                          </div>
                          <div className="text-sm text-green-600 dark:text-green-400">
                            {appliedCoupon.description}
                          </div>
                          <div className="text-sm text-green-600 dark:text-green-400">
                            Desconto de {appliedCoupon.discountPercentage}%
                            aplicado
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={handleRemoveCoupon}
                        className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors cursor-pointer"
                        title="Remover cupom"
                      >
                        <XCircle className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Tabela de Preços */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Tabela de Preços por Faixa
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Faixa de Potência (kWp)
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Preço
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceRanges.map((range, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                          {range.description}
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                          {range.price === 0 ? (
                            <span className="text-orange-600 font-semibold">
                              Sob consulta
                            </span>
                          ) : (
                            `R$ ${range.price.toLocaleString("pt-BR")}/kWp`
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Detalhamento do Cálculo */}
            {breakdown.length > 0 && power > 0 && (
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  Detalhamento do Cálculo
                </h4>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <div className="space-y-3">
                    {breakdown.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-blue-200 dark:border-blue-700 last:border-b-0"
                      >
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                            {item.range}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {item.power} kWp × R${" "}
                            {item.price.toLocaleString("pt-BR")}/kWp
                          </div>
                        </div>
                        <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                          R${" "}
                          {item.total.toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                          })}
                        </div>
                      </div>
                    ))}
                    <div className="flex justify-between items-center py-2 pt-4 border-t-2 border-blue-300 dark:border-blue-600">
                      <div className="text-lg font-bold text-gray-800 dark:text-white">
                        Total
                      </div>
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        R${" "}
                        {calculatedPrice.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                        })}
                      </div>
                    </div>
                    {appliedCoupon && (
                      <>
                        <div className="flex justify-between items-center py-2 border-t border-blue-200 dark:border-blue-700">
                          <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                            Desconto ({appliedCoupon.code}):{" "}
                            {appliedCoupon.discountPercentage}%
                          </div>
                          <div className="text-sm font-semibold text-red-600 dark:text-red-400">
                            -R${" "}
                            {calculateDiscountAmount(
                              calculatedPrice,
                              appliedCoupon.discountPercentage,
                            ).toLocaleString("pt-BR", {
                              minimumFractionDigits: 2,
                            })}
                          </div>
                        </div>
                        <div className="flex justify-between items-center py-2 pt-4 border-t-2 border-green-300 dark:border-green-600">
                          <div className="text-lg font-bold text-gray-800 dark:text-white">
                            Valor Final
                          </div>
                          <div className="text-lg font-bold text-green-600 dark:text-green-400">
                            R${" "}
                            {finalPrice.toLocaleString("pt-BR", {
                              minimumFractionDigits: 2,
                            })}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Observações */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Observações Contratuais
              </h4>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>
                    • O preço base inclui projeto/homologação até 7,5 kWp (Fast
                    Track)
                  </li>
                  <li>• Subestação (quando aplicável) é cobrada à parte</li>
                  <li>
                    • Serviços adicionais (manutenção, verificação, vistoria,
                    relatórios especiais, etc.) são cobrados à parte conforme
                    escopo
                  </li>
                  <li>• Para acima de 500 kWp, orçamento customizado</li>
                </ul>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Enviar para WhatsApp
              </a>
              <button
                onClick={onClose}
                className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
