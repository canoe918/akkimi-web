import { PropsWithChildren } from "react";

interface FormLabelProps extends PropsWithChildren {
  label?: string;
  errorMessage?: string;
}

export default function FormLabel({
  label,
  errorMessage,
  children,
}: FormLabelProps) {
  return (
    <div className="flex flex-col w-full gap-y-8">
      {label && <div className="subhead1-m text-blue-gray-600">{label}</div>}

      {children}

      {errorMessage && <div className="body1-r text-red-6">{errorMessage}</div>}
    </div>
  );
}
