import React from 'react'
import { PadColumn } from './DashBox'
import { richText } from '../utils/richText'
import styled from 'styled-components';

const Container = styled(PadColumn)``;

type FooterProps = {
  values: any;
}

const Footer: React.FC<FooterProps> = ({ values, ...rest }) => (
  <Container {...{ ...rest }}>
    {richText(values)}
  </Container>
)

export default Footer
