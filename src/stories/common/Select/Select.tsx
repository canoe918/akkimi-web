import { cn } from "@/libs/tailwindCSS/style";
import { SelectHTMLAttributes } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  placeholder?: string;
  options: string[];
}

export function Select({
  placeholder,
  label,
  disabled,
  value,
  options,
  onChange,
}: SelectProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="mb-8 text-blue-gray-600 subhead1-m">{label}</label>
      )}

      <select
        className={cn(
          "px-16 py-14 body2-r text-blue-gray-600 bg-blue-gray-50 rounded-lg",
          {
            "bg-blue-gray-200": disabled,
          },
        )}
        value={value}
        disabled={disabled}
        onChange={onChange}
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
}
