import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, ...props }: BadgeProps): React.JSX.Element;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

declare const index$4_Badge: typeof Badge;
declare const index$4_Button: typeof Button;
declare const index$4_Input: typeof Input;
declare const index$4_badgeVariants: typeof badgeVariants;
declare const index$4_buttonVariants: typeof buttonVariants;
declare namespace index$4 {
  export { index$4_Badge as Badge, index$4_Button as Button, index$4_Input as Input, index$4_badgeVariants as badgeVariants, index$4_buttonVariants as buttonVariants };
}

declare namespace index$3 {
  export {  };
}

declare namespace index$2 {
  export {  };
}

declare namespace index$1 {
  export {  };
}

declare namespace index {
  export {  };
}

export { index$4 as Atoms, Badge, Button, Input, index$3 as Molecules, index$2 as Organisms, index as Pages, index$1 as Templates, badgeVariants, buttonVariants };
