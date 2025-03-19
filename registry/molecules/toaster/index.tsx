import React from "react";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  type ToastProps,
} from "../toast";
import { useToast } from "@/registry/molecules/use-toast";

interface ToasterProps {
  children?: React.ReactNode;
}

export function Toaster({ children }: ToasterProps) {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {children}
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
