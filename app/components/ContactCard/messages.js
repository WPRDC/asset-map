/*
 * ContactCard Messages
 *
 * This contains all the text for the ContactCard component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.ContactCard';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the ContactCard component!',
  },
});
