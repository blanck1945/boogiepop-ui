import { jsx as _jsx } from "react/jsx-runtime";
export function Card({ children, className = '', ...props }) {
    return (_jsx("div", { className: `bp-card${className ? ' ' + className : ''}`, ...props, children: children }));
}
