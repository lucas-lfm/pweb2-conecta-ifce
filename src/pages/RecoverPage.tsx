import Brand from '@/shared/components/brand'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card'
import { FormRecover } from '@/features/auth/components/form-recover'

function RecoverPage() {
  return (
    <section className="flex-1 flex items-center justify-center py-20 px-4">
      <Card className="w-full max-w-sm lg:max-w-md border-border">
        <CardHeader className="text-center">
          <div className="w-full flex justify-center mb-4">
            <Brand />
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">
            Recuperar Senha
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Informe seu e-mail para receber as instruções
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormRecover />
        </CardContent>
      </Card>
    </section>
  )
}

export default RecoverPage
