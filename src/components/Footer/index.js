import React from 'react';

const Footer = () => {
    return (
        <footer className="w-100 mt-auto p-4">
      <div className="container flex-row justify-center justify-space-between-sm">
        &copy;{new Date().getFullYear()}
        <a href="https://github.com/SLemons6">Shayne Lemons</a>
      </div>
    </footer>
    );
};

export default Footer;