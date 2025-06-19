import ThemeToggle from './ThemeToggle';

function Header() {
    return (
        <div className='flex h-20 w-full'>
            <div className='justify-self-end'>
                <ThemeToggle />
            </div>
        </div>
    )
}

export default Header;
