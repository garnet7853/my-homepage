import React from 'react';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 tracking-wider mb-4">お問い合わせ</h2>
          <div className="w-12 h-[1px] bg-gray-900 mx-auto"></div>
          <p className="mt-8 text-sm text-gray-500 tracking-wide">
            ご相談・お見積もりなど、お気軽にお問い合わせください。<br className="hidden sm:block" />
            通常2営業日以内にご返信いたします。
          </p>
        </div>

        <form className="space-y-8" action="https://formsubmit.co/y746234@yahoo.co.jp" method="POST">
          <input type="hidden" name="_subject" value="【生き方編集室】新しいお問い合わせ" />
          <input type="hidden" name="_captcha" value="false" />
          
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm tracking-widest text-gray-700">
              お名前 <span className="text-gray-400 text-xs ml-2">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border-b border-gray-200 py-3 bg-transparent focus:outline-none focus:border-gray-900 transition-colors rounded-none placeholder:text-gray-300"
              placeholder="山田 太郎"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm tracking-widest text-gray-700">
              メールアドレス <span className="text-gray-400 text-xs ml-2">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border-b border-gray-200 py-3 bg-transparent focus:outline-none focus:border-gray-900 transition-colors rounded-none placeholder:text-gray-300"
              placeholder="mail@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="service" className="block text-sm tracking-widest text-gray-700">
              希望サービス
            </label>
            <div className="relative">
              <select
                id="service"
                name="service"
                className="w-full border-b border-gray-200 py-3 bg-transparent focus:outline-none focus:border-gray-900 transition-colors rounded-none appearance-none text-gray-700 cursor-pointer"
              >
                <option value="">選択してください</option>
                <option value="coaching">言語化コーチング</option>
                <option value="note">note・文章添削</option>
                <option value="writing">ライティング</option>
                <option value="career">法務・キャリア相談</option>
                <option value="other">その他</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm tracking-widest text-gray-700">
              相談内容 <span className="text-gray-400 text-xs ml-2">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full border border-gray-200 p-4 bg-transparent focus:outline-none focus:border-gray-900 transition-colors rounded-none placeholder:text-gray-300 resize-none mt-2"
              placeholder="現在の状況や、お悩みについてお書きください。"
              required
            ></textarea>
          </div>

          <div className="pt-8 text-center">
            <button
              type="submit"
              className="px-12 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors tracking-widest text-sm w-full sm:w-auto"
            >
              問い合わせる
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
