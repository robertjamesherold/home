import { Link } from 'react-router-dom'

const Logo: React.FC = () => {

  const path = window.location.pathname
  const logoBadge = () => {
    switch (true) {
      case path === '/movie':
        return 'Movie'
      case path.includes('products'):
        return 'Shop'
      default:
        return ''
    }
  }

  const badge = logoBadge()

  return (
    <Link to={path} className="flex items-center gap-0.75 uppercase">
      <span className="text-xl font-semibold tracking-tight text-white">Home</span>
      {badge && (
        <span className=" rounded-full bg-linear-to-r from-[#00a8e1] to-[#1fb6ff] px-2 py-0.5 text-xs font-semibold text-[#0f171e]">
          {badge}
        </span>
      )}
    </Link>
  )
}

export default Logo;