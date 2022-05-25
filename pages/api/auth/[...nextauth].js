import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import TwitterProvider from 'next-auth/providers/twitter'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version:'2.0',
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    
    // ...add more providers here
  ]
})

/// Twitter api keys tsj6TcVn5cRPYZ5tLZkmCY7O5
/// Twitter api sewcret Imjyefizys4dLtZxn9WETo9AxuvWbWWoxfGE52AaxhIKYUtqi8
/// Twitter bearer token AAAAAAAAAAAAAAAAAAAAACjpcwEAAAAAIfQQZr5xwdi6IQ9vYFg5o5F0vSk%3Dc2qe9jzuN0j9X0gZNDse8RESNgYaT466vWz8zl5p4YS8xbAWhl
// aPI ID 24373544
//acces token 398574239-DMsxFcGGz252x8jFU2ZwFG9KIhF75Y7D9nOoh95q
//access token secret Au1TE7186tYfG6giAC8ys5B5X5IVu34RKwh70kp0KWjyy


//GithubProvider({
//    clientId: process.env.GITHUB_ID,
//    clientSecret: process.env.GITHUB_SECRET,
//    version:'2.0'
//  }),
