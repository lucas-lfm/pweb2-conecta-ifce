import {
  clearAccessToken,
  setAccessToken,
} from '@/features/auth/storages/token.storage'
import type {
  AuthResponseDTO,
  LoginRequestDTO,
} from '@/features/auth/types/dto/AuthDTO'
import { http } from '@/infra/http/http-client'

export async function loginUser(
  credentials: LoginRequestDTO,
): Promise<AuthResponseDTO> {
  const responseData = await http.post<AuthResponseDTO>(
    'auth/login',
    credentials,
  )

  setAccessToken(responseData.token)
  return responseData
}

export function logoutUser(): void {
  clearAccessToken()
}
