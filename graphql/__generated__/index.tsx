import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Long: any;
  Json: any;
  Date: any;
}

/** A prismic document */
export interface _Document {
  _meta: Meta;
}

/** A connection to a list of items. */
export interface _DocumentConnection {
   __typename: '_DocumentConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<_DocumentEdge>>>;
  totalCount: Scalars['Long'];
}

/** An edge in a connection. */
export interface _DocumentEdge {
   __typename: '_DocumentEdge';
  /** The item at the end of the edge. */
  node: _Document;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

/** An external link */
export interface _ExternalLink  extends _Linkable {
   __typename: '_ExternalLink';
  url: Scalars['String'];
  _linkType?: Maybe<Scalars['String']>;
}

/** A linked file */
export interface _FileLink  extends _Linkable {
   __typename: '_FileLink';
  name: Scalars['String'];
  url: Scalars['String'];
  size: Scalars['Long'];
  _linkType?: Maybe<Scalars['String']>;
}

/** A linked image */
export interface _ImageLink  extends _Linkable {
   __typename: '_ImageLink';
  name: Scalars['String'];
  url: Scalars['String'];
  size: Scalars['Long'];
  height: Scalars['Int'];
  width: Scalars['Int'];
  _linkType?: Maybe<Scalars['String']>;
}

/** A prismic link */
export interface _Linkable {
  _linkType?: Maybe<Scalars['String']>;
}

export interface Article  extends _Document, _Linkable {
   __typename: 'Article';
  articleDate?: Maybe<Scalars['Date']>;
  highlight?: Maybe<Scalars['String']>;
  section?: Maybe<_Linkable>;
  ordering_number?: Maybe<Scalars['String']>;
  body?: Maybe<Array<ArticleBody>>;
  _meta: Meta;
  _linkType?: Maybe<Scalars['String']>;
}

export type ArticleBody = ArticleBodyHtml | ArticleBodyVimeo | ArticleBodyYoutube | ArticleBodySoundcloud | ArticleBodyImage | ArticleBodyLink | ArticleBodyCustom_Code_Embed | ArticleBodyDotted_Line;

export interface ArticleBodyCustom_Code_Embed {
   __typename: 'ArticleBodyCustom_code_embed';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<ArticleBodyCustom_Code_EmbedPrimary>;
}

export interface ArticleBodyCustom_Code_EmbedPrimary {
   __typename: 'ArticleBodyCustom_code_embedPrimary';
  html?: Maybe<Scalars['Json']>;
}

export interface ArticleBodyDotted_Line {
   __typename: 'ArticleBodyDotted_line';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
}

export interface ArticleBodyHtml {
   __typename: 'ArticleBodyHtml';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<ArticleBodyHtmlPrimary>;
}

export interface ArticleBodyHtmlPrimary {
   __typename: 'ArticleBodyHtmlPrimary';
  html_rich_text?: Maybe<Scalars['Json']>;
}

export interface ArticleBodyImage {
   __typename: 'ArticleBodyImage';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<ArticleBodyImagePrimary>;
}

export interface ArticleBodyImagePrimary {
   __typename: 'ArticleBodyImagePrimary';
  image_text_before?: Maybe<Scalars['Json']>;
  image_link_text?: Maybe<Scalars['Json']>;
  image_file?: Maybe<Scalars['Json']>;
  image_text_below?: Maybe<Scalars['Json']>;
}

export interface ArticleBodyLink {
   __typename: 'ArticleBodyLink';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<ArticleBodyLinkPrimary>;
}

export interface ArticleBodyLinkPrimary {
   __typename: 'ArticleBodyLinkPrimary';
  link_text_before?: Maybe<Scalars['Json']>;
  link_text?: Maybe<Scalars['Json']>;
  link_url?: Maybe<_Linkable>;
  link_thumbnail?: Maybe<Scalars['Json']>;
  link_text_after?: Maybe<Scalars['Json']>;
}

export interface ArticleBodySoundcloud {
   __typename: 'ArticleBodySoundcloud';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<ArticleBodySoundcloudPrimary>;
}

export interface ArticleBodySoundcloudPrimary {
   __typename: 'ArticleBodySoundcloudPrimary';
  soundcloud_embed?: Maybe<Scalars['Json']>;
}

export interface ArticleBodyVimeo {
   __typename: 'ArticleBodyVimeo';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<ArticleBodyVimeoPrimary>;
}

export interface ArticleBodyVimeoPrimary {
   __typename: 'ArticleBodyVimeoPrimary';
  vimeo_link_text?: Maybe<Scalars['Json']>;
  vimeo_embed?: Maybe<Scalars['Json']>;
  vimeo_thumbnail_image?: Maybe<Scalars['Json']>;
}

export interface ArticleBodyYoutube {
   __typename: 'ArticleBodyYoutube';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<ArticleBodyYoutubePrimary>;
}

export interface ArticleBodyYoutubePrimary {
   __typename: 'ArticleBodyYoutubePrimary';
  youtube_link_text?: Maybe<Scalars['Json']>;
  youtube_embed?: Maybe<Scalars['Json']>;
  youtube_thumbnail_image?: Maybe<Scalars['Json']>;
}

/** A connection to a list of items. */
export interface ArticleConnectionConnection {
   __typename: 'ArticleConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ArticleConnectionEdge>>>;
  totalCount: Scalars['Long'];
}

/** An edge in a connection. */
export interface ArticleConnectionEdge {
   __typename: 'ArticleConnectionEdge';
  /** The item at the end of the edge. */
  node: Article;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}



export interface Home  extends _Document, _Linkable {
   __typename: 'Home';
  homepageTitle?: Maybe<Scalars['Json']>;
  header_left_title?: Maybe<Scalars['Json']>;
  header_left_rich_text?: Maybe<Scalars['Json']>;
  column1_sections?: Maybe<Array<HomeColumn1_Sections>>;
  column2_sections?: Maybe<Array<HomeColumn2_Sections>>;
  column3_sections?: Maybe<Array<HomeColumn3_Sections>>;
  column4_sections?: Maybe<Array<HomeColumn4_Sections>>;
  column5_sections?: Maybe<Array<HomeColumn5_Sections>>;
  header_right_title?: Maybe<Scalars['Json']>;
  header_right_rich_text?: Maybe<Scalars['Json']>;
  footer_content?: Maybe<Scalars['Json']>;
  _meta: Meta;
  _linkType?: Maybe<Scalars['String']>;
}

export interface HomeColumn1_Sections {
   __typename: 'HomeColumn1_sections';
  section?: Maybe<_Linkable>;
}

export interface HomeColumn2_Sections {
   __typename: 'HomeColumn2_sections';
  section?: Maybe<_Linkable>;
}

export interface HomeColumn3_Sections {
   __typename: 'HomeColumn3_sections';
  section?: Maybe<_Linkable>;
}

export interface HomeColumn4_Sections {
   __typename: 'HomeColumn4_sections';
  section?: Maybe<_Linkable>;
}

export interface HomeColumn5_Sections {
   __typename: 'HomeColumn5_sections';
  section?: Maybe<_Linkable>;
}

/** A connection to a list of items. */
export interface HomeConnectionConnection {
   __typename: 'HomeConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<HomeConnectionEdge>>>;
  totalCount: Scalars['Long'];
}

/** An edge in a connection. */
export interface HomeConnectionEdge {
   __typename: 'HomeConnectionEdge';
  /** The item at the end of the edge. */
  node: Home;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}



export interface Meta {
   __typename: 'Meta';
  /** The id of the document. */
  id: Scalars['String'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']>;
  /** The type of the document. */
  type: Scalars['String'];
  /** The tags of the document. */
  tags: Array<Scalars['String']>;
  /** The language of the document. */
  lang: Scalars['String'];
  /** Alternate languages the document. */
  alternateLanguages: Array<RelatedDocument>;
  /** The first publication date of the document. */
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  /** The last publication date of the document. */
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
}

/** Information about pagination in a connection. */
export interface PageInfo {
   __typename: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
}

export interface Query {
   __typename: 'Query';
  _allDocuments: _DocumentConnection;
  allHomes: HomeConnectionConnection;
  allArticles: ArticleConnectionConnection;
  allSections: SectionConnectionConnection;
}


export interface Query_AllDocumentsArgs {
  sortBy?: Maybe<SortDocumentsBy>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
}


export interface QueryAllHomesArgs {
  sortBy?: Maybe<SortHomey>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  where?: Maybe<WhereHome>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
}


export interface QueryAllArticlesArgs {
  sortBy?: Maybe<SortArticley>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  where?: Maybe<WhereArticle>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
}


export interface QueryAllSectionsArgs {
  sortBy?: Maybe<SortSectiony>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  where?: Maybe<WhereSection>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
}

export interface RelatedDocument {
   __typename: 'RelatedDocument';
  /** The id of the document. */
  id: Scalars['String'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']>;
  /** The type of the document. */
  type: Scalars['String'];
  /** The language of the document. */
  lang: Scalars['String'];
}

export interface Section  extends _Document, _Linkable {
   __typename: 'Section';
  section_title?: Maybe<Scalars['Json']>;
  _meta: Meta;
  _linkType?: Maybe<Scalars['String']>;
}

/** A connection to a list of items. */
export interface SectionConnectionConnection {
   __typename: 'SectionConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SectionConnectionEdge>>>;
  totalCount: Scalars['Long'];
}

/** An edge in a connection. */
export interface SectionConnectionEdge {
   __typename: 'SectionConnectionEdge';
  /** The item at the end of the edge. */
  node: Section;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export interface Similar {
  documentId: Scalars['String'];
  max: Scalars['Int'];
}

export enum SortArticley {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  ArticleDateAsc = 'articleDate_ASC',
  ArticleDateDesc = 'articleDate_DESC',
  HighlightAsc = 'highlight_ASC',
  HighlightDesc = 'highlight_DESC',
  OrderingNumberAsc = 'ordering_number_ASC',
  OrderingNumberDesc = 'ordering_number_DESC'
}

export enum SortDocumentsBy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortHomey {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  HomepageTitleAsc = 'homepageTitle_ASC',
  HomepageTitleDesc = 'homepageTitle_DESC',
  HeaderLeftTitleAsc = 'header_left_title_ASC',
  HeaderLeftTitleDesc = 'header_left_title_DESC',
  HeaderLeftRichTextAsc = 'header_left_rich_text_ASC',
  HeaderLeftRichTextDesc = 'header_left_rich_text_DESC',
  HeaderRightTitleAsc = 'header_right_title_ASC',
  HeaderRightTitleDesc = 'header_right_title_DESC',
  HeaderRightRichTextAsc = 'header_right_rich_text_ASC',
  HeaderRightRichTextDesc = 'header_right_rich_text_DESC',
  FooterContentAsc = 'footer_content_ASC',
  FooterContentDesc = 'footer_content_DESC'
}

export enum SortSectiony {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  SectionTitleAsc = 'section_title_ASC',
  SectionTitleDesc = 'section_title_DESC'
}

export interface WhereArticle {
  /** article-date */
  articleDate?: Maybe<Scalars['Date']>;
  /** article-date */
  articleDate_before?: Maybe<Scalars['Date']>;
  /** article-date */
  articleDate_after?: Maybe<Scalars['Date']>;
  highlight?: Maybe<Scalars['String']>;
  highlight_fulltext?: Maybe<Scalars['String']>;
  /** section */
  section?: Maybe<Scalars['String']>;
  ordering_number?: Maybe<Scalars['String']>;
  ordering_number_fulltext?: Maybe<Scalars['String']>;
}

export interface WhereHome {
  /** homepage-title */
  homepageTitle_fulltext?: Maybe<Scalars['String']>;
  /** header_left_title */
  header_left_title_fulltext?: Maybe<Scalars['String']>;
  /** header_left_rich_text */
  header_left_rich_text_fulltext?: Maybe<Scalars['String']>;
  /** header_right_title */
  header_right_title_fulltext?: Maybe<Scalars['String']>;
  /** header_right_rich_text */
  header_right_rich_text_fulltext?: Maybe<Scalars['String']>;
  /** footer_content */
  footer_content_fulltext?: Maybe<Scalars['String']>;
}

export interface WhereSection {
  /** section_title */
  section_title_fulltext?: Maybe<Scalars['String']>;
}

export type ArticlesQueryVariables = {
  after?: Maybe<Scalars['String']>;
};


export type ArticlesQuery = (
  { __typename: 'Query' }
  & { allArticles: (
    { __typename: 'ArticleConnectionConnection' }
    & { pageInfo: (
      { __typename: 'PageInfo' }
      & Pick<PageInfo, 'hasPreviousPage' | 'hasNextPage' | 'startCursor' | 'endCursor'>
    ), edges?: Maybe<Array<Maybe<(
      { __typename: 'ArticleConnectionEdge' }
      & { node: (
        { __typename: 'Article' }
        & Pick<Article, 'articleDate' | 'highlight' | 'ordering_number'>
        & { body?: Maybe<Array<(
          { __typename: 'ArticleBodyHtml' }
          & Pick<ArticleBodyHtml, 'type'>
          & { primary?: Maybe<(
            { __typename: 'ArticleBodyHtmlPrimary' }
            & Pick<ArticleBodyHtmlPrimary, 'html_rich_text'>
          )> }
        ) | (
          { __typename: 'ArticleBodyVimeo' }
          & Pick<ArticleBodyVimeo, 'type'>
          & { primary?: Maybe<(
            { __typename: 'ArticleBodyVimeoPrimary' }
            & Pick<ArticleBodyVimeoPrimary, 'vimeo_embed' | 'vimeo_link_text' | 'vimeo_thumbnail_image'>
          )> }
        ) | (
          { __typename: 'ArticleBodyYoutube' }
          & Pick<ArticleBodyYoutube, 'type'>
          & { primary?: Maybe<(
            { __typename: 'ArticleBodyYoutubePrimary' }
            & Pick<ArticleBodyYoutubePrimary, 'youtube_embed' | 'youtube_link_text' | 'youtube_thumbnail_image'>
          )> }
        ) | (
          { __typename: 'ArticleBodySoundcloud' }
          & Pick<ArticleBodySoundcloud, 'type'>
          & { primary?: Maybe<(
            { __typename: 'ArticleBodySoundcloudPrimary' }
            & Pick<ArticleBodySoundcloudPrimary, 'soundcloud_embed'>
          )> }
        ) | (
          { __typename: 'ArticleBodyImage' }
          & Pick<ArticleBodyImage, 'type'>
          & { primary?: Maybe<(
            { __typename: 'ArticleBodyImagePrimary' }
            & Pick<ArticleBodyImagePrimary, 'image_link_text' | 'image_file' | 'image_text_before' | 'image_text_below'>
          )> }
        ) | (
          { __typename: 'ArticleBodyLink' }
          & Pick<ArticleBodyLink, 'type'>
          & { primary?: Maybe<(
            { __typename: 'ArticleBodyLinkPrimary' }
            & Pick<ArticleBodyLinkPrimary, 'link_text' | 'link_text_after' | 'link_text_before' | 'link_thumbnail'>
            & { link_url?: Maybe<(
              { __typename: 'Home' }
              & Pick<Home, '_linkType'>
            ) | (
              { __typename: 'Article' }
              & Pick<Article, '_linkType'>
            ) | (
              { __typename: 'Section' }
              & Pick<Section, '_linkType'>
            ) | (
              { __typename: '_ExternalLink' }
              & Pick<_ExternalLink, 'url' | '_linkType'>
            ) | (
              { __typename: '_FileLink' }
              & Pick<_FileLink, 'name' | 'size' | 'url' | '_linkType'>
            ) | (
              { __typename: '_ImageLink' }
              & Pick<_ImageLink, '_linkType'>
            )> }
          )> }
        ) | (
          { __typename: 'ArticleBodyCustom_code_embed' }
          & Pick<ArticleBodyCustom_Code_Embed, 'type'>
          & { primary?: Maybe<(
            { __typename: 'ArticleBodyCustom_code_embedPrimary' }
            & Pick<ArticleBodyCustom_Code_EmbedPrimary, 'html'>
          )> }
        ) | { __typename: 'ArticleBodyDotted_line' }>>, _meta: (
          { __typename: 'Meta' }
          & Pick<Meta, 'id'>
        ), section?: Maybe<{ __typename: 'Home' } | { __typename: 'Article' } | (
          { __typename: 'Section' }
          & { _meta: (
            { __typename: 'Meta' }
            & Pick<Meta, 'id'>
          ) }
        ) | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' }> }
      ) }
    )>>> }
  ) }
);

export type HomeQueryVariables = {};


export type HomeQuery = (
  { __typename: 'Query' }
  & { allHomes: (
    { __typename: 'HomeConnectionConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename: 'HomeConnectionEdge' }
      & { node: (
        { __typename: 'Home' }
        & Pick<Home, 'homepageTitle' | 'header_left_rich_text' | 'header_left_title' | 'header_right_rich_text' | 'header_right_title' | 'footer_content'>
        & { column1_sections?: Maybe<Array<(
          { __typename: 'HomeColumn1_sections' }
          & { section?: Maybe<{ __typename: 'Home' } | { __typename: 'Article' } | (
            { __typename: 'Section' }
            & Pick<Section, 'section_title'>
            & { _meta: (
              { __typename: 'Meta' }
              & Pick<Meta, 'id'>
            ) }
          ) | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' }> }
        )>>, column2_sections?: Maybe<Array<(
          { __typename: 'HomeColumn2_sections' }
          & { section?: Maybe<{ __typename: 'Home' } | { __typename: 'Article' } | (
            { __typename: 'Section' }
            & Pick<Section, 'section_title'>
            & { _meta: (
              { __typename: 'Meta' }
              & Pick<Meta, 'id'>
            ) }
          ) | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' }> }
        )>>, column3_sections?: Maybe<Array<(
          { __typename: 'HomeColumn3_sections' }
          & { section?: Maybe<{ __typename: 'Home' } | { __typename: 'Article' } | (
            { __typename: 'Section' }
            & Pick<Section, 'section_title'>
            & { _meta: (
              { __typename: 'Meta' }
              & Pick<Meta, 'id'>
            ) }
          ) | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' }> }
        )>>, column4_sections?: Maybe<Array<(
          { __typename: 'HomeColumn4_sections' }
          & { section?: Maybe<{ __typename: 'Home' } | { __typename: 'Article' } | (
            { __typename: 'Section' }
            & Pick<Section, 'section_title'>
            & { _meta: (
              { __typename: 'Meta' }
              & Pick<Meta, 'id'>
            ) }
          ) | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' }> }
        )>>, column5_sections?: Maybe<Array<(
          { __typename: 'HomeColumn5_sections' }
          & { section?: Maybe<{ __typename: 'Home' } | { __typename: 'Article' } | (
            { __typename: 'Section' }
            & Pick<Section, 'section_title'>
            & { _meta: (
              { __typename: 'Meta' }
              & Pick<Meta, 'id'>
            ) }
          ) | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' }> }
        )>> }
      ) }
    )>>> }
  ) }
);


export const ArticlesDocument = gql`
    query Articles($after: String) {
  allArticles(after: $after) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    edges {
      node {
        body {
          ... on ArticleBodyHtml {
            primary {
              html_rich_text
            }
            type
          }
          ... on ArticleBodyVimeo {
            primary {
              vimeo_embed
              vimeo_link_text
              vimeo_thumbnail_image
            }
            type
          }
          ... on ArticleBodyYoutube {
            primary {
              youtube_embed
              youtube_link_text
              youtube_thumbnail_image
            }
            type
          }
          ... on ArticleBodySoundcloud {
            primary {
              soundcloud_embed
            }
            type
          }
          ... on ArticleBodyCustom_code_embed {
            primary {
              html
            }
            type
          }
          ... on ArticleBodyImage {
            primary {
              image_link_text
              image_file
              image_text_before
              image_text_below
            }
            type
          }
          ... on ArticleBodyLink {
            primary {
              link_text
              link_text_after
              link_text_before
              link_thumbnail
              link_url {
                _linkType
                ... on _ExternalLink {
                  url
                }
                ... on _FileLink {
                  name
                  size
                  url
                }
              }
            }
            type
          }
        }
        articleDate
        _meta {
          id
        }
        highlight
        ordering_number
        section {
          ... on Section {
            _meta {
              id
            }
          }
        }
      }
    }
  }
}
    `;
export type ArticlesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ArticlesQuery, ArticlesQueryVariables>, 'query'>;

    export const ArticlesComponent = (props: ArticlesComponentProps) => (
      <ApolloReactComponents.Query<ArticlesQuery, ArticlesQueryVariables> query={ArticlesDocument} {...props} />
    );
    
export type ArticlesProps<TChildProps = {}> = ApolloReactHoc.DataProps<ArticlesQuery, ArticlesQueryVariables> & TChildProps;
export function withArticles<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ArticlesQuery,
  ArticlesQueryVariables,
  ArticlesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ArticlesQuery, ArticlesQueryVariables, ArticlesProps<TChildProps>>(ArticlesDocument, {
      alias: 'articles',
      ...operationOptions
    });
};
export type ArticlesQueryResult = ApolloReactCommon.QueryResult<ArticlesQuery, ArticlesQueryVariables>;
export const HomeDocument = gql`
    query Home {
  allHomes {
    edges {
      node {
        homepageTitle
        header_left_rich_text
        header_left_title
        header_right_rich_text
        header_right_title
        footer_content
        column1_sections {
          section {
            ... on Section {
              section_title
              _meta {
                id
              }
            }
          }
        }
        column2_sections {
          section {
            ... on Section {
              section_title
              _meta {
                id
              }
            }
          }
        }
        column3_sections {
          section {
            ... on Section {
              section_title
              _meta {
                id
              }
            }
          }
        }
        column4_sections {
          section {
            ... on Section {
              section_title
              _meta {
                id
              }
            }
          }
        }
        column5_sections {
          section {
            ... on Section {
              section_title
              _meta {
                id
              }
            }
          }
        }
      }
    }
  }
}
    `;
export type HomeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<HomeQuery, HomeQueryVariables>, 'query'>;

    export const HomeComponent = (props: HomeComponentProps) => (
      <ApolloReactComponents.Query<HomeQuery, HomeQueryVariables> query={HomeDocument} {...props} />
    );
    
export type HomeProps<TChildProps = {}> = ApolloReactHoc.DataProps<HomeQuery, HomeQueryVariables> & TChildProps;
export function withHome<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  HomeQuery,
  HomeQueryVariables,
  HomeProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, HomeQuery, HomeQueryVariables, HomeProps<TChildProps>>(HomeDocument, {
      alias: 'home',
      ...operationOptions
    });
};
export type HomeQueryResult = ApolloReactCommon.QueryResult<HomeQuery, HomeQueryVariables>;