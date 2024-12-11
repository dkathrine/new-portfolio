import './Socials.css';

const Socials = ({ socialsIcon, socialsName, socialsLink }) => {
    return (
        <>
            <a href={socialsLink} target="_blank" rel="nofollow noopener noreferrer" className='socials_container btn'>
                <div className='socials_flex_container'>

                    <svg width="197" height="45" className='border'>
                        <rect x="5" y="5" rx="8" fill="none" stroke="#362447" width="190" height="38"></rect>
                    </svg>
                    <div className="flex items-center gap-4 text-left bg-[#1a1122] px-4 min-h-14">
                        <div className="text-white flex items-center justify-center rounded-lg bg-[#362447] shrink-0 size-10" data-icon="TwitterLogo" data-size="24px" data-weight="regular">
                            {socialsIcon}
                        </div>
                        <p className="text-white text-base font-normal leading-normal flex-1 truncate">{socialsName}</p>
                    </div >
                </div>
            </a>
        </>
    )
}

export default Socials