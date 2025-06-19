type CTAButtonProps = {
    onClick: () => void;
};

function CTAButton({ onClick }: CTAButtonProps) {
    return (
        <div>
            <button onClick={handleCTAClick}>START</button>
        </div>
    );
}


export default CTAButton;
