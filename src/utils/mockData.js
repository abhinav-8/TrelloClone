const getData = () => {
    const data = [
        {
            id:Math.random()*3 + Date.now(),
            title:"TODO",
            tasks:[
                {
                    id:Date.now()+Math.random()*2,
                    title:"Task1 is this"
                },
                {
                    id:Date.now()+Math.random()*2,
                    title:"Task2 is this"
                },
                {
                    id:Date.now()+Math.random()*2,
                    title:"Task3 is this"
                }
            ]
        },
        {
            id:Math.random()*3 + Date.now(),
            title:"IN PROGRESS",
            tasks:[
                {
                    id:Date.now()+Math.random()*2,
                    title:"Task4 is this"
                },
                {
                    id:Date.now()+Math.random()*2,
                    title:"Task5 is this"
                },
                {
                    id:Date.now()+Math.random()*2,
                    title:"Task6 is this"
                }
            ]
        },
        {
            id:Math.random()*3 + Date.now(),
            title:"DONE",
            tasks:[
                {
                    id:Date.now()+Math.random()*2,
                    title:"Task7 is this"
                },
                {
                    id:Date.now()+Math.random()*2,
                    title:"Task8 is this"
                },
                {
                    id:Date.now()+Math.random()*2,
                    title:"Task9 is this"
                }
            ]
        },
    ];
    return data;
}
export {
    getData,
}