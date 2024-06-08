"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AllSearchPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/search'); // Redirect to /search
  }, []); // This effect runs once when the component mounts

  return null; // Render nothing, since the redirect is handled in the useEffect
};

export default AllSearchPage;
