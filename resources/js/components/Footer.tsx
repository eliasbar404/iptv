import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">StreamTV</h3>
            <p className="text-gray-400">Your ultimate streaming destination for live TV, movies, shows, and sports.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} StreamTV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;