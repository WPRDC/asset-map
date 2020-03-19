/*
 * InfoPanel Messages
 *
 * This contains all the text for the InfoPanel container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.InfoPanel';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the InfoPanel container!',
  },
});
