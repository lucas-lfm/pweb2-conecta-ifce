import type { Role } from '@/features/users/types/UserDomain'

export type CampusDTO = {
  id: string
  name: string
}

export type RegisterRequestDTO = {
  firstName: string
  lastName: string
  handle: string
  email: string
  role: Role
  campus: string
  password: string
  course?: string
}

export type LoginRequestDTO = {
  email: string
  password: string
}

export type AuthUser = {
  id: string
  firstName: string
  lastName: string
  name: string
  avatarUrl?: string
  email: string
  role: Role
}

export type AuthResponseDTO = {
  token: string
  user: AuthUser
}

export type RecoverRequestDTO = {
  email: string
}

export type ResetPasswordRequestDTO = {
  token: string
  newPassword: string
}
