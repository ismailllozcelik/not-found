'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

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

// URL'den veya browser'dan dil bilgisini al
function getLanguage(): 'tr' | 'en' | 'de' {
  if (typeof window === 'undefined') return 'tr';

  // URL'den lang parametresini al
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');

  if (langParam && ['tr', 'en', 'de'].includes(langParam)) {
    return langParam as 'tr' | 'en' | 'de';
  }

  // Browser dilinden tahmin et
  const browserLang = navigator.language.split('-')[0];
  if (['tr', 'en', 'de'].includes(browserLang)) {
    return browserLang as 'tr' | 'en' | 'de';
  }

  return 'tr';
}

export default function NotFound() {
  const [currentLang, setCurrentLang] = useState<'tr' | 'en' | 'de'>('tr');

  useEffect(() => {
    setCurrentLang(getLanguage());
  }, []);

  const t = translations[currentLang];

  const handleHomeClick = () => {
    // Mevcut domain'in ana sayfasına yönlendir
    window.location.href = window.location.origin + '/' + currentLang;
  };

  return (
    <div style={{
      background: '#e21d39',
      minHeight: '100vh',
      margin: 0,
      padding: 0
    }}>
      <section style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        padding: '40px 20px'
      }}>
        <Image
          src="/404.svg"
          alt="404NotPage"
          width={500}
          height={400}
          priority
          style={{
            width: '40%',
            height: 'auto',
            maxWidth: '500px'
          }}
        />
        <h4 style={{
          color: 'white',
          textAlign: 'center',
          fontSize: '1.5rem',
          margin: '20px 0'
        }}>
          {t.NOT_PAGE}
        </h4>
        <h4 style={{
          color: 'white',
          paddingTop: '50px',
          textAlign: 'center',
          fontWeight: 'bold',
          letterSpacing: '0.75px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          margin: '20px 0'
        }}>
          {t.ERROR_MESSAGE}
          <Image
            src="/smile.png"
            alt="404NotPage"
            width={30}
            height={30}
            style={{
              width: '2%',
              minWidth: '20px',
              height: 'auto',
              display: 'inline-block'
            }}
          />
        </h4>
        <a
          onClick={handleHomeClick}
          style={{
            color: '#000',
            fontWeight: 'bold',
            backgroundColor: '#fff',
            padding: '10px 26px',
            borderRadius: '6px',
            margin: '50px 0',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f0f0f0';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#fff';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {t.HOME_PAGE}
        </a>
      </section>



      <style jsx global>{`
        @media screen and (max-width: 450px) {
          section img:first-of-type {
            width: 60% !important;
          }
          section h4:last-of-type img {
            width: 4% !important;
            min-width: 25px !important;
          }
          section h4 {
            font-size: 1.2rem !important;
          }
        }
      `}</style>
    </div>
  );
}
