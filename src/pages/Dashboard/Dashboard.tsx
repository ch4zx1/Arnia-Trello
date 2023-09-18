import * as S from './Styles'

function Dashboard(){
	return(
		<>
		<S.Body>
			<S.Header>
				<S.ContainerHeaderLeft>
					<span>Arnia Trello</span>
				</S.ContainerHeaderLeft>
				<S.ContainerHeaderRight>
					<span>Olá, Alberto</span>
					<a>Sair</a>
				</S.ContainerHeaderRight>
			</S.Header>
			<S.ContentContainer>
				<S.ContainerBodyCards>
					<h1>New</h1>
				</S.ContainerBodyCards>
				<S.ContainerBodyCards>
					<h1>To Do</h1>
				</S.ContainerBodyCards>
				<S.ContainerBodyCards>
					<h1>Doing</h1>
				</S.ContainerBodyCards>
				<S.ContainerBodyCards>
					<h1>Done</h1>
				</S.ContainerBodyCards>
			</S.ContentContainer>
		</S.Body>
		</>
	)
}
export default Dashboard