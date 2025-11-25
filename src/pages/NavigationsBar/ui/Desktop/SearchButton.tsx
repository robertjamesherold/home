import { Button } from '@/ui';
import { Search } from 'lucide-react';

type SearchButtonProps = {
    onClick: () => void;
};

const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) =>
{
    return (
        <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={ onClick }
            aria-label="Suche öffnen"
            Icon={ Search }
            iconSize={4}
        >
        </Button>
    );
};

export default SearchButton;