import { useState } from 'react';
import { useNavigate } from 'react-router';
import CTAButton from '../components/CTAButton';
import dateKnightLogo from '../assets/images/dateKnightLogo.png';

function Landing({ onCTAClick }) {
    const [animateLogo, setAnimateLogo] = useState(false);
    const navigate = useNavigate();

    const handleCTAClick = () => {
        setAnimateLogo(true);

        setTimeout(() => {
            onCTAClick();
            navigate('/start');
        }, 500);
    };
    
    return (
        <div className='flex flex-col justify-center items-center h-screen w-screen'>
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
                <div>
                    <div className='flex flex-col items-center w-2/4'>
                        <img src={dateKnightLogo} className='w-2/4'/>
                    </div>
                    <div>
                        <CTAButton handleCTAClick={handleCTAClick}/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Landing;
