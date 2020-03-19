/*
 * WelcomeInfo Messages
 *
 * This contains all the text for the WelcomeInfo component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.WelcomeInfo';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: "Welcome...",
  },
  subHeader: {
    id: `${scope}.subHeader`,
    defaultMessage: "to the Asset Map!",
  },
});
