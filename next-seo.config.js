// next-seo.config.js
const siteUrl = 'https://kraviona.vercel.app';

module.exports = {
    title: 'Kraviona — IT Solutions & Products',
    description: 'Kraviona builds modern AI & cloud solutions for businesses.',
    canonical: siteUrl,
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteUrl,
        site_name: 'Kraviona',
        images: [
            {
                url: `${siteUrl}/favicon.ico`,
                width: 1200,
                height: 630,
                alt: 'Kraviona'
            }
        ],
    },
    twitter: {
        handle: '@kraviona',
        site: '@kraviona',
        cardType: 'summary_large_image',
    },
    additionalMetaTags: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
};
