interface ButtonProps {
  text: string;
  isBeam?: boolean;
  containerClass?: string;
}

const Button: React.FC<ButtonProps> = ({ text, isBeam = false, containerClass }) => {
  return (
    <button className={`btn ${containerClass}`}>
      {
        isBeam && (
          <span className="relative flex h-3 w-3">
            <span className="btn-ping" />
            <span className="btn-ping_dot" />
          </span>
        )
      }
      {text}
    </button>
  )
}

export default Button