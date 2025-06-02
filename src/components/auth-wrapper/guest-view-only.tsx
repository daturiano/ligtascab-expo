import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { useAuth } from '~/src/hooks/use-auth';
import ThemedLoader from '../ui/spinner';

export default function GuestViewOnly({ children }: { children: React.ReactNode }) {
  const { session, authChecked } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (authChecked && session !== null) {
      router.replace('/(private)/home');
    }
  }, [authChecked, session, router]);

  if (!authChecked || session) {
    return <ThemedLoader />;
  }

  return children;
}
