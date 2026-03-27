import { z } from 'zod'

export const recoverSchema = z.object({
  email: z
    .string()
    .min(1, 'O e-mail é obrigatório')
    .email('Formato de e-mail inválido'),
})

export type RecoverFormData = z.infer<typeof recoverSchema>
