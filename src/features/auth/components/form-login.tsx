import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'
import {
  AlertCircleIcon,
  CheckCircle2Icon,
  EyeIcon,
  EyeOffIcon,
  Loader2Icon
} from 'lucide-react'
import { Link, useLocation } from 'react-router'
import { useFormLogin } from './useFormLogin'

export function FormLogin() {
  const {
    state: { showPass, setShowPass, authError },
    onSubmit,
    useForm: { register, handleSubmit, isSubmitting, isValid, errors },
  } = useFormLogin()

  
  const location = useLocation()
  const successMessage = location.state?.message

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>


      {successMessage && (
        <div className="flex items-center gap-2 rounded-md bg-emerald-500/15 p-3 text-sm text-emerald-600 dark:text-emerald-400">
          <CheckCircle2Icon className="size-4 shrink-0" />
          <p>{successMessage}</p>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-foreground">
          E-mail institucional
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="seu.nome@ifce.edu.br"
          required
          className="h-11 bg-background"
          {...register('email')}
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className="text-foreground">
            Senha
          </Label>
          <Link to="/recover" className="text-primary text-sm hover:underline">
            Esqueceu a senha?
          </Link>
        </div>

        <div className="relative">
          <Input
            id="password"
            type={showPass ? 'text' : 'password'}
            placeholder="Digite sua senha"
            required
            className="h-11 bg-background"
            {...register('password')}
          />
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
            type="button"
            onClick={() => setShowPass((prev) => !prev)}
          >
            {showPass ? (
              <EyeOffIcon className="size-4" />
            ) : (
              <EyeIcon className="size-4" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-xs text-destructive">{errors.password.message}</p>
        )}
      </div>


      {authError && (
        <div className="flex items-center gap-2 rounded-md bg-destructive/15 p-3 text-sm text-destructive">
          <AlertCircleIcon className="size-4 shrink-0" />
          <p>{authError}</p>
        </div>
      )}

      <Button
        type="submit"
        className="mt-2 h-11"
        disabled={isSubmitting || !isValid}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-4">
            <Loader2Icon className="size-4 animate-spin" />{' '}
            <span>Entrando...</span>
          </span>
        ) : (
          'Entrar'
        )}
      </Button>
    </form>
  )
}
