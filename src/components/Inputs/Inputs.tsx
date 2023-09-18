type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

function Input(props: Props): JSX.Element
{
	return(
		<>
		<label>{props.title}</label>
		<input {...props}/>
		</>
	)
}

export default Input