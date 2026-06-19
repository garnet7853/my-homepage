import React from 'react';

export function Footer() {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Service', href: '#service' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
          
          <div className="text-center md:text-left space-y-4">
            <h2 className="font-serif text-2xl tracking-widest">生き方編集室</h2>
            <p className="text-gray-400 text-sm tracking-widest">by キリシマレイナ</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-8">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-6">
              <a href="https://note.com/reina_kirishima" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wider">
                note
              </a>
            </div>
          </div>

        </div>
        
        <div className="mt-20 pt-8 border-t border-gray-800 text-center md:text-left">
          <p className="text-xs text-gray-500 tracking-widest">
            © {new Date().getFullYear()} Reina Kirishima. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
