import styled from "styled-components";

export const Body = styled.div`
display: flex;
flex-direction: column;
`

export const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100vw;
height: 76px;
background-color: #3A72F8;
margin-bottom: 50px;
`

export const ContainerHeaderLeft = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-left: 30px;
span{
	color: #FFF;
	font-family: Poppins;
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
}`

export const ContainerHeaderRight = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-right: 30px;
gap: 10px;

a {
	color: #FFF;
	font-family: Poppins;
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	text-decoration-line: underline;
}

span{
	color: #FFF;
	font-family: Poppins;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
}`

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 16px;
`

export const ContainerBodyCards = styled.div`
	display: flex;
	flex-direction: column;
	width: 305px;
	height: 82vh;
	border-radius: 7px;
	background-color: #EAEAEA;
	align-items: center;

	h1{
		color: #3A72F8;
		font-family: Poppins;
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}

`