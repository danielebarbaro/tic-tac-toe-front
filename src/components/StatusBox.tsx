const StatusBox = ({status}: { status: String }) => {
    return (
        <div className="text-xl mt-10 mb-5 font-semibold">
            {status}
        </div>
    );
}
export default StatusBox;