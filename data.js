const tweetsData = [
    {
        handle: `@Softwareman`,
        profilePicture: `images/software.jpg`,
        likes: 27,
        retweets: 10,
        tweetText: `In general, important topics in a software architecture are OOP, Design patterns, Separation of concerns, Scalability, Security, 
         and Performance`,
        replies: [],
        isLiked: false,
        isRetweeted: false,
       
    },
    {
        handle: `@flowerwomen`,
        profilePicture: `images/flower.jpg`,
        likes: 6500,
        retweets: 234,
        tweetText: `Have you tried chatgpt?`,
        replies: [

                  {
                handle: `@computerhead`,
                profilePicture: `images/computer.jpeg`,
                tweetText: `Yes, I like it`,
           },
                  {
                handle: `@birds`,
                profilePicture: `images/birds.jpeg`,
                tweetText: `I don't like it`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
    },
        {
        handle: `@Doughnut`,
        profilePicture: `images/doughnut.jpeg`,
        likes: 10,
        retweets: 3,
        tweetText: `Do you like desserts?`,
        replies: [
            {
                handle: `@newlife`,
                profiloPicture: `images/newlife.jpeg`,
                tweetText: `Yes, but I can't eat it.`,
            },
            {
                handle: `@greenheaven`,
                profilePicture: `images/greenheaven`,
                tweetText: `If the sugar ratio is low, I like it very much.`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
        },
     ]
    
