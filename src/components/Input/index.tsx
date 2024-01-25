import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

const shapes = { round: "rounded-[10px]" } as const;
const variants = {
  outline: {
    white_A700:
      "bg-gradient  border border-solid border-white-A700 shadow-bs text-white-A700",
    gray_200: "outline outline-[1px] outline-gray-200 text-black-900",
    gray_600_01: "border border-gray-600_01 border-solid text-gray-600_01",
  },
  fill: {
    white_A700: "bg-white-A700 text-black-900",
    blue_gray_100_33: "bg-blue_gray-100_33",
  },
} as const;
const sizes = {
  xs: "pb-1 pt-0.5 px-0.5",
  sm: "p-2",
  md: "pb-[13px] pt-4 px-[13px]",
  lg: "pb-[29px] pl-[19px] pt-[30px]",
  xl: "pb-[17px] pl-[17px] pt-[33px]",
  "2xl": "pb-[33px] pt-[35px] px-3",
} as const;

export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    wrapClassName: string;
    className: string;
    name: string;
    placeholder: string;
    type: string;
    errors: string[];
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${(shape && shapes[shape]) || ""} 
              ${(variant && variants[variant]?.[color]) || ""} 
              ${(size && sizes[size]) || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

export { Input };
