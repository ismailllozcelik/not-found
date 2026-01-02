'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Ana sayfaya gelenleri /not-found'a yönlendir
    //router.push('/not-found?lang=tr');
  }, [router]);

  return null;
}

