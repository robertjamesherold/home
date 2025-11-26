import { Link as LinkTo } from 'react-router-dom'

type LinkProps = {
    to?: string;
    href?: string;
    children?: React.ReactNode;
    text?: string;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link: React.FC<LinkProps> = ({to, href, children, text, className, ...rest}) => {
    if ( to )
    {
        return (
            <LinkTo to={ to } className={`${ className } text-nowrap`} { ...rest }>
                { children || text }
            </LinkTo>
        )
    }
    else
    {
        return (
            <a href={ href } className={`${ className } text-nowrap`} { ...rest }>
                { children || text }
            </a>
        )
    }
}

export default Link;