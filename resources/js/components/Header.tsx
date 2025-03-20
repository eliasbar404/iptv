import { useState  } from 'react';
import { Search, Menu, X} from 'lucide-react';
import { Link } from '@inertiajs/react';



const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <button 
              className="p-2 hover:bg-gray-800 rounded-lg lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link href={"/"} className="text-2xl font-bold text-blue-500">MyStream-TV</Link>
            <nav className="hidden lg:flex items-center space-x-6">
              <Link href="/livetv" className="hover:text-blue-400 transition-colors">Live TV</Link>
              <Link href="/movies" className="hover:text-blue-400 transition-colors">Movies</Link>
              <Link href="/shows" className="hover:text-blue-400 transition-colors">Shows</Link>
              <Link href="/sports" className="hover:text-blue-400 transition-colors">Sports</Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 text-white px-4 py-2 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
            {/* <button className="p-2 hover:bg-gray-800 rounded-lg">
              <Bell size={24} />
            </button> */}
{/* 
            {
              user?
                <div className='flex gap-5 items-center'><span>{user.email}</span><Link href="/logout" className="p-2 hover:bg-gray-800 rounded-lg"><LogOut size={24}/></Link></div>
                :<Link href={"/login"} className="p-2 hover:bg-gray-800 rounded-lg"><User size={24} /></Link>} */}

          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link href="/livetv" className="hover:text-blue-400 transition-colors px-2 py-1">Live TV</Link>
              <Link href="/movies" className="hover:text-blue-400 transition-colors px-2 py-1">Movies</Link>
              <Link href="/shows" className="hover:text-blue-400 transition-colors px-2 py-1">Shows</Link>
              <Link href="/sports" className="hover:text-blue-400 transition-colors px-2 py-1">Sports</Link>
              <div className="relative md:hidden">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;