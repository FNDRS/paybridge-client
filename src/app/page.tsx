"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/dashboard");
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="font-extrabold cursor-default" onClick={handleRedirect}>
          FNDRS©
        </h1>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="hover:underline"
          href="https://thefndrs.com/"
          target="_blank"
        >
          thefndrs.com
        </a>
      </footer>
    </div>
  );
}
