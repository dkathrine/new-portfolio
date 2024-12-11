import './ProjectPage.css';
import { useState, useEffect } from 'react';
import SEOComponent from '../../components/SEO/SEOComponent';
import Badge from '../../components/Badges/Badge';
import Button from '../../components/Button/Button';
import Carousel from '../../components/Carousel/Carousel';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import MotionSection from '../../components/Motion/MotionSection';

const ProjectPage = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1025);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const { id } = useParams();

    const { data } = useFetch("projects");

    const project = data?.find(project => project.id == id);

    const myJob = project?.myJob;

    const sanitizedHTML = DOMPurify.sanitize(project?.myJob);

    return (
        <>
            {project && (
                <SEOComponent
                    title={`${project.title} - Project by Kathrine Beuth | Full-Stack Web Developer`}
                    description={`${project.title} is a ${project.type} project developed by me. ${project.desc}`}
                    keywords={`${project.title}, ${project.type}, ${project.tools.join(", ")}, Kathrine Beuth, web development projects`}
                    author="Kathrine Beuth"
                    ogUrl={`https://portfolio-kathrine.vercel.app/project/${project.id}`}
                    ogImage={project.img[0]}
                />
            )}
            <article className='general_container project_page_container'>
                <div className='project_page_content_container'>
                    {project && (
                        <>
                            {project?.img.length > 1 ? (
                                <MotionSection delay={0.2}>
                                    <div className='project_page_img bg-center bg-no-repeat aspect-video bg-cover '
                                    >
                                        <Carousel images={project?.img} />
                                    </div>
                                </MotionSection>
                            ) : (
                                <MotionSection delay={0.2}>
                                    <div className='project_page_img bg-center bg-no-repeat aspect-video bg-cover '
                                        style={{ backgroundImage: `url(${project?.img[0]})` }}
                                    >
                                    </div>
                                </MotionSection>
                            )}
                            <div className='project_page_content text-left'>
                                {
                                    isMobile ? (
                                        <section className='project_page_section'>
                                            <div className='project_page_title_container'>
                                                <h1 className='project_page_title text-white font-bold leading-normal'>{project?.title}</h1>
                                                <p className="project_page_type text-[#ad93c8] font-normal leading-normal">{project?.type}</p>
                                            </div>
                                            <div className='project_page_desc'>
                                                <p>{project?.desc}</p>
                                            </div>
                                        </section>
                                    ) : (
                                        <MotionSection direction={`right`} delay={0.2}>
                                            <section className='project_page_section'>
                                                <div className='project_page_title_container'>
                                                    <h1 className='project_page_title text-white font-bold leading-normal'>{project?.title}</h1>
                                                    <p className="project_page_type text-[#ad93c8] font-normal leading-normal">{project?.type}</p>
                                                </div>
                                                <div className='project_page_desc'>
                                                    <p>{project?.desc}</p>
                                                </div>
                                            </section>
                                        </MotionSection>
                                    )
                                }
                                {isMobile ? (
                                    myJob && (
                                        <section className='project_page_section'>
                                            <h2 className='text-white font-bold'>Contributions</h2>
                                            <div className='project_page_contribution' dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
                                        </section>
                                    )
                                ) : (
                                    myJob && (
                                        <MotionSection direction={`right`} delay={0.2}>
                                            <section className='project_page_section'>
                                                <h2 className='text-white font-bold'>Contributions</h2>
                                                <div className='project_page_contribution' dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
                                            </section>
                                        </MotionSection>
                                    )
                                )}
                                {isMobile ? (
                                    <section className='project_page_section project_page_tools'>
                                        <h2 className='text-white font-bold'>Tools used</h2>
                                        <div className='flex gap-3 p-3 flex-wrap pr-4'>
                                            {project?.tools.map((tool, i) => (
                                                <Badge key={i} badgeName={tool} />
                                            ))}
                                        </div>
                                    </section>
                                ) : (
                                    <MotionSection direction={`right`} delay={0.2}>
                                        <section className='project_page_section project_page_tools'>
                                            <h2 className='text-white font-bold'>Tools used</h2>
                                            <div className='flex gap-3 p-3 flex-wrap pr-4'>
                                                {project?.tools.map((tool, i) => (
                                                    <Badge key={i} badgeName={tool} />
                                                ))}
                                            </div>
                                        </section>
                                    </MotionSection>
                                )}
                                <div className='project_page_buttons'>
                                    <Button
                                        title={"View on Github"}
                                        link={project?.linkProject}
                                    />
                                    <Button
                                        title={"View Live"}
                                        link={project?.linkDeploy}
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </article>
        </>
    )
}

export default ProjectPage