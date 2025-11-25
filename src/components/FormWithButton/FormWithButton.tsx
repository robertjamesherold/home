import { useState } from 'react';
import { Form} from '@/layout';
import { Button  } from '@/ui';
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { useWindowSize } from '@/hooks'

export function cn ( ...inputs: ClassValue[] )
{
    return twMerge( clsx( inputs ) )
}


type FormWithButtonProps = {
    onSubmit: ( event: React.FormEvent<HTMLFormElement> ) => void;
    placeholder?: string;
    label: string;
};




const Input = ({ className, type, ...props }: React.ComponentProps<'input'>) => {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'bg-input-background flex h-9 w-full min-w-0 rounded-md border border-input px-3 py-1 text-base outline-none transition-[color,box-shadow] selection:bg-gray-200 selection:text-gray-900 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30 md:text-sm',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  );
}

export { Input };


const FormWithButton: React.FC<FormWithButtonProps> = ( { onSubmit, placeholder, label } ) =>
{
    const { width } = useWindowSize()
    const isDesktop = width >= 768
    const [ searchValue, setSearchValue ] = useState( '' )


    return ( <>
        { isDesktop ?
            <Form
                onSubmit={ onSubmit }
                className="flex w-full gap-3 flex-row"
            >
               <Input
                    value={ searchValue }
                    onChange={ ( event: React.ChangeEvent<HTMLInputElement> ) => setSearchValue( event.target.value ) }
                    placeholder={placeholder}
                    className="flex-1 border bg-background/80 py-2 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                />
      
                <Button
                    type="submit"
                    size='default'
                    variant='default'
                    className="w-auto "
                    text={label}
                />
            </Form> :
            <Form onSubmit={ onSubmit } className="border border-input border-ring focus-within:ring-[3px] focus-within:ring-ring/50 flex-row items-center rounded-md overflow-hidden">
                <Input value={ searchValue } onChange={ ( event: React.ChangeEvent<HTMLInputElement> ) => setSearchValue( event.target.value ) } placeholder={ placeholder } className="group bg-gray-50 border-none rounded-none" />
                <Button type="submit" size="default" text={ label } className='rounded-none border-ring group-focus-visible:ring-[3px] focus-visible:ring-ring/50'  />
            </Form>
        } </> )
}

export default FormWithButton;