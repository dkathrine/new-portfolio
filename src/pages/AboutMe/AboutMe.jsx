import './AboutMe.css';
import { useState, useEffect } from 'react';
import { BriefcaseBusiness, GraduationCap, Github, Linkedin, Mail, Languages } from 'lucide-react';
import SEOComponent from '../../components/SEO/SEOComponent';
import Badge from '../../components/Badges/Badge';
import ExpCard from '../../components/ExpCard/ExpCard';
import Socials from '../../components/Socials/Socials';
import MotionSection from '../../components/Motion/MotionSection';

const AboutMe = () => {
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
    return (
        <>
            <SEOComponent
                title="About Me - Kathrine Beuth | Full-Stack Web Developer"
                description="Learn more about me, a full-stack web developer with expertise in front-end and back-end technologies. Discover my skills, experience, education, and more."
                keywords="about Kathrine Beuth, full-stack developer, web development skills, experience, education, connect, portfolio"
                author="Kathrine Beuth"
                ogUrl="https://portfolio-kathrine.vercel.app/about"
                ogImage="./showcase_img_portfolio_aboutme.jpg"
            />
            <div className='general_container about_container'>
                <header className='about_header'>
                    <div className='about_header_content_container'>
                        <MotionSection direction="left" delay={0.2}>
                            <div className='about_header_picture flex -space-x-1'>
                                <img className='inline-block size-36 rounded-full' src="./Foto_Kathrine.jpg" alt="Kathrine Beuth Foto" />
                            </div>
                        </MotionSection>
                        <MotionSection direction="down" delay={0.4}>
                            <div className='about_header_content'>
                                <p className='text-white text-[22px] font-bold leading-tight tracking-[-0.015em]'>Kathrine Beuth</p>
                                <p className='text-[#ad93c8] text-base font-normal leading-normal'>Full-Stack Web Developer</p>
                            </div>
                        </MotionSection>
                    </div>
                    <MotionSection direction="right" delay={0.7}>
                        <div className='about_header_content'>
                            <p>
                                I'm a web developer with a passion for creating modern, user-friendly and functional websites. I mostly worked in front-end development, but I'm also familiar with back-end programming and I am always eager to learn more. I've worked with the latest technologies including React, Vue, Node.js, and NoSQL Databases.
                            </p>
                        </div>
                    </MotionSection>
                </header>
                <main className='about_main'>
                    <MotionSection direction={isMobile ? "up" : "right"} delay={isMobile ? 0 : 1.0}>
                        <section className='about_section'>
                            <h2>Skills</h2>
                            <div className="flex gap-3 p-3 flex-wrap pr-4">
                                <Badge badgeName={"Front-End Development"} />
                                <Badge badgeName={"Back-End Development"} />
                                <Badge badgeName={"MERN"} />
                                <Badge badgeName={"HTML"} />
                                <Badge badgeName={"CSS"} />
                                <Badge badgeName={"SCSS"} />
                                <Badge badgeName={"Javascript"} />
                                <Badge badgeName={"React"} />
                                <Badge badgeName={"Vue"} />
                                <Badge badgeName={"Bootstrap"} />
                                <Badge badgeName={"TailwindCSS"} />
                                <Badge badgeName={"MaterialUI"} />
                                <Badge badgeName={"Node.js"} />
                                <Badge badgeName={"Express.js"} />
                                <Badge badgeName={"REST API"} />
                                <Badge badgeName={"MongoDB"} />
                                <Badge badgeName={"Mongoose"} />
                                <Badge badgeName={"Dart"} />
                                <Badge badgeName={"Flutter"} />
                            </div>
                        </section>
                    </MotionSection>
                    <div className='about_main_section_container'>
                        <MotionSection direction="up" delay={isMobile ? 0 : 1.3}>
                            <div className='about_section_container'>
                                <section className='about_section about_exp'>
                                    <h2>Experience</h2>
                                    <ExpCard
                                        expIcon={<BriefcaseBusiness />}
                                        expAs={"Front-End Web Developer"}
                                        expFrom={"05/2024"}
                                        expTo={"02/2025"}
                                        expLoc={"Career-Threads GmbH"}
                                    />
                                    <ExpCard
                                        expIcon={<BriefcaseBusiness />}
                                        expAs={"Front-End Web Developer"}
                                        expFrom={"09/2023"}
                                        expTo={"05/2024"}
                                        expLoc={"Personalburg e.K."}
                                    />
                                </section>
                                <section className='about_section about_exp'>
                                    <h2>Education</h2>
                                    <ExpCard
                                        expIcon={<GraduationCap />}
                                        expAs={"App Development Training"}
                                        expFrom={"03/2025"}
                                        expTo={"Present"}
                                        expLoc={"App Akademie"}
                                        expLink={"/Zertifikat_Beuth_Kathrine_App_Akadmie.pdf"}
                                    />
                                    <ExpCard
                                        expIcon={<GraduationCap />}
                                        expAs={"Full-Stack Web Development Training"}
                                        expFrom={"06/2022"}
                                        expTo={"08/2023"}
                                        expLoc={"Digital Career Institute"}
                                        expLink={"/Zertifikat_Beuth_Kathrine_DCI.pdf"}
                                    />
                                </section>
                            </div>
                        </MotionSection>
                        <MotionSection direction="up" delay={isMobile ? 0 : 1.6}>
                            <section className='about_section'>
                                <h2>Languages</h2>
                                <ExpCard
                                    expIcon={<Languages />}
                                    expAs={"German"}
                                    expFrom={"Level"}
                                    expTo={"Native Speaker"}
                                    expLoc={""}
                                />
                                <ExpCard
                                    expIcon={<Languages />}
                                    expAs={"English"}
                                    expFrom={"Level"}
                                    expTo={"C1"}
                                    expLoc={""}
                                />
                            </section>
                        </MotionSection>
                        <MotionSection direction="up" delay={isMobile ? 0 : 1.9}>
                            <section className='about_socials_container'>
                                <h2>Connect with me</h2>
                                <Socials
                                    socialsIcon={<Github />}
                                    socialsName={"@dkathrine"}
                                    socialsLink={"https://github.com/dkathrine"}
                                />
                                <Socials
                                    socialsIcon={<Linkedin />}
                                    socialsName={"Kathrine Beuth"}
                                    socialsLink={"https://www.linkedin.com/in/kathrine-beuth-39a8b9250/"}
                                />
                                <Socials
                                    socialsIcon={<Mail />}
                                    socialsName={"E-Mail"}
                                    socialsLink={"mailto:kathrinebeuth@web.de"}
                                />
                            </section>
                        </MotionSection>
                    </div>
                </main>
            </div>
        </>
    )
}

export default AboutMe
