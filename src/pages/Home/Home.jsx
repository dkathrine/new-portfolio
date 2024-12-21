import './Home.css';
import { useState, useEffect } from 'react';
import ParticlesBackground from '../../components/ParticlesBackground/ParticlesBackground';
import SEOComponent from '../../components/SEO/SEOComponent';


const Home = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1280);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <SEOComponent
                title="Portfolio - Kathrine Beuth | Full-Stack Web Developer"
                description="Hi, I'm Kathrine, a web developer based in Germany/NRW. I create user-friendly and functional websites. Check out my portfolio and let's collaborate!"
                keywords="web developer, Kathrine Beuth, portfolio, Germany web developer, responsive design"
                author="Kathrine Beuth"
                ogUrl="https://portfolio-kathrine.vercel.app"
                ogImage="./showcase_img_portfolio.jpg"
            />
            <div className={`${isMobile && 'general_container'} home_container`}>
                {!isMobile && <ParticlesBackground />}
                <main className='home_header'>
                    <div className='home_header_content'>
                        <h1>Hi, I'm Kathrine</h1>
                        <p>I'm a web developer based in Germany/NRW with a passion for creating beautiful, user-friendly and functional websites.</p>
                        {isMobile && (<p className='reminder'><i>For the best experience, please view on Desktop</i></p>)}
                    </div>
                    <div className='home_header_picture flex -space-x-1 flex-col' >
                        <img className='size-72 rounded-full ring-2 ring-white' src="./home_illustration.png" alt="Kathrine Beuth Foto" />
                    </div>
                </main>
            </div>
        </>
    )
}


export default Home