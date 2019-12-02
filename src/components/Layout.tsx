import React, { useState } from "react";

import styled from "@emotion/styled";

import Helmet from "react-helmet";
import { TopLeftDashed } from "../styles/TopLeftDashed";

const Box = styled.div`
  ${TopLeftDashed}
`

interface ILayoutProps {
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {

    return (
        <main>
            <Helmet>
                <title>Beaufort</title>
            </Helmet>
            <Box>{children}</Box>
        </main>
    );
};
