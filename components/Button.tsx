import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  locked?: boolean;
  variant?: "default" | "orange" | "brown";
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled = false, locked = false }) => {
  return (
    <button
      type="submit"
      className="flex items-center ring-offset-4 justify-between w-full px-4 py-5  mt-5 text-[15px] disabled:text-[#95968A] bg-[#EB9466] text-white rounded focus:ring-2 focus:ring-[#EB9466] disabled:bg-[#DCDCD6] hover:bg-[#D0865D] active:bg-[#B35F32]"
      disabled={disabled}
      onClick={!disabled && !locked ? onClick : undefined}
    >
      <span>
        {text} {locked && <span className="ml-2">🔒</span>}
      </span>
      {!disabled ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.464 6.39972V4.8C11.464 2.72 9.81067 1.06667 7.73067 1.06667C5.65067 1.06667 3.99733 2.72 3.99733 4.8V6.39972H11.464ZM2.93066 6.48583V4.8C2.93066 2.13333 5.064 0 7.73067 0C10.3973 0 12.5307 2.13333 12.5307 4.8V6.48467C13.1632 6.69605 13.5991 7.28083 13.5991 7.99972V14.3997C13.5991 15.3064 12.9057 15.9997 11.9991 15.9997H3.46572C2.55906 15.9997 1.86572 15.3064 1.86572 14.3997V7.99972C1.86572 7.28214 2.30003 6.69818 2.93066 6.48583ZM2.93239 7.99972C2.93239 7.67972 3.14572 7.46639 3.46572 7.46639H11.9991C12.3191 7.46639 12.5324 7.67972 12.5324 7.99972V14.3997C12.5324 14.7197 12.3191 14.9331 11.9991 14.9331H3.46572C3.14572 14.9331 2.93239 14.7197 2.93239 14.3997V7.99972ZM8.16033 10.5769C8.53595 10.4118 8.79825 10.0365 8.79825 9.59989C8.79825 9.01078 8.32069 8.53322 7.73158 8.53322C7.14248 8.53322 6.66492 9.01078 6.66492 9.59989C6.66492 10.0359 6.92653 10.4108 7.30135 10.5762L6.93079 12.7996H8.53079L8.16033 10.5769Z"
            fill="#95968A"
          />
        </svg>
      )}
    </button>
  );
};

export default Button;
