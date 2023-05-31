const Personal = {
     "data": {
        id: 1,
        title: "Introduction",
        image: "https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2015/11/blog_dev-01-1.jpg",
        text: 'My name is Yiran Xu. I am currently a full-time Software Engineer at 777 Partners. I have a Bachelor\'s degree in Electrical Engineering from the University of California, Irvine, and a Master\'s degree in Computer & Electrical Engineering from University of Southern California. Some coursework that I took during my college year includes ',
        classes:[
            {   
                _id:1,
                course: 'Java Programming, Database Management, Algorithms, Data Structure, Computer Networking, Random Processing, Information Theory, C Programming, Operating Systems, and Assembly language.',
                genre:'',
            },
            // {   
            //     _id:2,
            //     course: '',
            //     genre: '',
            // },
            // {   
            //     _id:3,
            //     course: '',
            //     genre: '',
            // },
            // {   
            //     _id:4,
            //     course: '',
            //     genre: '',
            // },
            
        ]
    },
    'skills':{
        title: 'Skills',
        image: "https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2015/11/blog_dev-01-1.jpg",
        text:`
        I participated in Prof. Ajitesh's Lab and helped build the COVID-19 tracking website using React.js as the frontend. The backend was supported by CSV files published on GitHub. The website can be accessed at https://scc-usc.github.io/ReCOVER-COVID-19. Although it was not a long-term working experience, I am glad that I had the opportunity to work on a real-time project. Regarding my skills and experiences in software development including:`,
        classes:[
            {   
                _id:1,
                genre: `Languages: `,
                tech:  `Java, JavaScript, Python, HTML5/CSS, Tailwind CSS, Sass, TypeScript`
            },
            {   
                _id:2,
                genre:`Data Management: `, 
                tech: `MySQL, PostgreSQL, Hibernate, NoSQL/MongoDB, Redis, Hazelcast, GraphQL, Neo4j
`
            },
            {   
                _id:3,
                genre:`Backend: `,
                tech: `Spring Boot, Spring MVC, Spring Cloud, Spring Data, Java Persistence API, AWS, Flask, Node.js, GitLab`

            },
            {   
                _id:4,
                genre:`Frontend/App Development/DevOps: `,
                tech: `React.js, Angular, Android Studio, Docker, Kubernetes`

            },
        ]
    },
    'more':{
        title: 'Hobbies',
        // image: "https://image.freepik.com/free-photo/female-executive-manager-team_1262-1470.jpg",
        time:  '',
        text:`
        Except for those technical skills, I have also built strong connections with others. Friends, for me, hold the most important place in my relationships. I have spent a lot of time with them traveling and engaging in outdoor activities, and I believe they have helped me develop an amicable personality.
        I am in love with doing: `,
        classes:[
            {   
                _id:1,
                course: `Cooking:`,
                genre:  `I was born in China, and the food culture has played a significant role in shaping me. I have a deep love for cooking food and sharing it with others.`
            },
            {   
                _id:2,
                course:`jogging:`, 
                genre: `
                    I enjoy spending my time jogging near the beach, as it makes me feel alive.`
            },
            {   
                _id:3,
                genre:``,
                tech: `
                `
            },
        ]
    },

}
export default Personal;