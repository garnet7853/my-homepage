import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1562034475-0292da13283a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWlldCUyMGRhcmslMjByb29tJTIwbm90ZWJvb2slMjBkZXNrJTIwbGFtcHxlbnwxfHx8fDE3ODEwNDc4NDZ8MA&ixlib=rb-4.1.0&q=80&w=2000"
          alt="Quiet dark room with notebook and desk lamp"
          className="w-full h-full object-cover grayscale opacity-20 object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-start justify-center">
        <div className="max-w-2xl space-y-10">
          <div className="space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight tracking-wide">
              生きづらさを、<br className="md:hidden" />言葉にする。
            </h1>
            <p className="font-serif text-xl md:text-2xl text-gray-600 tracking-wider">
              書くこと、働くこと、生きること。
            </p>
          </div>
          
          <p className="text-base md:text-lg text-gray-700 leading-loose tracking-wide max-w-lg">
            ひとりでは整理できない思考を、<br />
            文章と対話で言語化します。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-none hover:bg-gray-800 transition-colors tracking-widest text-sm"
            >
              相談する
              <ArrowRight size={16} />
            </a>
            <a
              href="#service"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-900 text-gray-900 bg-transparent hover:bg-gray-50 transition-colors tracking-widest text-sm"
            >
              サービスを見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
