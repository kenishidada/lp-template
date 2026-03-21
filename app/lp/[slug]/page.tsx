interface LPPageProps {
  params: Promise<{ slug: string }>;
}

export default async function LPPage({ params }: LPPageProps) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 py-20 sm:py-32 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
            {slug.replace(/-/g, " ")}
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            お客様のビジネスを加速させるソリューションをご提供します
          </p>
          <a
            href="#cta"
            className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors"
          >
            詳しく見る
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-12">
            選ばれる3つの理由
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: "高品質",
                description: "プロフェッショナルなクオリティをお届けします",
              },
              {
                title: "スピード対応",
                description: "迅速な対応でお客様のニーズにお応えします",
              },
              {
                title: "安心サポート",
                description: "導入後も手厚いサポート体制で安心です",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="bg-gray-900 text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            お気軽にお問い合わせください
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            まずは無料相談から。お客様に最適なプランをご提案いたします。
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-blue-700 transition-colors"
          >
            無料で相談する
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>&copy; 2025 All rights reserved.</p>
      </footer>
    </main>
  );
}