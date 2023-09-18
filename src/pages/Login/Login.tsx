import Input from '../../components/Inputs/Inputs'
import * as S from './Styles'

function Login(){
	return (
		<>
		<S.Body>
		<S.ContainerLogin>
			<h1>Arnia Trello</h1>
			<S.Forms>
			<Input type='text' title='E-mail' placeholder='Digite seu email' required></Input>
			<Input type='passsword' title='Senha' placeholder='Digite sua senha' required></Input>
			</S.Forms>
			<button>ENTRAR</button>
			<a href="/register">Cadastre-se</a>
		</S.ContainerLogin>
		</S.Body>
		</>
	)
}

export default Login