import { useAvatar } from '@/features/users/components/useAvatar'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/shared/components/ui/avatar'

function UserAvatar({
  avatarUrl,
  firstName,
  lastName,
  size,
}: {
  avatarUrl: string | undefined
  firstName: string | undefined
  lastName: string | undefined
  size: 'sm' | 'default' | 'lg' | undefined
}) {
  const { getInicials } = useAvatar(firstName, lastName)
  const initials = getInicials()

  return (
    <Avatar size={size}>
      <AvatarImage src={avatarUrl} />
      <AvatarFallback className="bg-primary/20 text-primary border border-primary/50 font-semibold">
        {initials}
      </AvatarFallback>
    </Avatar>
  )
}

export default UserAvatar
