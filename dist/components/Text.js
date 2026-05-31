import { jsx as _jsx } from "react/jsx-runtime";
export function Text({ as: Tag = 'p', muted = false, children, className = '', ...props }) {
    const cls = `${muted ? 'bp-muted' : ''}${className ? (muted ? ' ' : '') + className : ''}`.trim();
    return (_jsx(Tag, { className: cls || undefined, ...props, children: children }));
}
