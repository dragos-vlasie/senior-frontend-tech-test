import { useState } from "react";
import { joinClassNames } from "@/utils/joinClassNames";

interface FloatingLabelInputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const FloatingLabelInput = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
}: FloatingLabelInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="relative mb-4 w-full">
      <input
        type={type}
        id={id}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => onChange(e.target.value)}
        className={joinClassNames(
          "block w-full px-4 pt-7 pb-3 text-base text-[#030302] rounded-md transition-all duration-200 focus:outline-none border-2 ",
          error
            ? "border-[#EF9A9A] focus:border-[#EF9A9A] bg-[#FFEBEE]"
            : "hover:border-[#F1BEA2] focus:border-[#D0865D]",
          value || isFocused ? "placeholder-transparent" : ""
        )}
      />
        {error && <p className="text-red-500 text-xs mt-1 mb-2">{error}</p>}

      <label
        htmlFor={id}
        className={joinClassNames(
          "absolute left-4 text-[#95968A] transition-all duration-200",
          value || isFocused
            ? "-translate-y-5 text-sm top-7 left-4"
            : "translate-y-2 top-4 transform"
        )}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
