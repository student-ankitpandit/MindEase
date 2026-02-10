import React from 'react'

function Footer() {
  return (
    <footer className="relative overflow-hidden px-5 py-16 text-center md:py-20">
      
      <div className="mx-auto mb-12 max-w-7xl">
        {/* <div className="h-px bg-gradient-to-r  via-gray-400 " /> */}
      </div>
      
      <p className="mb-8 text-sm text-gray-500">
        © 2025 Mind Ease. All rights reserved.
      </p>
      <h1 className="mb-0 text-6xl font-black leading-none tracking-tighter text-[#333] md:text-8xl lg:text-9xl">
        MIND EASE
      </h1>
      
      <div className="mt-8 inline-flex items-center gap-3 text-base text-gray-400">
        <span>
          Build with <span>❤️</span> Ankit Pandit
        </span>
      </div>
    </footer>
  );
}

export default Footer