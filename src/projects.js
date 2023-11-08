import techBlogImg from './assets/tech-blog.png'

const projects = [

  {
    projectId: 1,
    title: 'NexCommerce',
    description: 'Full Stack MERN application e-commerce site',
    text: `
    
    Project goals:
      Develop a large MERN stack application centered around a mock e-commerce shopping experience.
      Add security features to keep user data private
      Ensure scaleability in hosting and data storage
      Fill it with a variety of products, including accurate and comprehensive data sets, to give the user a real feeling experience.
      Make the site easy to navigate and intuative to use on either desktop or mobile.
      Optomize proformace and impliment skeleton loading structures to minimize wait times and frustration.
      Bring it all together to drive client engagement.







      
    
    Technological Backbone:
    NexCommerce harnesses the power of robust technologies to deliver unparalleled performance. Leveraging React.js for dynamic front-end experiences and Node.js for a scalable back end, the platform ensures rapid response times and seamless interactions. The integration of GraphQL enhances data retrieval efficiency, while Apollo brings real-time updates to the forefront, keeping users engaged and informed.
    
    Personalization and Recommendations:
    In the era of personalized experiences, NexCommerce stands out with its sophisticated recommendation engine. By analyzing user behavior and preferences, the platform curates tailored product suggestions, fostering a deeper connection between users and the vast array of offerings. This personalized touch not only enhances user satisfaction but also drives conversion rates and customer loyalty.
    
    Looking Ahead:
    As we continue to evolve NexCommerce, our commitment to innovation remains unwavering. The journey doesn't end with a launch; it's an ongoing exploration of possibilities. NexCommerce is poised to be a trailblazer in the e-commerce landscape, setting new standards for user experience, technological excellence, and business success.
    
    Join us on this exciting journey with NexCommerce, where innovation meets online retail, and the future of e-commerce is continually redefined.`,
    image: 'https://try.stackoverflow.co/img/landing-pages/discover-employer-branding/illo-tal-1-p03.png',
    link: 'https://www.google.com'
  },
  {
    projectId: 2,
    title: 'Tech Blog',
    description: 'Social Media for Tech Enthusiasts',
    text: 'Tech blog allows users to register and login to post, comment, and like posts. Users can also view other users profiles and see their posts. This application uses the MVC paradigm and is built with Handlebars.js, Sequelize, Express.js, and Node.js.',
    image: techBlogImg,
    link: 'https://www.google.com'
  },
  {
    projectId: 3,
    title: 'Project 3a',
    description: 'This is the third project',
    text: 'This is the first project. I will put a longer description here.',
    image: 'https://via.placeholder.com/150',
    link: 'https://www.google.com'
  },
]

export default projects;