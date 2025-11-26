import { AnimatePresence, motion } from 'framer-motion'
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
        <AnimatePresence>
            { isMobileSearchOpen && (
                <>


                    <motion.div
                        initial={ { x: '100%' } }
                        animate={ { x: '0%' } }
                        exit={ { x: '100%' } }
                        transition={ { type: 'tween', duration: 0.3 } }
                        className="absolute bottom-0 right-0 top-0 z-0 w-full overflow-y-auto md:hidden "
                    >
                        <Container className=" bg-white/90 backdrop-blur  safe-area-padding py-4 md:hidden">
                    <Form onSubmit={ onSubmit } className="flex-row items-center gap-2">
                        <Input value={ searchValue } onChange={ onChange } placeholder="Produkte durchsuchen" className="bg-gray-50" />
                        <Button type="submit" size="default" text='Suchen' />
                        <Button type="button" variant="ghost" size="icon" onClick={ onClick } aria-label="Suche schließen" Icon={X} iconSize={4} />
                    </Form>
                </Container>
                    </motion.div>
                </>
            ) }
        </AnimatePresence>
    );
};

export default SearchForm;