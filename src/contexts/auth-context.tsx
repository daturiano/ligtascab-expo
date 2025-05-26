import { useRouter } from 'expo-router';
import { createContext, useEffect, useState } from 'react';
import { supabase } from '../services/supabase';
import { Session, User } from '@supabase/supabase-js';

type AuthContextType = {
  signInWithPhoneNumber: (phone_number: string, password: string) => void;
  signOutUser: () => void;
  session: Session | null;
  user: User | null;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  async function signInWithPhoneNumber(phone_number: string, password: string) {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      phone: phone_number,
      password: password,
    });

    if (error) return error.message;
    setLoading(false);
    router.push('/(private)/home');
  }

  async function signOutUser() {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    setLoading(false);
    router.push('/');
    if (error) return error.message;
  }

  return (
    <AuthContext.Provider
      value={{ session, user: session?.user ?? null, signInWithPhoneNumber, signOutUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
