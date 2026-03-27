import { setAccessToken } from '@/features/auth/storages/token.storage'
import type {
  AuthResponseDTO,
  CampusDTO,
  RegisterRequestDTO,
} from '@/features/auth/types/dto/AuthDTO'
import { http } from '@/infra/http/http-client'

export async function getCampuses(): Promise<Array<CampusDTO>> {
  const campuses = await http.get<Array<CampusDTO>>('campuses')
  return campuses
}

export async function registerUser(
  user: RegisterRequestDTO,
): Promise<AuthResponseDTO> {
  const responseData = await http.post<AuthResponseDTO>('auth/register', user)
  setAccessToken(responseData.token)
  return responseData
}
