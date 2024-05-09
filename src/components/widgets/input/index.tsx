

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
    error: boolean;
}

export function Input({ error, ...rest }: Props){
    
    return(
        <input {...rest} />
    )
}