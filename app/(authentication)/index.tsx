import { AppState } from 'react-native';
import InitialScreen from '~/src/screens/initial-screen';
import { supabase } from '~/src/services/supabase';

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function Index() {
  return <InitialScreen />;
}
