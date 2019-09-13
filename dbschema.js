let db = {
  users: [
    {
      userID: "sdf33334dasd443046sdad",
      email: "user@email.com",
      handle: "user",
      createdAT: "2019-08-27T09:16:46.618Z",
      imageUrl: "image/azfds/sdffs",
      bio: "asbdjhsbfbhjsdbjhsd",
      website: "https://user.com",
      location: "Delhi, India"
    }
  ],
  screams: [
    {
      userHandle: "user",
      body: "body",
      createdAt: "2019-08-27T09:16:46.618Z",
      likeCount: 5,
      commentCount: 2
    }
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "snafeskdkj45345ansdfhg",
      body: "scream comment body",
      createdAt: "2019-08-27T09:16:46.618Z"
    }
  ],
  notifications: [
    {
      recipiect: "user",
      sender: "user2",
      read: "true | flase",
      screamId: "gsajfkbjkbnkjf2544",
      type: "like | comment",
      createdAt: "2019-08-27T09:16:46.618Z"
    }
  ]
};

const userDetails = {
  //Redux Data
  credentials: {
    userID: "sdf33334dasd443046sdad",
    email: "user@email.com",
    handle: "user",
    createdAT: "2019-08-27T09:16:46.618Z",
    imageUrl: "image/azfds/sdffs",
    bio: "asbdjhsbfbhjsdbjhsd",
    website: "https://user.com",
    location: "Delhi, India"
  },
  likes: [
    {
      userHandle: "user",
      screamId: "msdfsfhsbvfjs"
    },
    {
      userHandle: "user",
      screamId: "engrwebffrjn"
    }
  ]
};
