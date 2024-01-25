import React from "react";

const shapes = { circle: "rounded-[50%]", round: "rounded-[5px]" } as const;
const variants = {
  fill: {
    red_A700: "bg-red-A700 text-white-A700",
    gray_600: "bg-gray-600 text-white-A700",
    gray_200: "bg-gray-200",
    white_A700: "bg-white-A700",
    gray_900: "bg-gray-900 text-white-A700",
    deep_purple_500: "bg-deep_purple-500 text-white-A700",
  },
  outline: {
    indigo_900: "border border-indigo-900 border-solid text-gray-600_01",
  },
} as const;
const sizes = { xs: "p-1.5", sm: "p-[9px]", md: "p-[13px]" } as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "deep_purple_500",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
