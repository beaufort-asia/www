import React, { useState } from 'react';
import { ArticleBodyVimeoPrimary } from "../graphql/__generated__";
import ReactPlayer from "react-player";
import { richText } from "../utils/richText";
import Modal from 'react-modal';
import styled from 'styled-components';

Modal.setAppElement("#__next");

const StyledModal = styled(Modal)`
    background-color: black;
    border: none;
    outline: none;
`;

const StyledA = styled.a`
    cursor: pointer;
`;

export type ArticleBodyVimeoProps = {
    primary?: ArticleBodyVimeoPrimary | null;
};

export const ArticleBodyVimeo: React.FC<ArticleBodyVimeoProps> = ({ primary }) => {
    const [isOpen, setOpen] = useState(false);

    if (!primary?.vimeo_embed) return <></>;
    const thumbnailUrl = primary?.vimeo_thumbnail_image?.url || primary?.vimeo_embed?.thumbnail_url;
    if (!thumbnailUrl) return <></>;
    return (
        <>
            <StyledA onClick={() => setOpen(true)}><img src={thumbnailUrl} /></StyledA>
            <StyledModal isOpen={isOpen} shouldCloseOnOverlayClick={true} onRequestClose={() => setOpen(false)} >
                <ReactPlayer url={primary?.vimeo_embed.embed_url} controls={true} playing={true} onEnded={() => setOpen(false)} />
            </StyledModal>
            {richText(primary?.vimeo_link_text)}
        </>
    )
}