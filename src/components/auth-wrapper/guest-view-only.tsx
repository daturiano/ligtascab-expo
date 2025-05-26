import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { useAuth } from '~/src/hooks/use-auth';

export default function GuestViewOnly({ children }: { children: React.ReactNode }) {
  const { session, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && session) {
      router.replace('/(private)/home');
    }
  }, [router, loading, session]);

  return children;
}
