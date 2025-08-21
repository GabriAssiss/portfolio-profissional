import { useState } from "react";

function SwitchButton({ checked, onChange, labels = { off: "PT", on: "EN" } }) {

  const isControlled = typeof checked === "boolean";
  const [internal, setInternal] = useState(false);
  const isOn = isControlled ? checked : internal;

  const toggle = () => {
    const next = !isOn;
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOn}
      onClick={toggle}
      className={`relative w-16 h-8 rounded-full p-1 flex items-center transition-colors duration-300
        ${isOn ? "bg-blue-500" : "bg-gray-400"}`}
    >
      <span className="absolute left-2 text-xs font-semibold select-none">{labels.off}</span>
      <span className="absolute right-2 text-xs font-semibold select-none">{labels.on}</span>
      <div
        className={`bg-white w-6 h-6 rounded-full shadow transform transition-transform duration-300
          ${isOn ? "translate-x-8" : "translate-x-0"}`}
      />
    </button>
  );
}

export default SwitchButton
