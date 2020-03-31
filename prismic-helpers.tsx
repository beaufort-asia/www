import Prismic from 'prismic-javascript'
import Link from 'next/link'
import {
  apiEndpoint,
  accessToken,
  linkResolver,
  hrefResolver
} from './prismic-configuration'
import { ApiOptions } from 'prismic-javascript/d.ts/Api';
import { NextApiRequest } from 'next';

// Helper function to convert Prismic Rich Text links to Next/Link components
type CustomLink = (type: any, element: any, content: any, children: any, index: any) => JSX.Element;

export const customLink: CustomLink = (type, element, content, children, index) => (
  <Link
    key={index}
    href={hrefResolver(element.data)}
    as={linkResolver(element.data)}
  >
    <a>{content} </a>
  </Link>
)

// Client method to query documents from the Prismic repo
export const Client = (req: NextApiRequest | null = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

type CreateClientOptions = (req?: any, prismicAccessToken?: string | null) => ApiOptions;

const createClientOptions: CreateClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}