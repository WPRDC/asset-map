/**
 *
 * AssetList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import InfiniteLoader from 'react-window-infinite-loader';
import { FixedSizeList } from 'react-window';
import { FormattedMessage } from 'react-intl';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ListItemText } from '@material-ui/core';
import messages from './messages';

function AssetList({
  hasNextPage,
  isNextPageLoading,
  items,
  loadNextPage,
  onAssetClick,
}) {
  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  const itemCount = hasNextPage ? items.length + 1 : items.length;

  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreItems = isNextPageLoading
    ? () => {}
    : () => Promise.resolve(loadNextPage());

  // Every row is loaded except for our loading indicator row.
  const isItemLoaded = index => !hasNextPage || index < items.length;

  // Render an item or a loading indicator.
  const AssetListItem = ({ index, style }) => {
    const asset = items[index];
    let primary;
    let secondary;
    if (!isItemLoaded(index)) {
      primary = 'Loading...';
      secondary = '';
    } else {
      primary = asset.name;
      // eslint-disable-next-line prefer-destructuring
      secondary = asset.assetTypes[0].title;
    }

    return (
      <ListItem
        style={style}
        button
        divider
        onClick={() => onAssetClick(asset.id)}
      >
        <ListItemText primary={primary} secondary={secondary} />
      </ListItem>
    );
  };

  return (
    <AutoSizer disableWidth>
      {({ height, width }) => (
        <List>
          <InfiniteLoader
            isItemLoaded={isItemLoaded}
            itemCount={itemCount}
            loadMoreItems={loadMoreItems}
          >
            {({ onItemsRendered, ref }) => (
              <FixedSizeList
                itemCount={itemCount}
                onItemsRendered={onItemsRendered}
                ref={ref}
                height={height}
                width={width}
                itemSize={75}
              >
                {AssetListItem}
              </FixedSizeList>
            )}
          </InfiniteLoader>
        </List>
      )}
    </AutoSizer>
  );
}

AssetList.propTypes = {
  hasNextPage: PropTypes.bool,
  isNextPageLoading: PropTypes.bool,
  items: PropTypes.array,
  loadNextPage: PropTypes.func,
  onAssetClick: PropTypes.func,
};

export default AssetList;
