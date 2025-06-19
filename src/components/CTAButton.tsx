type CTAButtonProps = {
    onClick: () => void;
};

function CTAButton({ onClick }: CTAButtonProps) {
    return (
        <div>
            <button onClick={onClick}>Start</button>
        </div>
    );
}


export default CTAButton;
