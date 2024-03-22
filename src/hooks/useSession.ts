import { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { SessionProps } from '../types/hooks';

const defaultProps = {
  user: null,
  ref: null,
};
const useSession = () => {
  const [session, setSession] = useState<SessionProps>(defaultProps);

  useEffect(() => {
    try {
      const id = auth().currentUser?.uid;
      const unsubscribeUser = firestore()
        .collection('users')
        .doc(id)
        .onSnapshot(userSnapshot => {
          const userData = userSnapshot.data() as any;
          setSession({ user: userData, ref: userSnapshot.ref });
        });

      return () => unsubscribeUser();
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }, []);

  return session;
};

export default useSession;
