import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'
import { Loader2Icon } from 'lucide-react'
import { useFormReset } from './useFormReset'

export function FormReset({ token }: { token: string }) {
  const {
    state: { resetError },
    onSubmit,
    useForm: { register, handleSubmit, isSubmitting, isValid, errors },
  } = useFormReset(token)

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      {resetError && (
        <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive text-center">
          {resetError}
        </div>
      )}

      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Nova Senha</Label>
        <Input
          id="password"
          type="password"
          placeholder="********"
          required
          {...register('password')}
        />
        {errors.password && (
          <p className="text-xs text-destructive">{errors.password.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="confirmPassword">Confirmar Nova Senha</Label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="********"
          required
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && (
          <p className="text-xs text-destructive">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <Button type="submit" className="mt-4" disabled={isSubmitting || !isValid}>
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <Loader2Icon className="size-4 animate-spin" /> Redefinindo...
          </span>
        ) : (
          'Redefinir senha'
        )}
      </Button>
    </form>
  )
}
