import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Long: any;
  Json: any;
  Date: any;
};

/** A prismic document */
export type _Document = {
  _meta: Meta;
};

/** A connection to a list of items. */
export type _DocumentConnection = {
   __typename?: '_DocumentConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<_DocumentEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type _DocumentEdge = {
   __typename?: '_DocumentEdge';
  /** The item at the end of the edge. */
  node: _Document;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** An external link */
export type _ExternalLink = _Linkable & {
   __typename?: '_ExternalLink';
  url: Scalars['String'];
  _linkType?: Maybe<Scalars['String']>;
};

/** A linked file */
export type _FileLink = _Linkable & {
   __typename?: '_FileLink';
  name: Scalars['String'];
  url: Scalars['String'];
  size: Scalars['Long'];
  _linkType?: Maybe<Scalars['String']>;
};

/** A linked image */
export type _ImageLink = _Linkable & {
   __typename?: '_ImageLink';
  name: Scalars['String'];
  url: Scalars['String'];
  size: Scalars['Long'];
  height: Scalars['Int'];
  width: Scalars['Int'];
  _linkType?: Maybe<Scalars['String']>;
};

/** A prismic link */
export type _Linkable = {
  _linkType?: Maybe<Scalars['String']>;
};

export type Article = _Document & _Linkable & {
   __typename?: 'Article';
  articleDate?: Maybe<Scalars['Date']>;
  highlight?: Maybe<Scalars['String']>;
  section?: Maybe<_Linkable>;
  body?: Maybe<Array<ArticleBody>>;
  _meta: Meta;
  _linkType?: Maybe<Scalars['String']>;
};

export type ArticleBody = ArticleBodyHtml | ArticleBodyVimeo | ArticleBodyYoutube | ArticleBodySoundcloud | ArticleBodyImage | ArticleBodyLink;

export type ArticleBodyHtml = {
   __typename?: 'ArticleBodyHtml';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<ArticleBodyHtmlPrimary>;
};

export type ArticleBodyHtmlPrimary = {
   __typename?: 'ArticleBodyHtmlPrimary';
  html_rich_text?: Maybe<Scalars['Json']>;
};

export type ArticleBodyImage = {
   __typename?: 'ArticleBodyImage';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<ArticleBodyImagePrimary>;
};

export type ArticleBodyImagePrimary = {
   __typename?: 'ArticleBodyImagePrimary';
  image_text_before?: Maybe<Scalars['Json']>;
  image_link_text?: Maybe<Scalars['Json']>;
  image_file?: Maybe<Scalars['Json']>;
  image_text_below?: Maybe<Scalars['Json']>;
};

export type ArticleBodyLink = {
   __typename?: 'ArticleBodyLink';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<ArticleBodyLinkPrimary>;
};

export type ArticleBodyLinkPrimary = {
   __typename?: 'ArticleBodyLinkPrimary';
  link_text_before?: Maybe<Scalars['Json']>;
  link_text?: Maybe<Scalars['Json']>;
  link_url?: Maybe<_Linkable>;
  link_thumbnail?: Maybe<Scalars['Json']>;
  link_text_after?: Maybe<Scalars['Json']>;
};

export type ArticleBodySoundcloud = {
   __typename?: 'ArticleBodySoundcloud';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<ArticleBodySoundcloudPrimary>;
};

export type ArticleBodySoundcloudPrimary = {
   __typename?: 'ArticleBodySoundcloudPrimary';
  soundcloud_embed?: Maybe<Scalars['Json']>;
};

export type ArticleBodyVimeo = {
   __typename?: 'ArticleBodyVimeo';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<ArticleBodyVimeoPrimary>;
};

export type ArticleBodyVimeoPrimary = {
   __typename?: 'ArticleBodyVimeoPrimary';
  vimeo_link_text?: Maybe<Scalars['Json']>;
  vimeo_embed?: Maybe<Scalars['Json']>;
  vimeo_thumbnail_image?: Maybe<Scalars['Json']>;
};

export type ArticleBodyYoutube = {
   __typename?: 'ArticleBodyYoutube';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<ArticleBodyYoutubePrimary>;
};

export type ArticleBodyYoutubePrimary = {
   __typename?: 'ArticleBodyYoutubePrimary';
  youtube_link_text?: Maybe<Scalars['Json']>;
  youtube_embed?: Maybe<Scalars['Json']>;
  youtube_thumbnail_image?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type ArticleConnectionConnection = {
   __typename?: 'ArticleConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ArticleConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type ArticleConnectionEdge = {
   __typename?: 'ArticleConnectionEdge';
  /** The item at the end of the edge. */
  node: Article;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};



export type Home = _Document & _Linkable & {
   __typename?: 'Home';
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
  _meta: Meta;
  _linkType?: Maybe<Scalars['String']>;
};

export type HomeColumn1_Sections = {
   __typename?: 'HomeColumn1_sections';
  section?: Maybe<_Linkable>;
};

export type HomeColumn2_Sections = {
   __typename?: 'HomeColumn2_sections';
  section?: Maybe<_Linkable>;
};

export type HomeColumn3_Sections = {
   __typename?: 'HomeColumn3_sections';
  section?: Maybe<_Linkable>;
};

export type HomeColumn4_Sections = {
   __typename?: 'HomeColumn4_sections';
  section?: Maybe<_Linkable>;
};

export type HomeColumn5_Sections = {
   __typename?: 'HomeColumn5_sections';
  section?: Maybe<_Linkable>;
};

/** A connection to a list of items. */
export type HomeConnectionConnection = {
   __typename?: 'HomeConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<HomeConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type HomeConnectionEdge = {
   __typename?: 'HomeConnectionEdge';
  /** The item at the end of the edge. */
  node: Home;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};



export type Meta = {
   __typename?: 'Meta';
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
};

/** Information about pagination in a connection. */
export type PageInfo = {
   __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type Query = {
   __typename?: 'Query';
  _allDocuments: _DocumentConnection;
  allHomes: HomeConnectionConnection;
  allArticles: ArticleConnectionConnection;
  allSections: SectionConnectionConnection;
};


export type Query_AllDocumentsArgs = {
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
};


export type QueryAllHomesArgs = {
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
};


export type QueryAllArticlesArgs = {
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
};


export type QueryAllSectionsArgs = {
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
};

export type RelatedDocument = {
   __typename?: 'RelatedDocument';
  /** The id of the document. */
  id: Scalars['String'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']>;
  /** The type of the document. */
  type: Scalars['String'];
  /** The language of the document. */
  lang: Scalars['String'];
};

export type Section = _Document & _Linkable & {
   __typename?: 'Section';
  section_title?: Maybe<Scalars['Json']>;
  column?: Maybe<Scalars['String']>;
  _meta: Meta;
  _linkType?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type SectionConnectionConnection = {
   __typename?: 'SectionConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SectionConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type SectionConnectionEdge = {
   __typename?: 'SectionConnectionEdge';
  /** The item at the end of the edge. */
  node: Section;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type Similar = {
  documentId: Scalars['String'];
  max: Scalars['Int'];
};

export enum SortArticley {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  ArticleDateAsc = 'articleDate_ASC',
  ArticleDateDesc = 'articleDate_DESC',
  HighlightAsc = 'highlight_ASC',
  HighlightDesc = 'highlight_DESC'
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
  HeaderRightRichTextDesc = 'header_right_rich_text_DESC'
}

export enum SortSectiony {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  SectionTitleAsc = 'section_title_ASC',
  SectionTitleDesc = 'section_title_DESC',
  ColumnAsc = 'column_ASC',
  ColumnDesc = 'column_DESC'
}

export type WhereArticle = {
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
};

export type WhereHome = {
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
};

export type WhereSection = {
  /** section_title */
  section_title_fulltext?: Maybe<Scalars['String']>;
  column?: Maybe<Scalars['String']>;
  column_fulltext?: Maybe<Scalars['String']>;
};

export type HomeQueryVariables = {};


export type HomeQuery = (
  { __typename?: 'Query' }
  & { allHomes: (
    { __typename?: 'HomeConnectionConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'HomeConnectionEdge' }
      & { node: (
        { __typename?: 'Home' }
        & Pick<Home, 'homepageTitle' | 'header_left_rich_text' | 'header_left_title' | 'header_right_rich_text' | 'header_right_title'>
        & { column1_sections?: Maybe<Array<(
          { __typename?: 'HomeColumn1_sections' }
          & { section?: Maybe<{ __typename?: 'Home' } | { __typename?: 'Article' } | (
            { __typename?: 'Section' }
            & Pick<Section, 'section_title'>
            & { _meta: (
              { __typename?: 'Meta' }
              & Pick<Meta, 'id'>
            ) }
          ) | { __typename?: '_ExternalLink' } | { __typename?: '_FileLink' } | { __typename?: '_ImageLink' }> }
        )>>, column2_sections?: Maybe<Array<(
          { __typename?: 'HomeColumn2_sections' }
          & { section?: Maybe<{ __typename?: 'Home' } | { __typename?: 'Article' } | (
            { __typename?: 'Section' }
            & Pick<Section, 'section_title'>
            & { _meta: (
              { __typename?: 'Meta' }
              & Pick<Meta, 'id'>
            ) }
          ) | { __typename?: '_ExternalLink' } | { __typename?: '_FileLink' } | { __typename?: '_ImageLink' }> }
        )>>, column3_sections?: Maybe<Array<(
          { __typename?: 'HomeColumn3_sections' }
          & { section?: Maybe<{ __typename?: 'Home' } | { __typename?: 'Article' } | (
            { __typename?: 'Section' }
            & Pick<Section, 'section_title'>
            & { _meta: (
              { __typename?: 'Meta' }
              & Pick<Meta, 'id'>
            ) }
          ) | { __typename?: '_ExternalLink' } | { __typename?: '_FileLink' } | { __typename?: '_ImageLink' }> }
        )>>, column4_sections?: Maybe<Array<(
          { __typename?: 'HomeColumn4_sections' }
          & { section?: Maybe<{ __typename?: 'Home' } | { __typename?: 'Article' } | (
            { __typename?: 'Section' }
            & Pick<Section, 'section_title'>
            & { _meta: (
              { __typename?: 'Meta' }
              & Pick<Meta, 'id'>
            ) }
          ) | { __typename?: '_ExternalLink' } | { __typename?: '_FileLink' } | { __typename?: '_ImageLink' }> }
        )>>, column5_sections?: Maybe<Array<(
          { __typename?: 'HomeColumn5_sections' }
          & { section?: Maybe<{ __typename?: 'Home' } | { __typename?: 'Article' } | (
            { __typename?: 'Section' }
            & Pick<Section, 'section_title'>
            & { _meta: (
              { __typename?: 'Meta' }
              & Pick<Meta, 'id'>
            ) }
          ) | { __typename?: '_ExternalLink' } | { __typename?: '_FileLink' } | { __typename?: '_ImageLink' }> }
        )>> }
      ) }
    )>>> }
  ) }
);


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