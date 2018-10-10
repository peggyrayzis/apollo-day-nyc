import React from 'react';
import styled from 'styled-components';
import { Image } from 'mdx-deck';

import { colors, fontSize } from './theme';

export const FullScreen = ({ children }) => (
  <div style={{ width: '100vw' }}>{children}</div>
);

export const FullScreenBackground = styled(Image)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-size: 5em;
  text-shadow: 7px 7px ${colors.lightBlue};
`;

const BioTitle = styled.p`
  margin: 0;
  font-family: 'Heebo', sans-serif;
  font-weight: 800;
  font-size: ${fontSize.small};
`;

export const Bio = ({ title, twitter, photo }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <img
      style={{
        borderRadius: '50%',
        height: '350px',
        width: '350px',
      }}
      src={photo}
    />
    <BioTitle style={{ fontSize: fontSize.medium, color: colors.lightBlue }}>
      {twitter}
    </BioTitle>
    {title && <BioTitle>{title}</BioTitle>}
  </div>
);
