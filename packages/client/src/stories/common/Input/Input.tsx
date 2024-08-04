import { cn } from "@/libs/tailwindCSS/style";
import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
}

export const Input = forwardRef(function Input(
  {
    className,
    label,
    error,
    placeholder,
    disabled,
    value,
    onChange,
    ...props
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <input
      ref={ref}
      className={cn(
        "px-16 py-14 body2-r text-blue-gray-600 bg-blue-gray-50 rounded-lg",
        {
          "bg-blue-gray-200": disabled,
          "bg-red-1 outline-red-6": error,
        },
        className,
      )}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      {...props}
    />
  );
});
