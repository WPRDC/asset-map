/**
 *
 * InfoPanel
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { LinearProgress } from '@material-ui/core';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import InternetAvailableIcon from '@material-ui/icons/Wifi';
import ComputersAvailableIcon from '@material-ui/icons/Computer';
import OpenToPublicIcon from '@material-ui/icons/EmojiPeople';
import { makeSelectInfoPanelIsOpen } from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import SideSheet from '../../components/SideSheet';
import { closeInfoPanel } from './actions';
import InfoHeading from '../../components/InfoHeading';
import ContactCard from '../../components/ContactCard';
import {
  makeSelectExplorerCurrentAsset,
  makeSelectExplorerLoadingCurrentAsset,
} from '../AssetExplorer/selectors';
import { assetSchema } from '../../schemas';
import WelcomeInfo from '../../components/WelcomeInfo';
import InfoSection from '../../components/InfoSection';
import InfoLine from '../../components/InfoLine';

export function InfoPanel({ isOpen, loading, asset }) {
  useInjectReducer({ key: 'infoPanel', reducer });
  useInjectSaga({ key: 'infoPanel', saga });

  const statusList = asset
    ? [
        {
        name: 'Open to the Public',
        status: asset.openToPublic,
          icon: OpenToPublicIcon,
        },
      {
        name: 'Child Friendly',
        status: asset.childFriendly,
        icon: ChildFriendlyIcon,
        },
      {
        name: 'Public Internet Access',
        status: asset.internetAccess,
          icon: InternetAvailableIcon,
        disabledMsg: 'No Public Internet Access',
        },
      {
        name: 'Computers Available',
        status: asset.computersAvailable,
          icon: ComputersAvailableIcon,
        disabledMsg: 'No Public Computers Available',
        },
    ]
    : undefined;

  return (
    <SideSheet open={isOpen}>
      {loading && <LinearProgress variant="query" color="secondary" />}
      {!loading && !asset && <WelcomeInfo />}
      {!loading && asset && (
        <>
          <InfoHeading
            name={asset.name}
            assetTypes={asset.assetTypes}
            address={asset.location.properties.name}
            statuses={statusList}
          />
          <ContactCard
            email={asset.email}
            phone={asset.phone}
            website={asset.url}
            address={asset.location.properties.name}
          />
          <InfoSection title="Hours of Operation">
            <InfoLine term="Regular" value={asset.hoursOfOperation} />
            <InfoLine term="Holiday" value={asset.holidayHoursOfOperation} />
          </InfoSection>
          <InfoSection title="Internet">
            <InfoLine term="WiFi Network" value={asset.wifiNetwork} />
          </InfoSection>
          <InfoSection title="Metadata">
            <InfoLine
              term="Date Added"
              value={new Date(asset.dateEntered).toLocaleString('en')}
            />
            <InfoLine
              term="Last Updated"
              value={new Date(asset.lastUpdated).toLocaleString('en')}
            />
          </InfoSection>
        </>
      )}
    </SideSheet>
  );
}

InfoPanel.propTypes = {
  isOpen: PropTypes.bool,
  loading: PropTypes.bool,
  asset: PropTypes.shape(assetSchema),
};

const mapStateToProps = createStructuredSelector({
  isOpen: makeSelectInfoPanelIsOpen(),
  loading: makeSelectExplorerLoadingCurrentAsset(),
  asset: makeSelectExplorerCurrentAsset(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleClose: () => dispatch(closeInfoPanel()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(InfoPanel);
