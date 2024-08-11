import { cn } from "@/libs/tailwindCSS/style";
import { ForwardedRef, forwardRef, SelectHTMLAttributes } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  placeholder?: string;
  error?: boolean;
  options: string[];
}

export const Select = forwardRef(function Select(
  {
    placeholder,
    label,
    disabled,
    value,
    error,
    options,
    onChange,
    ...props
  }: SelectProps,
  ref: ForwardedRef<HTMLSelectElement>,
) {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="mb-8 text-blue-gray-600 subhead1-m">{label}</label>
      )}

      <select
        ref={ref}
        className={cn(
          "px-16 py-14 body2-r text-blue-gray-600 bg-blue-gray-50 rounded-lg",
          {
            "bg-blue-gray-200": disabled,
            "bg-red-1 outline-red-6": error,
          },
        )}
        value={value}
        disabled={disabled}
        onChange={onChange}
        {...props}
      >
        {placeholder && (
          <option disabled value="">
            {placeholder}
          </option>
        )}

        {options &&
          options.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
      </select>
    </div>
  );
});
