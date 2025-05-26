import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { useAuth } from '~/src/hooks/use-auth';
import ThemedLoader from '../themed-loader';

export default function AuthenticatedViewOnly({ children }: { children: React.ReactNode }) {
  const { session, authChecked } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (authChecked && session === null) {
      router.replace('/(authentication)/login');
    }
  }, [authChecked, router, session]);

  if (!authChecked || !session) {
    return <ThemedLoader />;
  }

  return children;
}
