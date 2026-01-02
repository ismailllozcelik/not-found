'use client';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Suspense } from 'react';

// Çeviri mesajları
const translations = {
  tr: {
    NOT_PAGE: "Aradığınız sayfaya şu anda ulaşılamıyor.",
    ERROR_MESSAGE: "Panik yok! Aradığın etkinliklere ulaşmak için anasayfaya dönebilirsin.",
    HOME_PAGE: "Anasayfa"
  },
  en: {
    NOT_PAGE: "The page you are looking for is currently unavailable.",
    ERROR_MESSAGE: "Don't panic! You can return to the homepage to find the events you are looking for.",
    HOME_PAGE: "Homepage"
  },
  de: {
    NOT_PAGE: "Die von Ihnen gesuchte Seite ist derzeit nicht verfügbar.",
    ERROR_MESSAGE: "Keine Panik! Sie können zur Startseite zurückkehren, um auf die gesuchten Veranstaltungen zuzugreifen.",
    HOME_PAGE: "Homepage"
  }
};

function NotFoundContent() {
  const searchParams = useSearchParams();
  const lang = (searchParams.get('lang') || 'tr') as 'tr' | 'en' | 'de';
  
  // Geçerli dil kontrolü
  const currentLang = ['tr', 'en', 'de'].includes(lang) ? lang : 'tr';
  const t = translations[currentLang];

  const handleHomeClick = () => {
    // Mevcut domain'in ana sayfasına yönlendir
    window.location.href = window.location.origin + '/' + currentLang;
  };

  return (
    <>
      <style jsx global>{`
        body,
        html {
          background: #e21d39 !important;
          margin: 0;
          padding: 0;
        }

        footer {
          margin-top: 0px !important;
        }
      `}</style>
      
      <section className="page-404">
        <Image 
          src="/404.svg" 
          className="image404" 
          alt="404NotPage"
          width={500}
          height={400}
          priority
        />
        <h4>{t.NOT_PAGE}</h4>
        <h4 className="text-404">
          {t.ERROR_MESSAGE}
          <Image 
            src="/smile.png" 
            alt="404NotPage"
            width={30}
            height={30}
            className="smile-icon"
          />
        </h4>
        <a onClick={handleHomeClick}>{t.HOME_PAGE}</a>
      </section>

      <style jsx>{`
        .page-404 {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-flow: column;
          min-height: 100vh;
          padding: 40px 20px;
        }

        .page-404 h4 {
          color: white;
          text-align: center;
          font-size: 1.5rem;
          margin: 20px 0;
        }

        .page-404 :global(.image404) {
          width: 40%;
          height: auto;
          max-width: 500px;
        }

        .page-404 .text-404 {
          padding-top: 50px;
          text-align: center;
          font-weight: bold;
          letter-spacing: 0.75px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .page-404 .text-404 :global(.smile-icon) {
          width: 2%;
          min-width: 20px;
          height: auto;
          display: inline-block;
        }

        .page-404 a {
          color: #000;
          font-weight: bold;
          background-color: #fff;
          padding: 10px 26px;
          border-radius: 6px;
          margin: 50px 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .page-404 a:hover {
          background-color: #f0f0f0;
          transform: scale(1.05);
        }

        @media screen and (max-width: 450px) {
          .page-404 :global(.image404) {
            width: 60% !important;
          }

          .page-404 .text-404 :global(.smile-icon) {
            width: 4% !important;
            min-width: 25px;
          }

          .page-404 h4 {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
}

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotFoundContent />
    </Suspense>
  );
}

