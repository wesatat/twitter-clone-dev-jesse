import {Comment} from '../typings'

export const fetchComments = async (tweetId:string) => {

    //get comment back from server based off tweet ID 
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getComments?tweetId=${tweetId}`)

    const comments: Comment[] = await res.json();    
   
    return comments;
}