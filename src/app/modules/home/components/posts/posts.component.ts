import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  POSTS = [
    {
      "name": "Ousmane Diot",
      "bio": "Ex Googler (Engineering Manager)",
      "created_at": "20h",
      "profile_pic": "https://media.licdn.com/dms/image/C4E03AQGPgOM1ndeQsg/profile-displayphoto-shrink_100_100/0/1596567396773?e=1679529600&v=beta&t=rJWfCqpgCIqR_XmHyZiUAOLXreS3AOSXm00xLKrvMsY",
      "connection_level": 2,
      "text": `
      When a manager asks "how long will it take to code new feature X"... The answer is, "I don't know".
        You don't know because nobody can predict the future. It's an unrealistic question. There are way too many
        variables with software you can't possibly consider all of them, and if you did, you will have already coded the
        entire thing in your head.
        The best thing is to focus on meeting the requirements and doing so correctly. Don't let the pressure to meet some
        deadline make you create bad code.
        `,

      "likes_count": 23,
      "commnets_count": 23,
      "reposts_count": 28,
      "type" : "person"
    },
    {
      "name": "Ousmane Diot",
      "bio": "Ex Googler (Engineering Manager)",
      "created_at": "20h",
      "profile_pic": "https://media.licdn.com/dms/image/C4E03AQGPgOM1ndeQsg/profile-displayphoto-shrink_100_100/0/1596567396773?e=1679529600&v=beta&t=rJWfCqpgCIqR_XmHyZiUAOLXreS3AOSXm00xLKrvMsY",
      "connection_level": 2,
      "text": `
      When a manager asks "how long will it take to code new feature X"... The answer is, "I don't know".
        You don't know because nobody can predict the future. It's an unrealistic question. There are way too many
        variables with software you can't possibly consider all of them, and if you did, you will have already coded the
        entire thing in your head.
        The best thing is to focus on meeting the requirements and doing so correctly. Don't let the pressure to meet some
        deadline make you create bad code.
        `,

      "likes_count": 23,
      "commnets_count": 23,
      "reposts_count": 28,
      "type" : "person"
    },
    {
      "name": "Ousmane Diot",
      "bio": "Ex Googler (Engineering Manager)",
      "created_at": "20h",
      "profile_pic": "https://media.licdn.com/dms/image/C4E03AQGPgOM1ndeQsg/profile-displayphoto-shrink_100_100/0/1596567396773?e=1679529600&v=beta&t=rJWfCqpgCIqR_XmHyZiUAOLXreS3AOSXm00xLKrvMsY",
      "connection_level": 2,
      "text": `
      When a manager asks "how long will it take to code new feature X"... The answer is, "I don't know".
        You don't know because nobody can predict the future. It's an unrealistic question. There are way too many
        variables with software you can't possibly consider all of them, and if you did, you will have already coded the
        entire thing in your head.
        The best thing is to focus on meeting the requirements and doing so correctly. Don't let the pressure to meet some
        deadline make you create bad code.
        `,

      "likes_count": 23,
      "commnets_count": 23,
      "reposts_count": 28,
      "type" : "person"
    },
    {
      "name": "Ousmane Diot",
      "bio": "Ex Googler (Engineering Manager)",
      "created_at": "20h",
      "profile_pic": "https://media.licdn.com/dms/image/C4E03AQGPgOM1ndeQsg/profile-displayphoto-shrink_100_100/0/1596567396773?e=1679529600&v=beta&t=rJWfCqpgCIqR_XmHyZiUAOLXreS3AOSXm00xLKrvMsY",
      "connection_level": 2,
      "text": `
      When a manager asks "how long will it take to code new feature X"... The answer is, "I don't know".
        You don't know because nobody can predict the future. It's an unrealistic question. There are way too many
        variables with software you can't possibly consider all of them, and if you did, you will have already coded the
        entire thing in your head.
        The best thing is to focus on meeting the requirements and doing so correctly. Don't let the pressure to meet some
        deadline make you create bad code.
        `,

      "likes_count": 23,
      "commnets_count": 23,
      "reposts_count": 28,
      "type" : "person"
    },
    {
      "name": "Ousmane Diot",
      "bio": "Ex Googler (Engineering Manager)",
      "created_at": "20h",
      "profile_pic": "https://media.licdn.com/dms/image/C4E03AQGPgOM1ndeQsg/profile-displayphoto-shrink_100_100/0/1596567396773?e=1679529600&v=beta&t=rJWfCqpgCIqR_XmHyZiUAOLXreS3AOSXm00xLKrvMsY",
      "connection_level": 2,
      "text": `
      When a manager asks "how long will it take to code new feature X"... The answer is, "I don't know".
        You don't know because nobody can predict the future. It's an unrealistic question. There are way too many
        variables with software you can't possibly consider all of them, and if you did, you will have already coded the
        entire thing in your head.
        The best thing is to focus on meeting the requirements and doing so correctly. Don't let the pressure to meet some
        deadline make you create bad code.
        `,

      "likes_count": 23,
      "commnets_count": 23,
      "reposts_count": 28,
      "type" : "person"
    },
    {
      "name": "Ousmane Diot",
      "bio": "Ex Googler (Engineering Manager)",
      "created_at": "20h",
      "profile_pic": "https://media.licdn.com/dms/image/C4E03AQGPgOM1ndeQsg/profile-displayphoto-shrink_100_100/0/1596567396773?e=1679529600&v=beta&t=rJWfCqpgCIqR_XmHyZiUAOLXreS3AOSXm00xLKrvMsY",
      "connection_level": 2,
      "text": `
      When a manager asks "how long will it take to code new feature X"... The answer is, "I don't know".
        You don't know because nobody can predict the future. It's an unrealistic question. There are way too many
        variables with software you can't possibly consider all of them, and if you did, you will have already coded the
        entire thing in your head.
        The best thing is to focus on meeting the requirements and doing so correctly. Don't let the pressure to meet some
        deadline make you create bad code.
        `,

      "likes_count": 23,
      "commnets_count": 23,
      "reposts_count": 28,
      "type" : "person"
    },
    {
      "name": "Ousmane Diot",
      "bio": "Ex Googler (Engineering Manager)",
      "created_at": "20h",
      "profile_pic": "https://media.licdn.com/dms/image/C4E03AQGPgOM1ndeQsg/profile-displayphoto-shrink_100_100/0/1596567396773?e=1679529600&v=beta&t=rJWfCqpgCIqR_XmHyZiUAOLXreS3AOSXm00xLKrvMsY",
      "connection_level": 2,
      "text": `
      When a manager asks "how long will it take to code new feature X"... The answer is, "I don't know".
        You don't know because nobody can predict the future. It's an unrealistic question. There are way too many
        variables with software you can't possibly consider all of them, and if you did, you will have already coded the
        entire thing in your head.
        The best thing is to focus on meeting the requirements and doing so correctly. Don't let the pressure to meet some
        deadline make you create bad code.
        `,

      "likes_count": 23,
      "commnets_count": 23,
      "reposts_count": 28,
      "type" : "person"
    },
    {
      "name": "Ousmane Diot",
      "bio": "Ex Googler (Engineering Manager)",
      "created_at": "20h",
      "profile_pic": "https://media.licdn.com/dms/image/C4E03AQGPgOM1ndeQsg/profile-displayphoto-shrink_100_100/0/1596567396773?e=1679529600&v=beta&t=rJWfCqpgCIqR_XmHyZiUAOLXreS3AOSXm00xLKrvMsY",
      "connection_level": 2,
      "text": `
      When a manager asks "how long will it take to code new feature X"... The answer is, "I don't know".
        You don't know because nobody can predict the future. It's an unrealistic question. There are way too many
        variables with software you can't possibly consider all of them, and if you did, you will have already coded the
        entire thing in your head.
        The best thing is to focus on meeting the requirements and doing so correctly. Don't let the pressure to meet some
        deadline make you create bad code.
        `,

      "likes_count": 23,
      "commnets_count": 23,
      "reposts_count": 28,
      "type" : "person"
    },
    {
      "name": "Ousmane Diot",
      "bio": "Ex Googler (Engineering Manager)",
      "created_at": "20h",
      "profile_pic": "https://media.licdn.com/dms/image/C4E03AQGPgOM1ndeQsg/profile-displayphoto-shrink_100_100/0/1596567396773?e=1679529600&v=beta&t=rJWfCqpgCIqR_XmHyZiUAOLXreS3AOSXm00xLKrvMsY",
      "connection_level": 2,
      "text": `
      When a manager asks "how long will it take to code new feature X"... The answer is, "I don't know".
        You don't know because nobody can predict the future. It's an unrealistic question. There are way too many
        variables with software you can't possibly consider all of them, and if you did, you will have already coded the
        entire thing in your head.
        The best thing is to focus on meeting the requirements and doing so correctly. Don't let the pressure to meet some
        deadline make you create bad code.
        `,

      "likes_count": 23,
      "commnets_count": 23,
      "reposts_count": 28,
      "type" : "person"
    },
    {
      "name": "Ousmane Diot",
      "bio": "Ex Googler (Engineering Manager)",
      "created_at": "20h",
      "profile_pic": "https://media.licdn.com/dms/image/C4E03AQGPgOM1ndeQsg/profile-displayphoto-shrink_100_100/0/1596567396773?e=1679529600&v=beta&t=rJWfCqpgCIqR_XmHyZiUAOLXreS3AOSXm00xLKrvMsY",
      "connection_level": 2,
      "text": `
      When a manager asks "how long will it take to code new feature X"... The answer is, "I don't know".
        You don't know because nobody can predict the future. It's an unrealistic question. There are way too many
        variables with software you can't possibly consider all of them, and if you did, you will have already coded the
        entire thing in your head.
        The best thing is to focus on meeting the requirements and doing so correctly. Don't let the pressure to meet some
        deadline make you create bad code.
        `,

      "likes_count": 23,
      "commnets_count": 23,
      "reposts_count": 28,
      "type" : "person"
    },
    {
      "name": "Ousmane Diot",
      "bio": "Ex Googler (Engineering Manager)",
      "created_at": "20h",
      "profile_pic": "https://media.licdn.com/dms/image/C4E03AQGPgOM1ndeQsg/profile-displayphoto-shrink_100_100/0/1596567396773?e=1679529600&v=beta&t=rJWfCqpgCIqR_XmHyZiUAOLXreS3AOSXm00xLKrvMsY",
      "connection_level": 2,
      "text": `
      When a manager asks "how long will it take to code new feature X"... The answer is, "I don't know".
        You don't know because nobody can predict the future. It's an unrealistic question. There are way too many
        variables with software you can't possibly consider all of them, and if you did, you will have already coded the
        entire thing in your head.
        The best thing is to focus on meeting the requirements and doing so correctly. Don't let the pressure to meet some
        deadline make you create bad code.
        `,

      "likes_count": 23,
      "commnets_count": 23,
      "reposts_count": 28,
      "type" : "person"
    },
    {
      "name": "Ousmane Diot",
      "bio": "Ex Googler (Engineering Manager)",
      "created_at": "20h",
      "profile_pic": "https://media.licdn.com/dms/image/C4E03AQGPgOM1ndeQsg/profile-displayphoto-shrink_100_100/0/1596567396773?e=1679529600&v=beta&t=rJWfCqpgCIqR_XmHyZiUAOLXreS3AOSXm00xLKrvMsY",
      "connection_level": 2,
      "text": `
      When a manager asks "how long will it take to code new feature X"... The answer is, "I don't know".
        You don't know because nobody can predict the future. It's an unrealistic question. There are way too many
        variables with software you can't possibly consider all of them, and if you did, you will have already coded the
        entire thing in your head.
        The best thing is to focus on meeting the requirements and doing so correctly. Don't let the pressure to meet some
        deadline make you create bad code.
        `,

      "likes_count": 23,
      "commnets_count": 23,
      "reposts_count": 28,
      "type" : "person"
    },

  ]

}
