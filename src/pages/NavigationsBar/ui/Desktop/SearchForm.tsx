import { Search } from 'lucide-react';
import { Form, Icon } from '@/layout';
import { Input, Button } from '@/ui';

type SearchFormProps = {
    searchValue: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const SearchForm: React.FC<SearchFormProps> = ({ searchValue, onChange, onSubmit }) =>
    {
    return (
        <Form
            onSubmit={ onSubmit }
            className="relative flex-row hidden h-8 w-full items-center gap-2 rounded-lg border border-orange-400 pl-4 shadow-sm md:flex overflow-hidden"
        >
            <Icon Icon={ Search } size={ 5 } className="text-gray-600" />
            <Input
                value={ searchValue }
                onChange={ onChange }
                placeholder="Produkte durchsuchen"
                className="border-0 bg-transparent px-0 py-0 text-sm focus-visible:ring-0"
            />
            <Button
                type="submit"
                size='default'
                variant='default'
                className="relative box-content h-full rounded-none"
                text='Suchen'
            />
        </Form>
    );
};

export default SearchForm;