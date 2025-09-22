import { z } from "zod";

export const contactFormSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  telefone: z.string().optional(),
  servico: z.string().min(1, "Selecione um tipo de serviço"),
  mensagem: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
