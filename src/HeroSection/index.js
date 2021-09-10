import React, {useState} from 'react'
import {HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
import {Button} from '../ButtonElements';
const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <>
        <HeroContainer>
            <HeroBg />
            <HeroContent>

                <HeroH1>
                All of your data points from your IOT devices in one point driven by powerful-sockets 
                and fast-access rpc connections
                </HeroH1>

                <HeroP>
                We help enterprises adopt, manage and leverage event-driven architecture
                <ul>
                <li>Build event meshes to stream events across any environment</li>
                <li>Design, discover, share, and manage events</li>
                <li>Visualize and govern event flow across your enterprise</li>
                </ul>
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                        Get Started {hover? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
        </>
    )
}

export default HeroSection;
