/**
 *
 * ContactCard
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import EmailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import WebsiteIcon from '@material-ui/icons/Link';
import AddressIcon from '@material-ui/icons/LocationOn';

import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';
import PanelDiv from '../PanelDiv';
import Link from '../Link';
import SectionHeader from '../SectionHeader';

const LineWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing(1)}px;
  `}
  & span {
    vertical-align: middle;
  }
`;

function ContactCard({ email, phone, website, address }) {
  const theme = useTheme();
  const iconStyle = {
    marginRight: theme.spacing(theme.itemSpacing),
    verticalAlign: 'middle',
  };

  return (
    <PanelDiv>
      <SectionHeader>Contact Information</SectionHeader>
      {!!address && (
        <LineWrapper>
          <Typography variant="body1">
            <Link
              target="_blank"
              rel="noreferrer"
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                address,
              )}`}
            >
              <AddressIcon
                color="action"
                titleAccess="navigate to address"
                style={iconStyle}
              />
              {address}
            </Link>
          </Typography>
        </LineWrapper>
      )}
      {!!phone && (
        <LineWrapper>
          <Typography variant="body1">
            <Link href={`tel:${phone}`}>
              <PhoneIcon
                color="action"
                titleAccess="asset's phone number"
                style={iconStyle}
              />
              {phone}
            </Link>
          </Typography>
        </LineWrapper>
      )}
      {!!email && (
        <LineWrapper>
          <Typography variant="body1">
            <Link href={`mailto:${email}`}>
              <EmailIcon
                color="action"
                titleAccess="asset's primary email"
                style={iconStyle}
              />
              {email}
            </Link>
          </Typography>
        </LineWrapper>
      )}
      {!!website && (
        <LineWrapper>
          <Typography variant="body1">
            <Link target="_blank" rel="noreferrer" href={website}>
              <WebsiteIcon
                color="action"
                titleAccess="asset's website"
                style={iconStyle}
              />
              {website}
            </Link>
          </Typography>
        </LineWrapper>
      )}
    </PanelDiv>
  );
}

ContactCard.propTypes = {
  email: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string,
};

export default memo(ContactCard);
