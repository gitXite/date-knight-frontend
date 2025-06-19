import dateKnightLogo from '../assets/images/dateKnightLogo.png';

function Landing() {
    return (
        <div className='flex flex-col justify-center items-center h-screen w-screen'>
            <div className='flex flex-col items-center w-2/4'>
                <img src={dateKnightLogo} className='w-2/4'/>
            </div>
        </div>
    );
}

export default Landing;
