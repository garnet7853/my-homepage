import React from 'react';

export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 md:py-48 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gray-200"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-xs tracking-widest text-gray-400 uppercase mb-20 font-sans">Philosophy</h2>
        
        <div className="mb-20">
          <p className="font-serif text-2xl md:text-4xl text-gray-900 leading-[2.5] tracking-widest">
            人は問題を解決したいのではなく、<br />
            理解されたいのだと思っています。
          </p>
        </div>

        <div className="w-12 h-[1px] bg-gray-300 mx-auto mb-20"></div>

        <div className="space-y-8 font-serif text-lg md:text-xl text-gray-600 leading-loose tracking-wider">
          <p>アドバイスより先に、<br />言葉にならない感情を整理する。</p>
          <p>それが私の仕事です。</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gray-200"></div>
    </section>
  );
}
