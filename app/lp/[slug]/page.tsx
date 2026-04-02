interface LPPageProps {
  params: Promise<{ slug: string }>;
}

export default async function LPPage({ params }: LPPageProps) {
  await params;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center" style={{ backgroundColor: "var(--background)" }}>
      <div className="text-center px-4">
        <div className="w-16 h-16 rounded-full mx-auto mb-8 animate-pulse" style={{ backgroundColor: "var(--primary)" }} />
        <h1 className="text-2xl md:text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
          ページを準備しています
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          まもなく公開予定です。しばらくお待ちください。
        </p>
      </div>
    </main>
  );
}
