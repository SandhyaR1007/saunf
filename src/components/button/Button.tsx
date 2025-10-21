interface ButtonProps {
    onClick?:()=>void;
    children:React.ReactNode;
}

export const Button = ({onClick}:ButtonProps) => {
    function log(){console.log("Logging")}
    if(!onClick) return <button data-testid="btn-test" onClick={log}>Click me</button>
  return (
    <button data-testid="btn-test" onClick={onClick}>Click me</button>
  )
}

