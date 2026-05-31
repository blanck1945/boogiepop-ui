import type { HTMLAttributes, ReactNode } from 'react';
type TextTag = 'h1' | 'h2' | 'h3' | 'p' | 'span';
export type TextProps = {
    as?: TextTag;
    muted?: boolean;
    children: ReactNode;
    className?: string;
} & Omit<HTMLAttributes<HTMLElement>, 'className'>;
export declare function Text({ as: Tag, muted, children, className, ...props }: TextProps): import("react/jsx-runtime").JSX.Element;
export {};
