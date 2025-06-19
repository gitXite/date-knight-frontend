export type CTAButtonProps = {
    onClick: () => void;
};

function CTAButton({ onClick }: CTAButtonProps) {
    return <button onClick={onClick} className='bg-gray-800 text-white dark:bg-white hover:bg-gray-100 dark:text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>Start</button>;
}


export default CTAButton;
