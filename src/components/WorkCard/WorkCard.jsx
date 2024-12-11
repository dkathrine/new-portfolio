

const WorkCard = ({ workedAt, workedAs, workedFrom, workedTo }) => {
    return (
        <div className="flex flex-initial basis-3/4 gap-3 rounded-lg border border-[#4d3465] bg-[#261a32] p-4 flex-col">
            <div className="flex flex-col gap-1">
                <h2 className="text-white text-base font-bold leading-tight">{workedAt}</h2>
                <h2 className="text-white text-base font-bold leading-tight">{workedAs}</h2>
                <p className="text-[#ad93c8] text-sm font-normal leading-normal">{workedFrom} - {workedTo}</p>
            </div>
        </div>
    )
}

export default WorkCard