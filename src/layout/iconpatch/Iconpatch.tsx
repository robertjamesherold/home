import { Icon } from '@/layout';
import { cva } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn ( ...inputs: ClassValue[] )
{
    return twMerge( clsx( inputs ) )
}


type IconpatchProps = {
    icon: React.ComponentType;
    size: number;
    className?: string;
    rounded: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
    variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'danger' | 'success' | 'info' | 'service' | 'enhancement' | 'complete' | 'assistance' | null | undefined;  
}

const patchvariants = cva(
  'flex items-center justify-center shrink-0',
  {
    variants: {
      variant: {
            default:
              'border-transparent bg-yellow-400 text-white ',
            secondary:
              'border-transparent bg-gray-200 text-gray-900 ',
            destructive:
                'border-transparent bg-red-600 text-white ',
            complete:
                'border-transparent bg-lime-200 text-lime-700 ',
            assistance:
                'border-transparent bg-teal-200 text-teal-700 ',
            outline:
              'bg-gray-100 text-gray-900 border border-gray-300 ',
            danger:
              'border-transparent bg-blue-200 text-destructive',
            success:
              'border-transparent bg-green-200 text-green-700 ',
            info:
              'border-transparent bg-blue-200 text-blue-700 ', 
            service:
              'border-transparent bg-purple-200 text-purple-700 ', 
            enhancement:
              'border-transparent bg-indigo-200 text-indigo-700 ',   

      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);          


const Iconpatch: React.FC<IconpatchProps> = ( { icon, size  , className, rounded, variant } ) =>
{
    const patchSize = ( size * 2 )

    
    return (
        <div className={ cn( patchvariants( { variant } ), className, `size-${ patchSize }`, `rounded-${ rounded }` ) }>
            <Icon Icon={ icon } size={ size } />
        </div>
    )
}

export default Iconpatch    
