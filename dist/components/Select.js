import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Select({ label, options, error, placeholder, className = '', id, ...props }) {
    const selectId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
    return (_jsxs("div", { className: "bp-field", children: [label && _jsx("label", { className: "bp-label", htmlFor: selectId, children: label }), _jsxs("select", { id: selectId, className: `bp-select${error ? ' bp-input--error' : ''}${className ? ' ' + className : ''}`, ...props, children: [placeholder && _jsx("option", { value: "", children: placeholder }), options.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value)))] }), error && _jsx("span", { className: "bp-error-msg", children: error })] }));
}
