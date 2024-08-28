"use client";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void 
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children,
  onClick,
  type 
}) => {
  return (
    <button
      className="
        rounded-full
        bg-white
        border
        border-transparent
        disable:cursor-not-allowes
        disable:opacity-50
        text-sky-500
        text-lg
        font-bold
        hover:opacity-75
        transition
      "
      onClick={onClick}
      type={type}
    >
        {children}
    </button>
  );
};
export default Button;
