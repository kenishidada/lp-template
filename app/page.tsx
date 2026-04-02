export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center"
      style={{ backgroundColor: "var(--muted)" }}
    >
      <div className="text-center">
        <h1
          className="text-4xl font-bold mb-4"
          style={{ color: "var(--foreground)" }}
        >
          サイト準備中
        </h1>
        <p
          className="text-lg"
          style={{ color: "var(--muted-foreground)" }}
        >
          まもなく公開予定です。しばらくお待ちください。
        </p>
      </div>
    </main>
  );
}
