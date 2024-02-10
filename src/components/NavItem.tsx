import Link from 'next/link';

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
  
  return (
    <li className="relative pb-8 group">
      {href ? (
        <Link href={href} >
          <span className="transition-colors duration-300 hover:text-white active:text-white group-hover:text-white">
            {children}
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
          </span>
        </Link>
      ) : (
        <>{children}</>
      )}
    </li>
  );
};

export default NavItem;
