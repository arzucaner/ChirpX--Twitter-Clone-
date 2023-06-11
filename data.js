const tweetsData = [
    {
        handle: `@Softwareman`,
        profilePicture: `images/software.jpg`,
        bio: `Software Developer`,
        likes: 27,
        retweets: 10,
        tweetText: `In general, important topics in a software architecture are OOP, Design patterns, Separation of concerns, 
        Scalability, Security, and Performance`,
        replies: [],
        isLiked: false,
        isRetweeted: false,
    },
    {
        handle: `@flowerwomen`,
        profilePicture: `images/flower.jpg`,
        bio: `Nature Lover`,
        likes: 6500,
        retweets: 234,
        tweetText: `Have you tried chatgpt?`,
        replies: [
            {
                handle: `@computerhead`,
                profilePicture: `images/computer.jpg`,
                tweetText: `Yes, I like it`,
            },
            {
                handle: `@birds`,
                profilePicture: `images/birds.jpg`,
                tweetText: `I don't like it`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
    },
];

export { tweetsData };

