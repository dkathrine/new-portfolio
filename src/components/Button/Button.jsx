import './Button.css';
import { useState } from 'react';

const Button = ({ title, link }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [hasBeenHovered, setHasBeenHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
        setHasBeenHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const isDisabled = !link;

    const displayedText = (() => {
        if (title.includes("Github")) return "Github Link not available";
        if (title.includes("Live")) return "Live Link not available";
        return "Link not available";
    })();

    return isDisabled ? (
        <>
            <div className="inline-flex basis-0 items-center justify-center py-2 text-m font-medium text-white bg-gray-400 rounded-md flex-grow cursor-default">
                {displayedText}
            </div>
        </>
    ) : (
        <>
            <a href={`${link}`} target="_blank" rel="nofollow noopener noreferrer" className="basis-0 flex-grow">
                <div className="button-container inline-flex items-center justify-center text-m font-medium text-white bg-[#362447] rounded-md w-[100%]"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <span className='mas'>{title}</span>
                    <button className={`${isHovered ? 'hover-animate' : (hasBeenHovered ? 'reverse-animate' : '')}`} id='work'>{title}</button>
                </div>
            </a>
        </>
    )
}

export default Button