const FormButton = ({ children, onClick }) => {

    return (
        <div className="w-full">
            <button
                type="submit"
                onClick={onClick}
                className="w-full py-[14px] bg-gradient-to-r from-[#06231D] via-[#0C342C] to-[#076653] rounded-full lg:py-[18px] text-sm font-medium text-[#E6FFF9] md:text-lg cursor-pointer transition-all duration-300 ease-linear"
            >
                {children}
            </button>
        </div>
    );
};

export default FormButton;
