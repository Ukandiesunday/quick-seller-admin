import React from "react";

interface ButtonProps {
  className?: string;
  onClick?: ({}) => void;
  icon?: JSX.Element;
  label?: string;
  disabled?: boolean;
  value?: string;
  type?: "submit" | "reset" | "button" | "reset" | undefined;
  onBlur?: React.FocusEventHandler<HTMLButtonElement> | undefined;
}

const Button = ({
  label,
  icon,
  value,
  type,
  className,
  disabled,
  onClick,
  onBlur,
}: ButtonProps) => {
  return (
    <button
      onBlur={onBlur}
      data-value={value}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`flex  disabled:bg-[#E6E9EC] gap-3  disabled:text-gray-400  bg-[#4EBA6F] rounded-[8px] py-[5px] px-[12px] justify-center items-center  ${className}`}
    >
      {icon}
      {label}
    </button>
  );
};

export default Button;
