/*
 * InfoSection Messages
 *
 * This contains all the text for the InfoSection component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.InfoSection';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the InfoSection component!',
  },
});
