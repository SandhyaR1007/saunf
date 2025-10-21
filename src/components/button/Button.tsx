interface ButtonProps {
    onClick:()=>void;
    children:React.ReactNode;
}

export const Button = ({onClick}:ButtonProps) => {
  return (
    <button data-testid="btn-test" onClick={onClick}>Click me</button>
  )
}

