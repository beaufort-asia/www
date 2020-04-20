import React from 'react'
import { PadColumn } from './DashBox'
import { richText } from '../utils/richText'

type FooterProps = {
  values: any;
}

const Footer: React.FC<FooterProps> = ({ values }) => (
  <PadColumn>
    {richText(values)}
  </PadColumn>
)

export default Footer
