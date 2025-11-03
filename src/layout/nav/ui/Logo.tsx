import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  const path = window.location.pathname;
  const logoBadge = () => {
    switch (true) {
      case path === '/movie':
        return 'Movie';
      case path.includes('products'):
        return 'Shop';
      default:
        return '';
    }
  };

  const badge = logoBadge();

  return (
    <Link to={path} className="gap-0.75 flex items-center uppercase">
      <span className="text-xl font-semibold tracking-tight text-white">
        Home
      </span>
      {badge && (
        <span className="bg-linear-to-r rounded-full from-[#00a8e1] to-[#1fb6ff] px-2 py-0.5 text-xs font-semibold text-[#0f171e]">
          {badge}
        </span>
      )}
    </Link>
  );
};

export default Logo;
