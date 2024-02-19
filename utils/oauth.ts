import { useOAuth } from '@clerk/clerk-expo';
import { useWarmUpBrowser } from 'hooks/warmUpBrowser';
import { useCallback } from 'react';

export const signinOauth = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  }, []);
  return { useWarmUpBrowser, onPress };
};
