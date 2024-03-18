import { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const useSession = () => {
  const [session, setSession] = useState<any>({
    user: null,
    ref: null,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const id = auth().currentUser?.uid;
        const userRef = firestore().collection('users').doc(id);
        userRef.onSnapshot(userSnapshot => {
          const userData = userSnapshot.data();
          setSession({ user: userData, ref: userRef });
        });
      } catch (error) {
        console.error('Something wnet wrong:', error);
      }
    };

    fetchUserData();
  }, []);

  return session;
};

export default useSession;
