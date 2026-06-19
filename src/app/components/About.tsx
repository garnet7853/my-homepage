import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import kirishimaImg from '../../imports/ChatGPT_Image_2026_6_19__20_25_03.png';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="aspect-[3/4] max-w-md mx-auto overflow-hidden relative group bg-gray-100">
              <ImageWithFallback
                src={kirishimaImg}
                alt="キリシマレイナ"
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 space-y-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-gray-900 tracking-wider mb-2">キリシマレイナとは</h2>
              <div className="w-12 h-[1px] bg-gray-900"></div>
            </div>

            <div className="space-y-8 text-gray-700 leading-loose tracking-wide">
              <p>
                会社員として働きながら、
              </p>
              <ul className="space-y-2 pl-4 border-l border-gray-200">
                <li>・メンタル不調</li>
                <li>・育児</li>
                <li>・夫婦関係</li>
                <li>・キャリアの迷い</li>
              </ul>
              <p>
                に向き合い続けてきました。
              </p>
              <p>
                その経験を文章にし、<br />
                noteで発信しています。
              </p>
              <div className="pt-6 font-serif text-lg text-gray-900">
                <p>私は答えを与える人ではありません。</p>
                <p className="mt-4">
                  一緒に言葉を探し、<br />
                  思考を整理する伴走者です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
