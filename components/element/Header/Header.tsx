import React from 'react';
import NikiArtsGalleryIcon from '../../atom/NikiArtsGalleryIcon';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from 'next-themes';

function Header() {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <div>
      <nav className="flex flex-row justify-center h-20 p-4">
        <NikiArtsGalleryIcon />
      </nav>
      <div className="fixed top-4 right-4 z-50 outline-none">
        <DarkModeSwitch
          checked={theme === 'dark' ? true : false}
          onChange={handleThemeToggle}
          size={30}
        />
      </div>
    </div>
  );
}

export default Header;
