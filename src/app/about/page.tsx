import React from 'react'
import AboutHero from '@/components/abouthero'
import AboutSection from '@/components/aboutsec'
import AboutProduct from '@/components/aboutproduct';

const About = () => {
    return (
        <div>
            <AboutHero />
            <AboutSection />
            <AboutProduct />
        </div>
    );
}

export default About;