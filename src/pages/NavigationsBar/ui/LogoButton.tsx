import React from 'react';
import { Link } from '@/layout';

const LogoButton: React.FC<{onClick?: () => void}> = ({onClick}) =>
{
    return (
        <Link to="/" onClick={onClick} className="flex items-center gap-2 text-xl" text='LUXE' />
    )
}

export { LogoButton };