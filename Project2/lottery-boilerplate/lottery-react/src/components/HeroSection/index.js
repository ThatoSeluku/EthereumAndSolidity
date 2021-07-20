import React, {useState} from 'react';
import Video from '../../video/video.mp4';
import {Button} from '../Sidebar/ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
const HeroSection = () => {
  const [hover, setHover] = useState(false)
  const onHover = ()=>{
      setHover(!hover);
  }
    
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4">
               </VideoBg>
                </HeroBg>
                <HeroContent>
                    <HeroH1>South Africa's First Ethereum Raffle</HeroH1>
      <HeroP>
          Begin Now From As Little As 0.002ETH
</HeroP>
<HeroBtnWrapper>
    <Button to="signup" onMouseEnter={onHover}
     onMouseLeave={onHover}
     primary= "true"
     //dark= "true"
     >
        Begin {hover? <ArrowForward />:<ArrowRight/>
       }
    
        </Button>
    </HeroBtnWrapper>
                </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection
