import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'
import { CheckCircle2Icon, Loader2Icon } from 'lucide-react'
import { Link } from 'react-router'
import { useFormRecover } from './useFormRecover'

export function FormRecover() {
  const {
    state: { successMessage },
    onSubmit,
    useForm: { register, handleSubmit, isSubmitting, isValid, errors, getValues },
  } = useFormRecover()

  
  if (successMessage) {
    return (
      <div className="flex flex-col items-center gap-4 text-center py-4">
        <CheckCircle2Icon className="size-12 text-primary" />
        <div>
          <h3 className="font-semibold text-lg text-foreground">Verifique seu e-mail</h3>
          <p className="text-sm text-muted-foreground mt-2">
            {successMessage}
          </p>
          <p className="text-sm text-muted-foreground mt-3">
            Destino: <strong>{getValues('email')}</strong>
          </p>
        </div>
        <Button variant="outline" className="mt-4 w-full" asChild>
          <Link to="/login">Voltar para o login</Link>
        </Button>
      </div>
    )
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
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

      <Button type="submit" className="mt-4 h-11" disabled={isSubmitting || !isValid}>
        {isSubmitting ? (
          <span className="flex items-center gap-4">
            <Loader2Icon className="size-4 animate-spin" /> <span>Enviando...</span>
          </span>
        ) : (
          'Enviar link de recuperação'
        )}
      </Button>

      <Button variant="ghost" className="h-11" asChild>
        <Link to="/login">Cancelar</Link>
      </Button>
    </form>
  )
}
