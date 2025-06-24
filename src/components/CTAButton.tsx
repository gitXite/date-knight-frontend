export type CTAButtonProps = {
    onClick: () => void;
};

function CTAButton({ onClick }: CTAButtonProps) {
    return <button onClick={onClick} className='flex items-center h-10 w-25 rounded-lg text-white bg-rose-900 text-xl cursor-pointer drop-shadow-md'>Start</button>;
}


export default CTAButton;
