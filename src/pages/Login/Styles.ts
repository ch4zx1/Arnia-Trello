import styled from 'styled-components'

export const Body = styled.div`
display: flex;
flex-direction: row;
width: 100vw;
height: 100vh;
justify-content: center;
`

export const ContainerLogin = styled.div`
display: flex;
flex-direction: column;
width: 567px;
border-radius: 20px;
background: #3A72F8;
margin-top: 32px;
margin-bottom: 32px;
align-items: center;

h1{
	margin-top: 50px;
	margin-bottom: 50px;
	color: #FFF;
	font-family: Poppins;
	font-size: 48px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
}

button{
	margin-top: 65px;

	width: 189px;
	height: 49px;
	flex-shrink: 0;
	border-radius: 25px;
	background: #0A2668;
	border: none;

	color: #FFF;
	font-family: Poppins;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
}

a{
	margin-top: 23px;
	color: #FFF;
	text-align: center;
	font-family: Poppins;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	text-decoration-line: underline;
}
`


export const Forms = styled.div`

display: flex;
flex-direction: column;
gap: 10px;

color: #FFF;
font-family: Poppins;
font-size: 16px;

input{
	padding: 15px;
	width: 438px;
	height: 20px;
	flex-shrink: 0;
	border-radius: 25px;
	background: #FFF;
	border: none;
	margin-bottom: 30px;
	font-family: Poppins;
}

`