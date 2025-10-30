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
}

const Button: React.FC<ButtonProps> = ( { children, variant = 'primary', onClick, label, className = '', icon, autoIcon, iconIndex = 0, iconClassName = 'w-6 h-6', iconPosition = 'left' }: ButtonProps ) =>
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
        <span className="flex-none inline-flex items-center space-x-2">{ restChildren }</span>
    ) : null
    return ( <>
        { variant === 'primary' &&
            <button
                type='button'
                onClick={ onClick }
                className={ ` bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition font-bold text-lg flex items-center justify-center space-x-2 ${ className }` }
            >
                 { extras }

                { iconPosition === "left" && iconNode }
                <span className="flex-1 text-center">{ label }</span>
                { iconPosition === "right" && iconNode }
            </button>
        }
        { variant === 'secondary' &&
            <button
                type='button'
                onClick={ onClick }
                className={ ` bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition font-bold text-lg ${ className }` }
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
                className={ ` border-2 border-gray-300 py-2 rounded-lg hover:border-purple-300 transition font-semibold flex items-center justify-center space-x-2 ${ className }` }>

                { iconPosition === "left" && iconNode }
                <span className="flex-1 text-center">{ label }</span>
                { iconPosition === "right" && iconNode }
                { extras }
            </button>
        }
    </> )
}


export default Button