import Brand from '@/shared/components/brand'
import { Button } from '@/shared/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card'
import { FormReset } from '@/features/auth/components/form-reset'
import { Link, useSearchParams } from 'react-router'

function ResetPasswordPage() {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')

  return (
    <section className="flex-1 flex items-center justify-center py-20 px-4">
      <Card className="w-full max-w-sm lg:max-w-md border-border">
        <CardHeader className="text-center">
          <div className="w-full flex justify-center mb-4">
            <Brand />
          </div>
          <CardTitle className="text-2xl font-bold">Criar Nova Senha</CardTitle>
          <CardDescription>
            Digite sua nova senha de acesso abaixo.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {token ? (
            <FormReset token={token} />
          ) : (
            <div className="text-center">
              <p className="text-destructive mb-4 text-sm font-medium">
                Token de segurança inválido ou ausente.
              </p>
              <Button asChild className="w-full">
                <Link to="/recover">Solicitar novo link</Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  )
}

export default ResetPasswordPage
