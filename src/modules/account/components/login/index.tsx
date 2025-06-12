import { login } from "@lib/data/customer"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import Input from "@modules/common/components/input"
import { useActionState } from "react"
import GoldenBackground from "@/modules/common/components/GoldenBackground"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(login, null)

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-pearl">
      <GoldenBackground />
      <div
        className="max-w-sm w-full flex flex-col items-center bg-pearl p-8 rounded-2xl shadow-2xl border border-gold/30 z-10"
        style={{ boxShadow: '0 8px 32px 0 rgba(250, 214, 165, 0.15)' }}
        data-testid="login-page"
      >
        <h1 className="text-3xl font-extrabold text-black mb-2">Bienvenido de nuevo</h1>
        <p className="text-center text-grey-90 mb-8">Inicia sesión para continuar</p>
        <form className="w-full" action={formAction}>
          <div className="flex flex-col w-full gap-y-4">
            <Input
              label="Correo electrónico"
              name="email"
              type="email"
              title="Introduce un correo válido."
              autoComplete="email"
              required
              data-testid="email-input"
              className="bg-pearl border-gold text-black placeholder:text-grey-80 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <Input
              label="Contraseña"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              data-testid="password-input"
              className="bg-pearl border-gold text-black placeholder:text-grey-80 focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <ErrorMessage error={message} data-testid="login-error-message" />
          <div className="flex justify-end mt-2 mb-4">
            <button type="button" className="text-gold hover:text-black text-sm font-medium transition-colors">¿Olvidaste tu contraseña?</button>
          </div>
          <SubmitButton data-testid="sign-in-button" className="w-full mt-2 bg-gold text-black font-bold rounded-lg hover:bg-black hover:text-pearl transition-all shadow-md py-3">
            Iniciar sesión
          </SubmitButton>
        </form>
        <div className="flex flex-col items-center w-full mt-8">
          <hr className="w-full border-gold/30 mb-4" />
          <span className="text-center text-grey-90 text-sm mb-2">¿No tienes una cuenta?</span>
          <button
            onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
            className="text-gold hover:text-black font-semibold transition-colors underline"
            data-testid="register-button"
          >
            Regístrate aquí
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
