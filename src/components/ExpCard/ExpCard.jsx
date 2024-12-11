

const ExpCard = ({ expIcon, expLoc, expFrom, expTo, expAs, expLink }) => {
    return (
        <>
            {
                expLink ? (
                    <a href={expLink} target="_blank" rel="nofollow noopener noreferrer" className="group">
                        <div className="flex items-center gap-4 bg-[#1a1122] px-4 min-h-[72px] py-2">
                            <div className="text-white flex items-center justify-center rounded-lg bg-[#362447] shrink-0 size-12 group-hover:bg-[#4d3264] transition-all duration-500 ease-in-out" data-icon="Briefcase" data-size="24px" data-weight="regular">
                                {expIcon}
                            </div>
                            <div className="flex flex-col flex-wrap justify-center">
                                <p className="exp_title text-white text-base font-medium leading-normal line-clamp-2 self-start">{expAs}</p>
                                <p className="text-[#ad93c8] text-sm font-normal leading-normal line-clamp-2">{expFrom} - {expTo} {expLoc && "·"} <nobr>{expLoc}</nobr></p>
                            </div>
                        </div>
                    </a>
                ) : (
                    <div className="flex items-center gap-4 bg-[#1a1122] px-4 min-h-[72px] py-2">
                        <div className="text-white flex items-center justify-center rounded-lg bg-[#362447] shrink-0 size-12" data-icon="Briefcase" data-size="24px" data-weight="regular">
                            {expIcon}
                        </div>
                        <div className="flex flex-col flex-wrap justify-center">
                            <p className="exp_title text-white text-base font-medium leading-normal line-clamp-2 self-start">{expAs}</p>
                            <p className="text-[#ad93c8] text-sm font-normal leading-normal line-clamp-2">{expFrom} - {expTo} {expLoc && "·"} <nobr>{expLoc}</nobr></p>
                        </div>
                    </div>
                )
            }
        </>

    )
}

export default ExpCard