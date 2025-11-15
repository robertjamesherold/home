import { Link } from '@/layout';
import { Button } from '@/ui';
import { User } from 'lucide-react';

const AccountButton: React.FC = () =>
{
    return (
        <Link to="/account">
            <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
            </Button>
        </Link>
    )
};

export default AccountButton;