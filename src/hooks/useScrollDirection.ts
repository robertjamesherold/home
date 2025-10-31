import { useEffect, useState } from 'react';

const useScrollDirection = () =>
{
    const [scrollDir, setScrollDir] = useState<'up' | 'down'>('up');
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setScrollDir('down');
            } else {
                setScrollDir('up');
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return scrollDir;
};
export default useScrollDirection;