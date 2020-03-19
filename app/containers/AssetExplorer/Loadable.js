/**
 * Asynchronously loads the component for AssetExplorer
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
