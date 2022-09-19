import { StyledButton } from "./Button.style";

interface ButtonProps {
  margin: number;
  text: string;
  width: number;
  background: string;
  handleClick?: any;
}

const Button = ({
  margin,
  text,
  width,
  background,
  handleClick,
}: ButtonProps) => {
  return (
    <>
      <StyledButton
        onClick={handleClick}
        style={{
          width: width,
          height: 38,
          marginTop: margin,
          background: background,
        }}
      >
        {text}
      </StyledButton>
    </>
  );
};

export default Button;
