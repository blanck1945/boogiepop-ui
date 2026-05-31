import { jsx as _jsx } from "react/jsx-runtime";
export function Button({ variant = 'primary', size, children, className = '', ...props }) {
    const base = variant === 'primary' ? 'bp-btn-primary' : 'bp-btn-secondary';
    const sz = size === 'sm' ? ' bp-btn-sm' : '';
    const cls = `${base}${sz}${className ? ' ' + className : ''}`;
    if ('href' in props && props.href !== undefined) {
        const { href, ...rest } = props;
        return _jsx("a", { href: href, className: cls, ...rest, children: children });
    }
    const { ...rest } = props;
    return _jsx("button", { className: cls, ...rest, children: children });
}
