const getData = () => {
    const data = [
        {
            id:Math.random()*3 + Date.now(),
            title:"TODO",
            tasks:[
                {
                    id:Date.now()+Math.random()*2,
                    title:"Conduct market research to identify your target audience, competitors, and market trends"
                },
                {
                    id:Date.now()+Math.random()*2,
                    title:"Develop the e-commerce website, including front-end and back-end components."
                },
                {
                    id:Date.now()+Math.random()*2,
                    title:"Integrate a secure payment gateway to enable online transactions"
                },
                {
                    id:Date.now()+Math.random()*2,
                    title:"Implement user authentication and authorization features for customer accounts."
                },
                {
                    id:Date.now()+Math.random()*2,
                    title:"Develop a marketing strategy to promote the e-commerce site, including SEO, social media marketing, and email campaigns"
                }
            ]
        },
        {
            id:Math.random()*3 + Date.now(),
            title:"IN PROGRESS",
            tasks:[
                {
                    id:Date.now()+Math.random()*2,
                    title:"Design wireframes for the website's main pages, such as the homepage, product listing, product details, cart, and checkout pages"
                },
                {
                    id:Date.now()+Math.random()*2,
                    title:"Plan the database structure to store product information, customer data, and order details."
                },
                {
                    id:Date.now()+Math.random()*2,
                    title:"Conduct thorough testing to ensure the website functions correctly, is secure, and provides a positive user experience."
                }
            ]
        },
        {
            id:Math.random()*3 + Date.now(),
            title:"DONE",
            tasks:[
                {
                    id:Date.now()+Math.random()*2,
                    title:"Create a detailed product catalog, including product descriptions, images, and pricing"
                },
                {
                    id:Date.now()+Math.random()*2,
                    title:"Analyze the websites of your competitors to identify strengths, weaknesses, and opportunities for your e-commerce site."
                },
            ]
        },
    ];
    return data;
}
export {
    getData,
}