import { Form, Container } from '@/layout'
import { Input, Button } from '@/ui'
import { X } from 'lucide-react'

type SearchFormProps = {
    isMobileSearchOpen: boolean;
    searchValue: string;
    onClick: () => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};



const SearchForm:React.FC<SearchFormProps> = ( { isMobileSearchOpen, onClick, searchValue, onChange, onSubmit }) =>
{
    return (
        <>
            { isMobileSearchOpen && (
                <Container className="border-t border-gray-200 bg-white/95 px-4 py-3 backdrop-blur md:hidden">
                    <Form onSubmit={ onSubmit } className="flex-row items-center gap-2">
                        <Input value={ searchValue } onChange={ onChange } placeholder="Produkte durchsuchen" className="bg-gray-50" />
                        <Button type="submit" size="default" text='Suchen' />
                        <Button type="button" variant="ghost" size="icon" onClick={ onClick } aria-label="Suche schließen" Icon={X} iconSize={4} />
                    </Form>
                </Container>
            ) }
        </>
    );
};

export default SearchForm;