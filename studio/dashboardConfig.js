export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '616eccd495ec4e12f92d4cc9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-iw39wp81',
                  apiId: '7ff604e0-99f6-4229-bd6d-15a0354e22e6'
                },
                {
                  buildHookId: '616eccd499e76b1357af2380',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-74fgbqrq',
                  apiId: '9d1a772a-ecb8-4184-9dab-d6a7840f8605'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TobiHaas/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-74fgbqrq.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
