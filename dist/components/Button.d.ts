import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
type BaseProps = {
    variant?: 'primary' | 'secondary';
    size?: 'md' | 'sm';
    children: ReactNode;
    className?: string;
};
type AsButton = BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: never;
};
type AsAnchor = BaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
};
export type ButtonProps = AsButton | AsAnchor;
export declare function Button({ variant, size, children, className, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
