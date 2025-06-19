export type CTAButtonProps = {
    onClick: () => void;
};

function CTAButton({ onClick }: CTAButtonProps) {
    return <button onClick={onClick}>Start</button>;
}


export default CTAButton;
