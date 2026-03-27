import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { resetSchema, type ResetFormData } from '../schemas/reset.schema'
import { resetPassword } from '../services/reset.service'
import { ApiError } from '@/infra/http/api-error'

export function useFormReset(token: string) {
  const [resetError, setResetError] = useState<string | null>(null)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ResetFormData>({
    resolver: zodResolver(resetSchema),
    mode: 'onBlur',
  })

  const onSubmit = async (data: ResetFormData) => {
    setResetError(null)
    try {
      await resetPassword({
        token: token,
        newPassword: data.password,
      })

      navigate('/login', {
        state: { message: 'Senha alterada com sucesso! Faça seu login.' },
      })
    } catch (error) {
      if (error instanceof ApiError) {
        setResetError(error.message)
      } else {
        setResetError('Ocorreu um erro ao redefinir a senha. Tente novamente.')
      }
      console.error(error)
    }
  }

  return {
    state: { resetError },
    onSubmit,
    useForm: { register, handleSubmit, isSubmitting, isValid, errors },
  }
}
