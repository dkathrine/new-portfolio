import './ProjectCard.css';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ title, desc, image, link }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-col gap-3 pb-3 text-left">
                <a
                    className="project_card_picture bg-center bg-no-repeat aspect-video bg-cover rounded-[10px]"
                    style={{ backgroundImage: `url(${image[0]})` }}
                    href={link}
                    onClick={(e) => {
                        e.preventDefault();
                        navigate(link);
                    }}
                ></a>
                <div>
                    <p className="project_card_title text-white font-medium leading-normal">{title}</p>
                    <p className="project_card_desc text-[#ad93c8] font-normal leading-normal">{desc}</p>
                </div>
            </div>
        </>
    )
}

export default ProjectCard