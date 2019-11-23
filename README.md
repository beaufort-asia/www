![Gatsby Logo](../.github/images/gatsby.svg)

# Gatsby Example

This directory is a brief example of a [Gatsby](https://www.gatsbyjs.org/) app with [Serverless Functions](https://zeit.co/docs/v2/serverless-functions/introduction) that can be deployed with ZEIT Now and zero configuration.

## Deploy Your Own

Deploy your own Gatsby project, along with Serverless Functions, with ZEIT Now.

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/new/project?template=https://github.com/zeit/now-examples/tree/master/gatsby-functions)

_Live Example: https://gatsby-functions.now-examples.now.sh_

### How We Created This Example

To get started with Gatsby on Now, you can use the [Gatsby CLI](https://www.gatsbyjs.org/docs/gatsby-cli/) to initialize the project:

```shell
$ gatsby new gatsby-site
```

### Deploying From Your Terminal

You can deploy your new Gatsby project, along with [Serverless Functions](https://zeit.co/docs/v2/serverless-functions/introduction), with a single command from your terminal using [Now CLI](https://zeit.co/download):

```shell
$ now
```

### Refreshing Prismic's graphql schema.

The GraphQL schema from Prismic is cached in .cache, the following steps are needed to get the latest graphql schema:

1. Something must be published for the change to be updated in Prismic's GraphQL Schema (deletes won't update it)
2. Delete the `.cache` folder and then run `now dev` again.

This sucks, but at the moment is the only way.