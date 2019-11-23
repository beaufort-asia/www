import React, { useState } from "react";

import styled from "@emotion/styled";
import Helmet from "react-helmet";

const Box = styled.div`
  border: 1px solid red;
`

interface ILayoutProps {
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {

    return (
        <main>
            <Helmet>
                <title>Gatsby and Node.js (TypeScript) API</title>
            </Helmet>
            <Box>{children}</Box>
        </main>
    );
};
