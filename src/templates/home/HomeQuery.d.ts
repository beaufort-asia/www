/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomeQuery
// ====================================================

export interface HomeQuery_prismic_allArticles_edges_node_body_PRISMIC_ArticleBodyHtml_primary {
  html_rich_text: any | null;
}

export interface HomeQuery_prismic_allArticles_edges_node_body_PRISMIC_ArticleBodyHtml {
  primary: HomeQuery_prismic_allArticles_edges_node_body_PRISMIC_ArticleBodyHtml_primary | null;
  type: string | null;
}

export interface HomeQuery_prismic_allArticles_edges_node_body_PRISMIC_ArticleBodyVimeo_primary {
  vimeo_embed: any | null;
  vimeo_link_text: any | null;
  vimeo_thumbnail_image: any | null;
}

export interface HomeQuery_prismic_allArticles_edges_node_body_PRISMIC_ArticleBodyVimeo {
  primary: HomeQuery_prismic_allArticles_edges_node_body_PRISMIC_ArticleBodyVimeo_primary | null;
  type: string | null;
}

export interface HomeQuery_prismic_allArticles_edges_node_body_PRISMIC_ArticleBodyYoutube_primary {
  youtube_embed: any | null;
  youtube_link_text: any | null;
  youtube_thumbnail_image: any | null;
}

export interface HomeQuery_prismic_allArticles_edges_node_body_PRISMIC_ArticleBodyYoutube {
  primary: HomeQuery_prismic_allArticles_edges_node_body_PRISMIC_ArticleBodyYoutube_primary | null;
  type: string | null;
}

export interface HomeQuery_prismic_allArticles_edges_node_body_PRISMIC_ArticleBodySoundcloud_primary {
  soundcloud_embed: any | null;
}

export interface HomeQuery_prismic_allArticles_edges_node_body_PRISMIC_ArticleBodySoundcloud {
  primary: HomeQuery_prismic_allArticles_edges_node_body_PRISMIC_ArticleBodySoundcloud_primary | null;
  type: string | null;
}

export interface HomeQuery_prismic_allArticles_edges_node_body_PRISMIC_ArticleBodyImage_primary {
  image_link_text: any | null;
  image_file: any | null;
  image_text_before: any | null;
  image_text_below: any | null;
}

export interface HomeQuery_prismic_allArticles_edges_node_body_PRISMIC_ArticleBodyImage {
  primary: HomeQuery_prismic_allArticles_edges_node_body_PRISMIC_ArticleBodyImage_primary | null;
  type: string | null;
}

export interface HomeQuery_prismic_allArticles_edges_node_body_PRISMIC_ArticleBodyLink_primary_link_url {
  _linkType: string | null;
}

export interface HomeQuery_prismic_allArticles_edges_node_body_PRISMIC_ArticleBodyLink_primary {
  link_text: any | null;
  link_text_after: any | null;
  link_text_before: any | null;
  link_thumbnail: any | null;
  link_url: HomeQuery_prismic_allArticles_edges_node_body_PRISMIC_ArticleBodyLink_primary_link_url | null;
}

export interface HomeQuery_prismic_allArticles_edges_node_body_PRISMIC_ArticleBodyLink {
  primary: HomeQuery_prismic_allArticles_edges_node_body_PRISMIC_ArticleBodyLink_primary | null;
  type: string | null;
}

export type HomeQuery_prismic_allArticles_edges_node_body = HomeQuery_prismic_allArticles_edges_node_body_PRISMIC_ArticleBodyHtml | HomeQuery_prismic_allArticles_edges_node_body_PRISMIC_ArticleBodyVimeo | HomeQuery_prismic_allArticles_edges_node_body_PRISMIC_ArticleBodyYoutube | HomeQuery_prismic_allArticles_edges_node_body_PRISMIC_ArticleBodySoundcloud | HomeQuery_prismic_allArticles_edges_node_body_PRISMIC_ArticleBodyImage | HomeQuery_prismic_allArticles_edges_node_body_PRISMIC_ArticleBodyLink;

export interface HomeQuery_prismic_allArticles_edges_node__meta {
  /**
   * The id of the document.
   */
  id: string;
}

export interface HomeQuery_prismic_allArticles_edges_node_section_PRISMIC_Home {}

export interface HomeQuery_prismic_allArticles_edges_node_section_PRISMIC_Section__meta {
  /**
   * The id of the document.
   */
  id: string;
}

export interface HomeQuery_prismic_allArticles_edges_node_section_PRISMIC_Section {
  _meta: HomeQuery_prismic_allArticles_edges_node_section_PRISMIC_Section__meta;
}

export type HomeQuery_prismic_allArticles_edges_node_section = HomeQuery_prismic_allArticles_edges_node_section_PRISMIC_Home | HomeQuery_prismic_allArticles_edges_node_section_PRISMIC_Section;

export interface HomeQuery_prismic_allArticles_edges_node {
  body: HomeQuery_prismic_allArticles_edges_node_body[] | null;
  articleDate: any | null;
  _meta: HomeQuery_prismic_allArticles_edges_node__meta;
  highlight: string | null;
  section: HomeQuery_prismic_allArticles_edges_node_section | null;
}

export interface HomeQuery_prismic_allArticles_edges {
  /**
   * The item at the end of the edge.
   */
  node: HomeQuery_prismic_allArticles_edges_node;
}

export interface HomeQuery_prismic_allArticles {
  /**
   * A list of edges.
   */
  edges: (HomeQuery_prismic_allArticles_edges | null)[] | null;
}

export interface HomeQuery_prismic_allHomes_edges_node_column1_sections_section_PRISMIC_Home {}

export interface HomeQuery_prismic_allHomes_edges_node_column1_sections_section_PRISMIC_Section__meta {
  /**
   * The id of the document.
   */
  id: string;
}

export interface HomeQuery_prismic_allHomes_edges_node_column1_sections_section_PRISMIC_Section {
  _meta: HomeQuery_prismic_allHomes_edges_node_column1_sections_section_PRISMIC_Section__meta;
  section_title: any | null;
}

export type HomeQuery_prismic_allHomes_edges_node_column1_sections_section = HomeQuery_prismic_allHomes_edges_node_column1_sections_section_PRISMIC_Home | HomeQuery_prismic_allHomes_edges_node_column1_sections_section_PRISMIC_Section;

export interface HomeQuery_prismic_allHomes_edges_node_column1_sections {
  section: HomeQuery_prismic_allHomes_edges_node_column1_sections_section | null;
}

export interface HomeQuery_prismic_allHomes_edges_node_column2_sections_section_PRISMIC_Home {}

export interface HomeQuery_prismic_allHomes_edges_node_column2_sections_section_PRISMIC_Section__meta {
  /**
   * The id of the document.
   */
  id: string;
}

export interface HomeQuery_prismic_allHomes_edges_node_column2_sections_section_PRISMIC_Section {
  _meta: HomeQuery_prismic_allHomes_edges_node_column2_sections_section_PRISMIC_Section__meta;
  section_title: any | null;
}

export type HomeQuery_prismic_allHomes_edges_node_column2_sections_section = HomeQuery_prismic_allHomes_edges_node_column2_sections_section_PRISMIC_Home | HomeQuery_prismic_allHomes_edges_node_column2_sections_section_PRISMIC_Section;

export interface HomeQuery_prismic_allHomes_edges_node_column2_sections {
  section: HomeQuery_prismic_allHomes_edges_node_column2_sections_section | null;
}

export interface HomeQuery_prismic_allHomes_edges_node_column3_sections_section_PRISMIC_Home {}

export interface HomeQuery_prismic_allHomes_edges_node_column3_sections_section_PRISMIC_Section__meta {
  /**
   * The id of the document.
   */
  id: string;
}

export interface HomeQuery_prismic_allHomes_edges_node_column3_sections_section_PRISMIC_Section {
  _meta: HomeQuery_prismic_allHomes_edges_node_column3_sections_section_PRISMIC_Section__meta;
  section_title: any | null;
}

export type HomeQuery_prismic_allHomes_edges_node_column3_sections_section = HomeQuery_prismic_allHomes_edges_node_column3_sections_section_PRISMIC_Home | HomeQuery_prismic_allHomes_edges_node_column3_sections_section_PRISMIC_Section;

export interface HomeQuery_prismic_allHomes_edges_node_column3_sections {
  section: HomeQuery_prismic_allHomes_edges_node_column3_sections_section | null;
}

export interface HomeQuery_prismic_allHomes_edges_node_column4_sections_section_PRISMIC_Home {}

export interface HomeQuery_prismic_allHomes_edges_node_column4_sections_section_PRISMIC_Section__meta {
  /**
   * The id of the document.
   */
  id: string;
}

export interface HomeQuery_prismic_allHomes_edges_node_column4_sections_section_PRISMIC_Section {
  _meta: HomeQuery_prismic_allHomes_edges_node_column4_sections_section_PRISMIC_Section__meta;
  section_title: any | null;
}

export type HomeQuery_prismic_allHomes_edges_node_column4_sections_section = HomeQuery_prismic_allHomes_edges_node_column4_sections_section_PRISMIC_Home | HomeQuery_prismic_allHomes_edges_node_column4_sections_section_PRISMIC_Section;

export interface HomeQuery_prismic_allHomes_edges_node_column4_sections {
  section: HomeQuery_prismic_allHomes_edges_node_column4_sections_section | null;
}

export interface HomeQuery_prismic_allHomes_edges_node_column5_sections_section_PRISMIC_Home {}

export interface HomeQuery_prismic_allHomes_edges_node_column5_sections_section_PRISMIC_Section__meta {
  /**
   * The id of the document.
   */
  id: string;
}

export interface HomeQuery_prismic_allHomes_edges_node_column5_sections_section_PRISMIC_Section {
  _meta: HomeQuery_prismic_allHomes_edges_node_column5_sections_section_PRISMIC_Section__meta;
  section_title: any | null;
}

export type HomeQuery_prismic_allHomes_edges_node_column5_sections_section = HomeQuery_prismic_allHomes_edges_node_column5_sections_section_PRISMIC_Home | HomeQuery_prismic_allHomes_edges_node_column5_sections_section_PRISMIC_Section;

export interface HomeQuery_prismic_allHomes_edges_node_column5_sections {
  section: HomeQuery_prismic_allHomes_edges_node_column5_sections_section | null;
}

export interface HomeQuery_prismic_allHomes_edges_node {
  header_left_rich_text: any | null;
  header_left_title: any | null;
  header_right_rich_text: any | null;
  header_right_title: any | null;
  homepageTitle: any | null;
  column1_sections: HomeQuery_prismic_allHomes_edges_node_column1_sections[] | null;
  column2_sections: HomeQuery_prismic_allHomes_edges_node_column2_sections[] | null;
  column3_sections: HomeQuery_prismic_allHomes_edges_node_column3_sections[] | null;
  column4_sections: HomeQuery_prismic_allHomes_edges_node_column4_sections[] | null;
  column5_sections: HomeQuery_prismic_allHomes_edges_node_column5_sections[] | null;
}

export interface HomeQuery_prismic_allHomes_edges {
  /**
   * The item at the end of the edge.
   */
  node: HomeQuery_prismic_allHomes_edges_node;
}

export interface HomeQuery_prismic_allHomes {
  /**
   * A list of edges.
   */
  edges: (HomeQuery_prismic_allHomes_edges | null)[] | null;
}

export interface HomeQuery_prismic {
  allArticles: HomeQuery_prismic_allArticles;
  allHomes: HomeQuery_prismic_allHomes;
}

export interface HomeQuery {
  prismic: HomeQuery_prismic;
}
