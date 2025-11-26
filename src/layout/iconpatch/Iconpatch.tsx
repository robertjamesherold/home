import { Icon } from '@/layout';
import useVariants from '@/theme/variants.theme'
import { cn } from '@/ui/utils'


type IconpatchProps = {
    icon: React.ComponentType;
    size: number;
    className?: string;
    rounded: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
    variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'danger' | 'success' | 'info' | 'service' | 'enhancement' | 'complete' | 'assistance' | null | undefined;  
}



const Iconpatch: React.FC<IconpatchProps> = ( { icon, size, className, rounded, variant } ) =>
{
    const patchSize = ( size * 2 )
    const { variants } = useVariants()
    const variantValue = variant === 'default' ? variants[0].default : variant === 'secondary' ? variants[0].secondary : variant === 'destructive' ? variants[0].destructive : variant === 'outline' ? variants[0].outline : variant === 'danger' ? variants[0].danger : variant === 'success' ? variants[0].success : variant === 'info' ? variants[0].info : variant === 'service' ? variants[0].service : variant === 'enhancement' ? variants[0].enhancement : variant === 'complete' ? variants[0].complete : variant === 'assistance' ? variants[0].assistance : variants[0].default

    const base = 'flex items-center justify-center shadow-md h-fit p-2 aspect-square border'
    const patchvariants = ( cn(
        base,
        variantValue
    ) )


    const sizeClass = `size-${ patchSize }`
    const roundedClass = `rounded-${ rounded }`


    return (
        <div className={ `${ patchvariants } ${ className } ${ sizeClass } ${ roundedClass } inline-flex items-center justify-center h-fit aspect-square` }>
            <Icon Icon={ icon } size={ size } className={variantValue} />
        </div>
    )
}

export default Iconpatch    



