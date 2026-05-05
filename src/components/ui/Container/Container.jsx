const Container = ({ children }) => {

    return (
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-5 lg:px-[30px]">
            {children}
        </div>
    );
};

export default Container;
