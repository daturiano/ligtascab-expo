import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { useAuth } from '~/src/hooks/use-auth';

export default function AuthenticatedViewOnly({ children }: { children: React.ReactNode }) {
  const { session, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && session === null) {
      router.replace('/');
    }
  }, [router, loading, session]);

  return children;
}
