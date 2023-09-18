import Input from '../../components/Inputs/Inputs'
import * as S from './Styles'

function Signin(){
	return (
		<>
		<S.Body>
		<S.ContainerSignin>
			<h1>Arnia Trello</h1>
			<h3>Cadastro</h3>
			<S.Forms>
			<Input type='text' title='Nome completo' placeholder='Digite seu E-mail' required></Input>
			<Input type='text' title='E-mail' placeholder='Digite seu E-mail' required></Input>
			<Input type='password' title='Senha' placeholder='Digite sua senha' required></Input>
			<Input type='password' title='Repita sua senha' placeholder='Repita sua senha' required></Input>
			</S.Forms>
			<button>CADASTRAR</button>
		</S.ContainerSignin>
		</S.Body>
		</>
	)
}

export default Signin