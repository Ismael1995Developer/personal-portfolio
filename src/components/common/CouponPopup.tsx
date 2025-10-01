"use client";

import { useState, useEffect } from "react";
import { Gift, Copy, Check } from "lucide-react";
import { Button } from "./Button";

interface CouponPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onUseCoupon: (couponCode: string, discount: number) => void;
}

export function CouponPopup({
  isOpen,
  onClose,
  onUseCoupon,
}: CouponPopupProps) {
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Gerar cupom aleatório entre 5% e 15%
      const randomDiscount = Math.floor(Math.random() * 11) + 5; // 5 a 15%
      const code = `DESC${randomDiscount}${Math.random().toString(36).substr(2, 4).toUpperCase()}`;

      setDiscount(randomDiscount);
      setCouponCode(code);
      setIsCopied(false);
    }
  }, [isOpen]);

  const handleCopyCoupon = async () => {
    try {
      await navigator.clipboard.writeText(couponCode);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar cupom:", err);
    }
  };

  const handleUseCoupon = () => {
    onUseCoupon(couponCode, discount);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <div className="text-center">
          {/* Ícone de presente */}
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Gift className="h-10 w-10 text-white" />
          </div>

          {/* Título */}
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
            🎉 Parabéns!
          </h3>

          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Você ganhou um desconto especial de{" "}
            <span className="font-bold text-green-600 dark:text-green-400">
              {discount}%
            </span>{" "}
            para sua Landing Page!
          </p>

          {/* Cupom */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 mb-6 border-2 border-dashed border-green-300 dark:border-green-600">
            <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
              Seu cupom de desconto:
            </div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2 font-mono">
              {couponCode}
            </div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400">
              Válido por 7 dias
            </div>
          </div>

          {/* Botão de copiar */}
          <Button
            variant="outline"
            onClick={handleCopyCoupon}
            className="w-full mb-4"
          >
            {isCopied ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Copiado!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-2" />
                Copiar Cupom
              </>
            )}
          </Button>

          {/* Botões de ação */}
          <div className="flex space-x-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Fechar
            </Button>
            <Button
              variant="gradient"
              onClick={handleUseCoupon}
              className="flex-1"
            >
              Usar Cupom
            </Button>
          </div>

          {/* Informações adicionais */}
          <div className="mt-6 text-xs text-zinc-500 dark:text-zinc-400">
            <p>• Cupom válido apenas para novos projetos</p>
            <p>• Desconto aplicado no valor final</p>
            <p>• Não cumulativo com outras promoções</p>
          </div>
        </div>
      </div>
    </div>
  );
}
