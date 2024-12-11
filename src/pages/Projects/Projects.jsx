import './Projects.css';
import { useState, useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import MotionSection from '../../components/Motion/MotionSection';
import SEOComponent from '../../components/SEO/SEOComponent';
import useFetch from '../../hooks/useFetch';

const Projects = () => {

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1025);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const { data } = useFetch("projects");

    return (
        <>
            <SEOComponent
                title="Projects - Kathrine Beuth | Full-Stack Web Developer"
                description="Explore my projects! View my portfolio of functional and user-friendly websites."
                keywords="web development projects, portfolio, Kathrine Beuth, Germany web developer, creative designs"
                author="Kathrine Beuth"
                ogUrl="https://portfolio-kathrine.vercel.app/projects"
                ogImage="./showcase_img_portfolio_projects.jpg"
            />
            <main className='projects_main general_container'>
                <section className='projects_section'>
                    <h2>My Projects</h2>
                    <div className="flex flex-wrap gap-3 p-4 justify-evenly">
                        {data?.map((project, index) => (
                            <MotionSection key={index} direction="down" delay={isMobile ? 0.1 : 0.1 + index * 0.2}>
                                <ProjectCard
                                    key={index}
                                    image={project?.img}
                                    title={project?.title}
                                    desc={project?.type}
                                    link={`/project/${project?.id}`}
                                />
                            </MotionSection>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Projects