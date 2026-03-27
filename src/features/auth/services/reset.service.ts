import { http } from '@/infra/http/http-client'
import type { ResetPasswordRequestDTO } from '../types/dto/AuthDTO'

export async function resetPassword(
  data: ResetPasswordRequestDTO,
): Promise<void> {
  await http.post<void>(`auth/reset-password?token=${data}`, data)
}
