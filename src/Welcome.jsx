import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  @import './variables.scss';

  color: $primary;
  font-size: $font-size;
  text-align: center;
`;

const Welcome = () => (
  <Title>Welcome!</Title>
);

export default Welcome;
