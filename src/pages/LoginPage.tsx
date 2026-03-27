import Brand from '@/shared/components/brand'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card'
import { FormLogin } from '@/features/auth/components/form-login'

function LoginPage() {
  return (
    <section className="flex-1 flex items-center justify-center py-20">
      <Card className="w-full max-w-sm lg:max-w-md border-border mx-4 lg:mx-0">
        <CardHeader className="text-center ">
          <div className="w-ful flex justify-center mb-4">
            <Brand />
          </div>

          <CardTitle className="text-2xl font-bold text-foreground">
            Bem-vindo de volta
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Entre com seu e-mail institucional
          </CardDescription>
        </CardHeader>

        <CardContent>
          <FormLogin />
        </CardContent>

        <CardFooter className="border-t border-border">
          <p className="text-sm text-muted-foreground text-center w-full">
            Não tem conta?{' '}
            <a href="/register" className="text-primary hover:underline">
              Criar conta
            </a>
          </p>
        </CardFooter>
      </Card>
    </section>
  )
}

export default LoginPage
