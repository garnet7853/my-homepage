import React from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: '言語化コーチング',
    targets: ['頭の中が整理できない', '仕事が辛い', '将来が不安', '気持ちを言葉にしたい'],
    price: '60分 8,000円',
  },
  {
    title: 'note・文章添削',
    targets: ['noteを書いている', '伝わる文章を書きたい', '自分の強みが分からない'],
    price: '1記事 5,000円〜',
  },
  {
    title: 'ライティング',
    targets: ['コラム', 'エッセイ', 'インタビュー記事', 'オウンドメディア'],
    price: '要見積',
    isTask: true,
  },
  {
    title: '法務・キャリア相談',
    targets: ['法務職転職', 'キャリア相談', '働き方相談'],
    price: '60分 10,000円',
    isTask: true,
  },
];

export function Services() {
  return (
    <section id="service" className="py-24 md:py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 tracking-wider">サービス</h2>
          <div className="w-12 h-[1px] bg-gray-900 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 md:p-12 border border-gray-100 hover:border-gray-300 transition-colors flex flex-col h-full group">
              <h3 className="font-serif text-xl md:text-2xl text-gray-900 tracking-wide mb-8">
                {service.title}
              </h3>
              
              <div className="flex-grow space-y-8">
                <div>
                  <p className="text-xs text-gray-400 tracking-widest uppercase mb-4">
                    {service.isTask ? '対応内容' : 'こんな方へ'}
                  </p>
                  <ul className="space-y-3 text-sm text-gray-600 tracking-wide">
                    {service.targets.map((target, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-gray-300 mt-[2px]">•</span>
                        {target}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-8 border-t border-gray-50">
                  <p className="text-xs text-gray-400 tracking-widest uppercase mb-2">料金</p>
                  <p className="font-serif text-lg text-gray-900">{service.price}</p>
                </div>
              </div>

              <a
                href="#contact"
                className="mt-10 inline-flex items-center gap-2 text-sm text-gray-900 tracking-widest group-hover:gap-4 transition-all"
              >
                詳細を見る <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
