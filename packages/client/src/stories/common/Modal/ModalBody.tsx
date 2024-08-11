import { PropsWithChildren } from "react";

interface ModalBodyProps extends PropsWithChildren {}

export default function ModalBody({ children }: ModalBodyProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {children}
    </div>
  );
}
