import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'メンタル不調の相談はできますか？',
    a: '医療行為はできませんが、経験者としてお話を伺います。必要に応じて、専門機関の受診をお勧めすることがあります。'
  },
  {
    q: 'オンラインのみですか？',
    a: '基本的にはチャットベースでの対応となります。'
  },
  {
    q: '法律相談はできますか？',
    a: '弁護士業務は行えません。一般的な法務キャリアについての相談や、法務部門の働き方についてのメンタリングとなります。'
  },
  {
    q: 'ライティングの実績はどのようなものがありますか？',
    a: '転職サイト、出前アプリ、レンタル彼氏等、多様なサービスのPR実績があります。また、自社オウンドメディアの記事監修・執筆も担当しております。'
  }
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-gray-50/50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 tracking-wider mb-4">よくあるご質問</h2>
          <div className="w-12 h-[1px] bg-gray-900 mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-gray-100">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-serif text-gray-900 tracking-wide pr-8">
                  Q. {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-gray-400 transition-transform duration-300 shrink-0 ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIdx === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed tracking-wide text-sm border-t border-gray-50 mx-6">
                  <span className="font-serif text-gray-400 mr-2">A.</span>
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
