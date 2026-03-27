import type { RecoverRequestDTO } from '@/features/auth/types/dto/AuthDTO'
import { http } from '@/infra/http/http-client'



export async function recoverPassword(data: RecoverRequestDTO): Promise<{ message: string }> {

  
  return await http.post<{ message: string }>('auth/forgot-password', data)
}
