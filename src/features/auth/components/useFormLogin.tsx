import { useAuth } from '@/features/auth/contexts/AuthContext'
import {
  loginSchema,
  type LoginFormData,
} from '@/features/auth/schemas/login.schema'
import { loginUser } from '@/features/auth/services/login.service'
import { ApiError } from '@/infra/http/api-error'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

export function useFormLogin() {
  const [showPass, setShowPass] = useState<boolean>(false)
  const [authError, setAuthError] = useState<string | null>(null)
  const navigate = useNavigate()
  const {setAuthUser} = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur',
  })

  const onSubmit = async (data: LoginFormData) => {
    setAuthError(null)

    try {

      const responseData = await loginUser(data)
      setAuthUser(responseData.user)
      navigate('/feed')
    } catch (error) {
      if (error instanceof ApiError) {
        setAuthError(error.message)
      } else {
        setAuthError('Ocorreu um erro inesperado. Tente novamente.')
      }
      console.error(error)
    }
  }

  return {
    state: {
      showPass,
      setShowPass,
      authError,
      setAuthError,
    },
    onSubmit,
    useForm: {
      register,
      handleSubmit,
      isSubmitting,
      isValid,
      errors,
    },
  }
}
