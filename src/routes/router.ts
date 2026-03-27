import AppLayout from '@/layouts/AppLayout'
import PublicLayout from '@/layouts/PublicLayout'
import FeedPage from '@/pages/FeedPage'
import HomePage from '@/pages/homepage/HomePage'
import LoginPage from '@/pages/LoginPage'
import RecoverPage from '@/pages/RecoverPage'
import RegisterPage from '@/pages/RegisterPage'
import ResetPasswordPage from '@/pages/ResetPasswordPage'
import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter([
  {
    Component: PublicLayout,
    children: [
      {
        path: '/',
        Component: HomePage,
      },
      {
        path: '/login',
        Component: LoginPage,
      },
      {
        path: 'register',
        Component: RegisterPage,
      },
      {
        path: 'recover',
        Component: RecoverPage,
      },
      {
        path: '/auth/reset-password',
        Component: ResetPasswordPage,
      },
    ],
  },
  {
    Component: AppLayout,
    children: [
      {
        path: 'feed',
        Component: FeedPage,
      },
    ],
  },
])
