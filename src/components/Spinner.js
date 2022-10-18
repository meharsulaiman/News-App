import spinner from "./loading.gif";

const Spinner = () => {
    return (
        <div className="text-center">
            <img src={spinner} alt="spinner" className="my-3" />
        </div>
    );
};

export default Spinner;
