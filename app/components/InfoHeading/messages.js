/*
 * InfoHeading Messages
 *
 * This contains all the text for the InfoHeading component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.InfoHeading';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the InfoHeading component!',
  },
});
