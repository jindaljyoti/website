const POSTFIX = " | Rad UI";

const DOCS_SEO = {
    "INTRODUCTION":{
        title:`Introduction${POSTFIX}`,
        basic_title:"Introduction",
        next:"INSTALLATION",
        description: `It's super easy to get started with Rad UI. You can install it using npm or yarn.`,
        url:"/docs/introduction"
    },
    "INSTALLATION":{
        title:`Installation${POSTFIX}`,
        basic_title:"Installation",
        next:"USAGE",
        previous:"INTRODUCTION",
        description: `It's super easy to get started with Rad UI. You can install it using npm or yarn.`,
        url:"/docs/installation"
    },
    "USAGE":{
        title:`Usage${POSTFIX}`,
        basic_title:"Usage",
        next: null,
        previous:"INSTALLATION",
        description: `It's super easy to get started with Rad UI. You can install it using npm or yarn.`,
        url:"/docs/usage"
    }
}

DOCS_SEO.getMetadata = (pageName)=>{
    return DOCS_SEO[pageName]
}

DOCS_SEO.getNext = (pageName)=>{
    const nextPageConstant = DOCS_SEO[pageName].next;
    return DOCS_SEO[nextPageConstant]
}

DOCS_SEO.getPrevious = (pageName)=>{
    const nextPageConstant = DOCS_SEO[pageName].previous;
    return DOCS_SEO[nextPageConstant]
}

export default DOCS_SEO;