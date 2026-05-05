const Button = ({ 
    children, 
    variant = "primary", 
    onClick, 
    className = ""
}) => {

    const baseStyle = "py-3 px-5 md:px-6 lg:py-[14px] lg:px-[34px] rounded-md md:rounded-lg text-sm font-normal text-[#E6FFF9] lg:text-lg cursor-pointer transition-all duration-300 ease-linear";

    const variants = {
        primary: "bg-gradient-to-r from-[#06231D] via-[#0C342C] to-[#076653] hover:opacity-90",
        outline: "border border-[#0B3A33]/70 bg-gradient-to-t from-[#076653]/30 to-transparent hover:from-[#076653]/50 hover:border-[#0B3A33]"
    };

    return (
        <>
        <button 
            onClick={onClick}
            className={`${baseStyle} ${variants[variant]} ${className}`}
        >
            <span>
                {children}
            </span>
        </button>
        </>
    );
};

export default Button;
