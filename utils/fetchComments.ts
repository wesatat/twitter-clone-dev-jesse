import {Comment} from '../typings'

export const fetchComments = async (tweetId:string) => {

    //get comment back from server based off tweet ID 
    const res = await fetch(`/api/getComments?tweetId=${tweetId}`)

    const comments: Comment[] = await res.json();    
   
    return comments;
}