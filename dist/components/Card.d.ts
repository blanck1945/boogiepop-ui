import type { HTMLAttributes, ReactNode } from 'react';
export type CardProps = {
    children: ReactNode;
    className?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'className'>;
export declare function Card({ children, className, ...props }: CardProps): import("react/jsx-runtime").JSX.Element;
