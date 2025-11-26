import { Link, Icon } from '@/layout';
import { User } from 'lucide-react';

type AccountButtonProps = {
    closeMenu: () => void;
};
    
const AccountButton: React.FC<AccountButtonProps> = ({ closeMenu }) =>
{
    return (
        <Link
            to="/account"
            className="relative flex items-center gap-2 py-4 text-2xl transition-opacity hover:opacity-70  w-fit"
            onClick={ closeMenu }
        >
            <Icon Icon={User} size={6} />
            Mein Konto
        </Link>
    )
};

export default AccountButton;