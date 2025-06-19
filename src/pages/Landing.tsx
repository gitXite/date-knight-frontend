import { useState } from 'react';
import { useNavigate } from 'react-router';
import CTAButton from '../components/CTAButton';
import dateKnightLogo from '../assets/images/dateKnightLogo.png';

export type LandingProps = {
    onCTAClick: () => void;
};

function Landing({ onCTAClick }: LandingProps) {
    const [animateLogo, setAnimateLogo] = useState(false);
    const navigate = useNavigate();

    const handleCTAClick = (): void => {
        setAnimateLogo(true);

        setTimeout(() => {
            onCTAClick();
            navigate('/start');
        }, 500); // set ms to match animation duration
    };
    
    return (
        <div className='flex flex-col bg-white text-black dark:bg-gray-900 dark:text-white justify-center items-center h-screen w-screen'>
            {animateLogo ? (
                <div>
                    <div>
{/*                         Insert animated logo with framer motion */}
                    </div>
                    <div>
{/*                         Insert animation for button fade-out */}
                    </div>
                </div>
            ) : (
                <div className='flex flex-col items-center w-2/4'>
                    <div>
                        <img src={dateKnightLogo} className='w-2/4'/>
                    </div>
                    <div>
                        <CTAButton onClick={handleCTAClick} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Landing;
