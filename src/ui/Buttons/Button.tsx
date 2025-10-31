import React, {
    Children,
    cloneElement,
    isValidElement,
} from "react"
import type { ReactElement, ReactNode } from "react"

type ButtonProps = {
    children?: ReactNode
    onClick?: () => void
    label?: ReactNode
    className?: string
    icon?: ReactElement<{ className?: string }>
    autoIcon?: boolean
    iconIndex?: number
    iconClassName?: string
    iconPosition?: "left" | "right"
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'small' | 'medium' | 'large'
}

const Button: React.FC<ButtonProps> = ( { children, variant = 'primary', size = 'medium', onClick, label, className = '', icon, autoIcon, iconIndex = 0, iconClassName = 'w-6 h-6', iconPosition = 'left' }: ButtonProps ) =>
{
    const childArray = Children.toArray( children )
    let resolvedIcon: ReactElement | null = null
    let restChildren: ReactNode[] = childArray

    const mergeClassName = ( element: ReactElement<{ className?: string }>, extra: string ) =>
    {
        const baseClassName = ( element.props as { className?: string } )?.className ?? ''
        return cloneElement(
            element,
            {
                className: [ baseClassName, extra ].filter( Boolean ).join( ' ' ),
            } as Partial<{ className?: string }>
        )
    }

    const getSizeClasses = () =>
    {
        switch ( size )
        {
            case 'small':
                return 'px-3 py-1 text-sm'
            case 'large':
                return 'px-6 py-3 text-lg'
            case 'medium':
            default:
                return 'px-4 py-2 text-base'
        }
    }

    if ( icon )
    {
        resolvedIcon = mergeClassName( icon, iconClassName )
    } else if ( autoIcon )
    {
        if ( iconIndex >= 0 && iconIndex < childArray.length )
        {
            const candidate = childArray[ iconIndex ]
            if ( isValidElement( candidate ) )
            {
                resolvedIcon = mergeClassName( candidate as ReactElement<{ className?: string }>, iconClassName )
                restChildren = childArray.slice( 0, iconIndex ).concat( childArray.slice( iconIndex + 1 ) )
            }
        }
    }

    const iconNode = resolvedIcon ? <span className="flex-none">{ resolvedIcon }</span> : null
    const extras = restChildren.length > 0 ? (
        <span className="flex-none inline-flex items-center">{ restChildren }</span>
    ) : null
    return ( <>
        { variant === 'primary' &&
            <button
                type='button'
                onClick={ onClick }
                className={ `btn-primary ${ getSizeClasses() } ${ className }` }
            >
                { iconPosition === "left" && iconNode }
                <span className="flex-1 text-center">{ label }</span>
                { iconPosition === "right" && iconNode }
                { extras }
            </button>
        }
        { variant === 'secondary' &&
            <button
                type='button'
                onClick={ onClick }
                className={ `btn-secondary ${ getSizeClasses() } ${ className }` }
            >
                { iconPosition === "left" && iconNode }
                <span className="flex-1 text-center">{ label }</span>
                { iconPosition === "right" && iconNode }
                { extras }
            </button>

        }
        { variant === 'outline' &&
            <button
                type='button'
                onClick={ onClick }
                className={ `btn-outline ${ getSizeClasses() } ${ className }` }>
                { iconPosition === "left" && iconNode }
                <span className="flex-1 text-center">{ label }</span>
                { iconPosition === "right" && iconNode }
                { extras }
            </button>
        }
    </> )
}


export default Button