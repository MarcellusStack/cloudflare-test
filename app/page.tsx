import Link from "next/link";

export const runtime = "edge";
export const revalidate = 30;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Test <Link href="/test">Test Revalidate Page</Link>
      {new Date().toISOString()}
    </main>
  );
}
