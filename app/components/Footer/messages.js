/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Footer';

export default defineMessages({
  copyright: {
    id: `${scope}.copyright`,
    defaultMessage: '{year} Western Pennsylvania Regional Data Center ',
  },
});
