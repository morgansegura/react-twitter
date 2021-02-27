import UnAuthApp from './UnAuthApp'
import AuthApp from './AuthApp'
import { useAuthUser } from './context/auth-context'

export default function App() {
	const authUser = useAuthUser()

	if (authUser) {
		return <AuthApp />
	} else {
		return <UnAuthApp />
	}
}
