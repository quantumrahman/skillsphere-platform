"use client";

import { RiEyeFill, RiEyeOffFill  } from "react-icons/ri";
import { useState } from "react";

const FormInput = ({ 
    type = "text", 
    name = "default", 
    placeholder = "Default", 
    value = "Default", 
    onChange, 
    error = ""
}) => {

    const [showPassword, setShowPassword] = useState(false);

    const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="w-full relative">
            <div className="relative">
                <input 
                    type={inputType}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`w-full rounded-full bg-[#021412]/50 backdrop-blur-sm border caret-[#00FFA3] focus:outline-none text-sm font-normal text-[#E6FFF9] md:text-base lg:text-lg placeholder:text-[#5C8F86] transition-all duration-300 ease-linear 
                    ${error 
                        ? "border-[#FF4D4D] focus:border-[#FF4D4D]" 
                        : "border-[#0B3A33] focus:border-[#00FFA3]"
                    }
                    ${type === "password" 
                        ? "py-5 lg:py-6 pl-5 lg:pl-6 pr-14 lg:pr-17"
                        : "p-5 lg:p-6"
                    }`}
                />
                {type === "password" && (
                    <button 
                        type="button"
                        onClick={handleTogglePassword}
                        className="w-5 h-5 lg:w-6 lg:h-6 absolute top-1/2 right-5 -translate-y-1/2 lg:right-6 cursor-pointer"
                    >
                        {showPassword 
                            ? <RiEyeOffFill color="#E6FFF9" className="text-xl lg:text-2xl transition-all duration-300 ease-linear"/>
                            : <RiEyeFill color="#E6FFF9" className="text-xl lg:text-2xl transition-all duration-300 ease-linear"/>
                        }
                    </button>
                )}
            </div>
            <div className="w-full min-h-[24px] text-right mt-1">
                {error && (
                    <span className="text-sm lg:text-base font-normal text-[#FF6B6B]"
                    >
                        {error}
                    </span>
                )}
            </div>
        </div>
    );
};

export default FormInput;
