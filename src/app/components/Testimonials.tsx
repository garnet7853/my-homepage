import React from 'react';

const testimonials = [
  {
    title: '頭の中のモヤモヤが晴れました',
    text: '自分でも何に悩んでいるのか分からなかったのですが、対話を通じて本当にやりたいことが見えてきました。静かに話を聴いてくださる姿勢に安心しました。',
    type: '言語化コーチング',
    author: '30代・会社員'
  },
  {
    title: '私の経験も誰かの役に立つと気づけた',
    text: 'ただの愚痴になっていた文章を、読者に届く「エッセイ」へと昇華させてくれました。自分の感情を客観視する良い機会になりました。',
    type: 'note・文章添削',
    author: '40代・育児中'
  },
  {
    title: '法務のキャリアパスが明確に',
    text: '実務経験に基づく現実的なアドバイスが頂けました。転職活動の軸が定まり、自信を持って面接に臨むことができています。',
    type: '法務・キャリア相談',
    author: '20代・法務職'
  },
  {
    title: '自分の強みが言葉になった',
    text: 'まとまりのない思考から、核となるキーワードを紡ぎ出してくれました。プロフィール文が一新され、新しい仕事の依頼にも繋がりました。',
    type: '言語化コーチング',
    author: '30代・フリーランス'
  },
  {
    title: '心温まるインタビュー記事に',
    text: 'こちらの意図を汲み取りつつ、読者の心に響く美しい文章で仕上げてくださいました。誠実な仕事ぶりに感謝しています。',
    type: 'ライティング',
    author: '企業オウンドメディア担当者'
  },
  {
    title: '書くことへの恐怖心が消えた',
    text: '「正しく書かなくていい」という言葉に救われました。添削も優しく、かつ的確で、もっと書きたいと思えるようになりました。',
    type: 'note・文章添削',
    author: '30代・個人事業主'
  }
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 tracking-wider mb-4">お客様の声</h2>
          <div className="w-12 h-[1px] bg-gray-900 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white p-8 border border-gray-100 flex flex-col gap-6">
              <div className="space-y-4 flex-grow">
                <span className="text-xs text-gray-500 tracking-widest block">{item.type}</span>
                <h3 className="font-serif text-lg text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-loose tracking-wide">
                  「{item.text}」
                </p>
              </div>
              <p className="text-xs text-gray-400 text-right">{item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
