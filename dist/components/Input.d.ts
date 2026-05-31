import type { InputHTMLAttributes } from 'react';
export type InputProps = {
    label?: string;
    error?: string;
    className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>;
export declare function Input({ label, error, className, id, ...props }: InputProps): import("react/jsx-runtime").JSX.Element;
