// app/page.tsx

'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page
    router.push('/login');
  }, [router]);

  return null; // Optionally return null or a loading spinner while redirecting
};

export default Home;
