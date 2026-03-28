import { z } from 'zod'

export const registerSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, 'O nome deve ter pelo menos 2 caracteres.'),
  lastName: z.string().min(2, 'Sobrenome muito curto'),
  handle: z
    .string()
    .trim()
    .min(3, 'O nome de usuário deve ter pelo menos 3 caracteres.')
    .regex(
      /^[a-zA-Z0-9_]+$/,
      'O nome de usuário só pode conter letras, números e underscores.',
    ),
  email: z.email().endsWith('ifce.edu.br', 'Use seu email instititucional'),
  role: z.enum(['STUDENT', 'PROFESSOR', 'TECHNICIAN']),
  campus: z.string().nonempty(),
  course: z
    .string()
    .trim()
    .min(3, 'O nome do curso deve ter pelo menos 3 caracteres.')
    .optional(),

  password: z
    .string()
    .min(8, 'Mínimo de 8 caracteres')
    .regex(/[A-Za-z]/, 'Precisa ter letras')
    .regex(/[0-9]/, 'Precisa ter números'),
})

export type RegisterFormData = z.infer<typeof registerSchema>
