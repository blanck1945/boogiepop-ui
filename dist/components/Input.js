import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Input({ label, error, className = '', id, ...props }) {
    const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
    return (_jsxs("div", { className: "bp-field", children: [label && _jsx("label", { className: "bp-label", htmlFor: inputId, children: label }), _jsx("input", { id: inputId, className: `bp-input${error ? ' bp-input--error' : ''}${className ? ' ' + className : ''}`, ...props }), error && _jsx("span", { className: "bp-error-msg", children: error })] }));
}
