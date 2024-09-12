import { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';

export const useAuth = () => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(authUser => {
      setUser(authUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    isLoading,
  };
};
