/**
 *
 * Asynchronously loads the component for InfoPanel
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
