import { cn } from "@/libs/tailwindCSS/style";
import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({
  label,
  placeholder,
  disabled,
  value,
  onChange,
}: InputProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="mb-8 text-blue-gray-600 subhead1-m">{label}</label>
      )}

      <input
        className={cn(
          "px-16 py-14 body2-r text-blue-gray-600 bg-blue-gray-50 rounded-lg",
          {
            "bg-blue-gray-200": disabled,
          },
        )}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
}
