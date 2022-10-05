import { Firebase } from '../util/Firebase';
import { logEvent } from 'firebase/analytics';

export function useAnalytics() {
  return {
    pageView: ({
      screenName,
      screenClass,
    }: {
      screenName: string;
      screenClass: string;
    }) => {
      logEvent(Firebase.analytics, 'screen_view', {
        firebase_screen: screenName,
        firebase_screen_class: screenClass,
      });
    },
  };
}
