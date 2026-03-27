import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { recoverSchema, type RecoverFormData } from '../schemas/recover.schema'
import { recoverPassword } from '../services/recover.service'

export function useFormRecover() {
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    getValues,
  } = useForm<RecoverFormData>({
    resolver: zodResolver(recoverSchema),
    mode: 'onBlur',
  })

  const onSubmit = async (data: RecoverFormData) => {
    try {
      const response = await recoverPassword(data)
      setSuccessMessage(response.message)
    } catch (error) {
      console.error('Erro ao solicitar recuperação:', error)
    }
  }

  return {
    state: { successMessage },
    onSubmit,
    useForm: {
      register,
      handleSubmit,
      isSubmitting,
      isValid,
      errors,
      getValues,
    },
  }
}
