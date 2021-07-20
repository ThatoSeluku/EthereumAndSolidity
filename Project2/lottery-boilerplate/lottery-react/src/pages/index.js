import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
const Home = () => {
    const [isOpen, setIsOpen] = useState(false) 
//Toggle the state from open to closed
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <InfoSection/>
        </> 
    );
};

export default Home
