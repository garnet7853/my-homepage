import React, { useEffect, useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

const fallbackPosts = [
  {
    title: '「ちゃんとしなきゃ」を手放すための、3つの小さな練習',
    date: '2026.06.05',
    category: 'メンタルヘルス',
    img: 'https://images.unsplash.com/photo-1683189238277-7ab96f88d1eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBld3JpdGVyJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwxfHx8fDE3ODEwNDc4NTh8MA&ixlib=rb-4.1.0&q=80&w=400',
    link: '#'
  },
  {
    title: '言葉にならない感情に、名前をつける夜',
    date: '2026.05.28',
    category: 'エッセイ',
    img: 'https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25vY2hyb21lJTIwZWRpdG9yaWFsJTIwcGFwZXJ8ZW58MXx8fHwxNzgxMDQ3ODU3fDA&ixlib=rb-4.1.0&q=80&w=400',
    link: '#'
  },
  {
    title: '休むことは、立ち止まることではないという話',
    date: '2026.05.15',
    category: '仕事',
    img: 'https://images.unsplash.com/photo-1600172454132-ada7faa101cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMHNoYWRvdyUyMHdhbGwlMjBtaW5pbWFsfGVufDF8fHx8MTc4MTA0Nzg1OHww&ixlib=rb-4.1.0&q=80&w=400',
    link: '#'
  },
  {
    title: '自分だけの「書く理由」を見つけるまで',
    date: '2026.05.02',
    category: 'ライティング',
    img: 'https://images.unsplash.com/photo-1716632943250-a081ed7bb3a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwcmVhZGluZyUyMG1pbmltYWx8ZW58MXx8fHwxNzgxMDQ3ODU4fDA&ixlib=rb-4.1.0&q=80&w=400',
    link: '#'
  },
  {
    title: '人生の余白の作り方',
    date: '2026.04.20',
    category: 'ライフスタイル',
    img: 'https://images.unsplash.com/photo-1543233604-3baca4d35513?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBib29rJTIwbWluaW1hbCUyMG1vbm9jaHJvbWV8ZW58MXx8fHwxNzgxMDQ3ODQ3fDA&ixlib=rb-4.1.0&q=80&w=400',
    link: '#'
  }
];

export function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://note.com/reina_kirishima/rss');
        const data = await response.json();
        
        if (data.status === 'ok' && data.items && data.items.length > 0) {
          const formattedPosts = data.items.slice(0, 5).map((item: any) => {
            // try to extract image from content if thumbnail is empty
            let imgUrl = item.thumbnail;
            if (!imgUrl && item.content) {
              const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
              if (imgMatch) imgUrl = imgMatch[1];
            }
            
            return {
              title: item.title,
              date: new Date(item.pubDate.replace(/-/g, '/')).toLocaleDateString('ja-JP').replace(/\//g, '.'),
              category: item.categories?.[0] || 'note',
              img: imgUrl || 'https://images.unsplash.com/photo-1683189238277-7ab96f88d1eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBld3JpdGVyJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwxfHx8fDE3ODEwNDc4NTh8MA&ixlib=rb-4.1.0&q=80&w=400',
              link: item.link
            };
          });
          setPosts(formattedPosts);
        } else {
          setPosts(fallbackPosts);
        }
      } catch (error) {
        setPosts(fallbackPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchRSS();
  }, []);

  return (
    <section className="py-24 md:py-32 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 tracking-wider mb-4">最新の記事</h2>
            <div className="w-12 h-[1px] bg-gray-900"></div>
          </div>
          <a href="https://note.com/reina_kirishima" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 tracking-widest transition-colors">
            View All <ArrowRight size={16} />
          </a>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="animate-spin text-gray-400" size={32} />
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post, idx) => (
              <a key={idx} href={post.link} target="_blank" rel="noopener noreferrer" className="group flex flex-col sm:flex-row gap-6 sm:items-center py-6 border-b border-gray-100 hover:bg-gray-50/50 transition-colors px-4 -mx-4">
                <div className="w-full sm:w-48 aspect-video sm:aspect-[4/3] overflow-hidden bg-gray-100 shrink-0">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="flex-grow space-y-3">
                  <div className="flex items-center gap-4 text-xs tracking-widest">
                    <span className="text-gray-400">{post.date}</span>
                    <span className="text-gray-900 px-2 py-0.5 border border-gray-200">{post.category}</span>
                  </div>
                  <h3 className="font-serif text-lg md:text-xl text-gray-900 group-hover:text-gray-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        )}
        
        <div className="mt-10 sm:hidden">
          <a href="https://note.com/reina_kirishima" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-gray-900 tracking-widest transition-colors border border-gray-200 py-4">
            View All <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
