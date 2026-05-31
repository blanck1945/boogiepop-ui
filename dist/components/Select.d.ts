import type { SelectHTMLAttributes } from 'react';
export type SelectOption = {
    value: string;
    label: string;
};
export type SelectProps = {
    label?: string;
    options: SelectOption[];
    error?: string;
    placeholder?: string;
    className?: string;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className'>;
export declare function Select({ label, options, error, placeholder, className, id, ...props }: SelectProps): import("react/jsx-runtime").JSX.Element;
