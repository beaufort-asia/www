import React from 'react';
import { DashRow } from './DashBox';
import styled from 'styled-components';
export const ArticleBodyDottedLine: React.FC = styled(DashRow).attrs({ dash: { top: true } })`margin-bottom: 1em;`;
