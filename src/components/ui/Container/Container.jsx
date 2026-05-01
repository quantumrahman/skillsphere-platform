const Container = ({ children }) => {

    return (
        <div className="w-full mx-auto sm:max-w-[1200px] lg:max-w-[1600px]">
            { children }
        </div>
    );
};

export default Container;
