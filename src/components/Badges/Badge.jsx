import './Badge.css';

const Badge = ({ badgeName }) => {
    return (
        <>
            <div className="badge flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#362447] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">{badgeName}</p>
            </div>
        </>
    )
}

export default Badge