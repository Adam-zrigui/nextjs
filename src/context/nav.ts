import { useRouter } from 'next/router';
import { useCallback } from 'react';

const useNavigation = () => {
  const router = useRouter();

  const navigateTo = useCallback((route : string) => {
    router.push(route);
  }, [router]);

  return { navigateTo };
};

export default useNavigation;