"use client"
import React, { useState } from 'react';
import { Search, Menu, X, Tv, Film, PlayCircle, Layout, Settings, User } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
  
    return (
      <header className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Tv className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                StreamHub
              </span>
            </div>
  
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink icon={<Layout />} text="Live TV" />
              <NavLink icon={<Film />} text="Movies" />
              <NavLink icon={<PlayCircle />} text="Series" />
            </nav>
  
            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className={`relative w-full transition-all duration-300 ${
                isSearchFocused ? 'scale-105' : ''
              }`}>
                <input
                  type="text"
                  placeholder="Search channels, movies, shows..."
                  className="w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-300" />
              </div>
            </div>
  
            {/* Right Section */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <Settings className="w-6 h-6" />
              </button>
              <button className="flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-full transition-colors">
                <User className="w-5 h-5" />
                <span>Account</span>
              </button>
            </div>
  
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
  
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex items-center px-2 mb-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 focus:border-purple-400 focus:outline-none"
                />
                <Search className="absolute right-8 h-5 w-5 text-gray-300" />
              </div>
              <nav className="flex flex-col space-y-2">
                <MobileNavLink icon={<Layout />} text="Live TV" />
                <MobileNavLink icon={<Film />} text="Movies" />
                <MobileNavLink icon={<PlayCircle />} text="Series" />
                <MobileNavLink icon={<Settings />} text="Settings" />
                <MobileNavLink icon={<User />} text="Account" />
              </nav>
            </div>
          )}
        </div>
      </header>
    );
  };
  
  const NavLink = ({ icon, text }) => (
    <a
      href="#"
      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
  
  const MobileNavLink = ({ icon, text }) => (
    <a
      href="#"
      className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
  
export default Header;