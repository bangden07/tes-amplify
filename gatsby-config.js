module.exports = {
  siteMetadata: {
    title: 'Linuxer - Linux User',
    author: {
      name: 'Linuxer',
    },
    pathPrefix: '/',
    siteUrl: 'https://www.linuxer.or.id',
    description:
      'Media belajar online dan tutorial lengkap tentang linux.',
    feedUrl: 'https://www.linuxer.or.id/rss.xml',
    logo: 'https://www.linuxer.or.id/logo.png',
  },
  plugins: [
    // ===================================================================================
    // Meta
    // ===================================================================================

    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Linuxer',
        short_name: 'Linuxer',
        description:
          'Media belajar online dan tutorial lengkap tentang linux.',
        start_url: '/',
        background_color: 'white',
        theme_color: '#3498db',
        display: 'minimal-ui',
        icon: `static/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  categories: edge.node.frontmatter.tags,
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { template: { eq: "post" } } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { 
                        slug 
                      }
                      frontmatter {
                        title
                        date
                        tags
                        template
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Tania Rascia | RSS Feed',
          },
        ],
      },
    },

    // ===================================================================================
    // Images and static
    // ===================================================================================

    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static/`,
      },
    },

    // ===================================================================================
    // Markdown
    // ===================================================================================

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: true,
              prompt: {
                user: 'root',
                host: 'localhost',
                global: true,
              },
            },
          },
          'gatsby-remark-prismjs',
        ],
      },
    },

    // ===================================================================================
    // Search
    // ===================================================================================

    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'pages',
        engine: 'flexsearch',
        engineOptions: {
          encode: 'icase',
          tokenize: 'forward',
          async: false,
        },
        query: `
          {
            allMarkdownRemark(filter: { frontmatter: { template: { eq: "post" } } }) {
              nodes {
                id
                frontmatter {
                  title
                  tags
                  slug
                  date(formatString: "MMMM DD, YYYY")
                }
                rawMarkdownBody
              }
            }
          }
        `,
        ref: 'id',
        index: ['title', 'body', 'tags'],
        store: ['id', 'slug', 'title', 'tags', 'date'],
        normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map((node) => ({
            id: node.id,
            slug: `/${node.frontmatter.slug}`,
            title: node.frontmatter.title,
            body: node.rawMarkdownBody,
            tags: node.frontmatter.tags,
            date: node.frontmatter.date,
          })),
      },
    },
  ],
}
