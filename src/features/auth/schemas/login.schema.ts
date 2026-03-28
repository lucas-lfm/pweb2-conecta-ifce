import { z } from 'zod'

export const loginSchema = z.object({
  email: z.email().endsWith('ifce.edu.br', 'Use seu email institucional'),
  password: z
    .string()
    .min(8, 'Mínimo de 8 caracteres')
    .regex(/[A-Za-z-Z0-9]/, 'senha deve conter letras e números')
})

export type LoginFormData = z.infer<typeof loginSchema>
