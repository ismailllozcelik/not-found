import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-8 px-6 py-16 text-center">
        {/* 404 Başlık */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-9xl font-bold text-black dark:text-zinc-50">
            404
          </h1>
          <div className="h-1 w-24 bg-black dark:bg-zinc-50"></div>
        </div>

        {/* Açıklama */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold text-black dark:text-zinc-50">
            Sayfa Bulunamadı
          </h2>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Aradığınız sayfa mevcut değil, taşınmış veya silinmiş olabilir.
            Lütfen URL'yi kontrol edin veya anasayfaya dönün.
          </p>
        </div>

        {/* Anasayfaya Dön Butonu */}
        <Link
          href="/"
          className="flex h-12 items-center justify-center gap-2 rounded-full bg-black px-8 text-base font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Anasayfaya Dön
        </Link>

        {/* Ek Bilgi */}
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          Hata Kodu: 404 - Not Found
        </p>
      </div>
    </div>
  );
}

