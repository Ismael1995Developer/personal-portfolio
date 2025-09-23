export interface CouponData {
  code: string;
  description: string;
  discountPercentage: number;
  validUntil?: Date;
  isActive: boolean;
}

// Lista de cupons válidos
const validCoupons: CouponData[] = [
  {
    code: "ULTRATECH10",
    description: "Desconto de 10% para novos clientes",
    discountPercentage: 10,
    validUntil: new Date("2024-12-31"),
    isActive: true,
  },
  {
    code: "ENERGIASOLAR15",
    description: "Desconto especial para projetos de energia solar",
    discountPercentage: 15,
    validUntil: new Date("2024-11-30"),
    isActive: true,
  },
  {
    code: "PRIMEIROPROJETO20",
    description: "Desconto para primeiro projeto",
    discountPercentage: 20,
    validUntil: new Date("2024-10-31"),
    isActive: true,
  },
  {
    code: "FASTTRACK5",
    description: "Desconto para projetos Fast Track",
    discountPercentage: 5,
    validUntil: new Date("2024-12-31"),
    isActive: true,
  },
];

/**
 * Valida um código de cupom
 * @param code - Código do cupom a ser validado
 * @returns CouponData se válido, null se inválido
 */
export function validateCoupon(code: string): CouponData | null {
  if (!code || typeof code !== "string") {
    return null;
  }

  const normalizedCode = code.trim().toUpperCase();
  const coupon = validCoupons.find(
    (c) => c.code.toUpperCase() === normalizedCode && c.isActive,
  );

  if (!coupon) {
    return null;
  }

  // Verifica se o cupom não expirou
  if (coupon.validUntil && new Date() > coupon.validUntil) {
    return null;
  }

  return coupon;
}

/**
 * Aplica desconto a um valor
 * @param originalPrice - Preço original
 * @param discountPercentage - Percentual de desconto
 * @returns Preço com desconto aplicado
 */
export function applyDiscount(
  originalPrice: number,
  discountPercentage: number,
): number {
  if (originalPrice <= 0 || discountPercentage <= 0) {
    return originalPrice;
  }

  if (discountPercentage >= 100) {
    return 0;
  }

  const discountAmount = (originalPrice * discountPercentage) / 100;
  return Math.max(0, originalPrice - discountAmount);
}

/**
 * Calcula o valor do desconto
 * @param originalPrice - Preço original
 * @param discountPercentage - Percentual de desconto
 * @returns Valor do desconto
 */
export function calculateDiscountAmount(
  originalPrice: number,
  discountPercentage: number,
): number {
  if (originalPrice <= 0 || discountPercentage <= 0) {
    return 0;
  }

  if (discountPercentage >= 100) {
    return originalPrice;
  }

  return (originalPrice * discountPercentage) / 100;
}

/**
 * Obtém todos os cupons ativos
 * @returns Lista de cupons ativos
 */
export function getActiveCoupons(): CouponData[] {
  const now = new Date();
  return validCoupons.filter(
    (coupon) =>
      coupon.isActive && (!coupon.validUntil || now <= coupon.validUntil),
  );
}
