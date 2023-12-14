const TAG_ID = 'G-9ZDDCHP50K';

const GoogleAnalytics = ()=>{
    return <>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${TAG_ID}`}></script>
        <script dangerouslySetInnerHTML={{__html:`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', '${TAG_ID});
        `}}/>
    </>
}

export default GoogleAnalytics;