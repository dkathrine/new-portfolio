import { Helmet } from "react-helmet-async"

const SEOComponent = ({ title, description, keywords, author, lang = 'en', ogType = 'website', ogUrl, ogImage }) => {
    return (
        <>
            <Helmet>
                {/* General Tags */}
                <html lang={lang} />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />

                {/* Open Graph Tags */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content={ogType} />
                <meta property="og:url" content={ogUrl} />
                <meta property="og:image" content={ogImage} />

                {/* Twitter Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={ogImage} />
            </Helmet>
        </>
    )
}

export default SEOComponent