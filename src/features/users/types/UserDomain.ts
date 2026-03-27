import type { CampusDTO } from '@/features/auth/types/dto/AuthDTO'

export type Role = 'STUDENT' | 'PROFESSOR' | 'TECHNICIAN'

export type UserDomain = {
  id: string
  firstName: string
  lastName: string
  name: string
  bio: string
  avatarUrl?: string
  handle: string
  email: string
  role: Role
  campus: CampusDTO
  course?: string | undefined
  stats: {
    followersCount: number
    followingCount: number
    postsCount: number
  }
  isFollowing: boolean
}
