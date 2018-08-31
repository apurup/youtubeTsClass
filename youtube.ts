class Video{
    private _videoTitle:string;
    private _duration:string;
    private _numberOfViews:number;
    private _numberOfLikes:number;
    private _numberOfDislikes:number;
    private _nameOfTheChannel:string;
    private _channelProfilePic:URL;
    private _comments:Array<Comments>;
    private _numberOfComments:number;

    constructor(videoTitle:string,duration:string,numberOfViews:number,numberOfLikes:number,numberOfDislikes:number,nameOfTheChannel:string,channelProfilePic:URL,comments:Array<Comments>,numberOfComments:number)
    {
        this._videoTitle = videoTitle;
        this._duration = duration;
        this._numberOfViews = numberOfViews;
        this._numberOfLikes = numberOfLikes;
        this._numberOfDislikes = numberOfDislikes;
        this._nameOfTheChannel = nameOfTheChannel;
        this._channelProfilePic = channelProfilePic;
        this._comments = comments;
        this._numberOfComments = numberOfComments;
    }

    getVideoTitle = () => {
        return this._videoTitle;
    }

    getDuration = () => {
        return this._duration;
    }

    getNumberOfViews = () => {
        return this._numberOfViews;
    }

    getNumberOfLikes = () => {
        return this._numberOfLikes;
    }

    getNumberOfDislikes = () => {
        return this._numberOfDislikes;
    }

    getComments = () => {
        return this._comments;
    }

    setNumberOfComments = (commentCount:number) => {
        this._numberOfComments = commentCount;
    }

    getNumberOfComments = () => {
        return this._numberOfComments
    }
    setNumberOfLikes = (value: number) => {
        this._numberOfLikes = value;
    }
    getChannelProfilePic = () => {
        return this._channelProfilePic;
    }








}

class Reply{
    getUserName(): string {
        return this._userName;
    }

    getUserProfilePic(): URL {
        return this._userProfilePic;
    }

    getLikes(): number {
        return this._likes;
    }

    getDisLikes(): number {
        return this._disLikes;
    }

    getReplyText(): string {
        return this._replyText;
    }
    private _userName:string;
    private _userProfilePic:URL;
    private _likes:number;
    private _disLikes:number;
    private _replyText:string;
    constructor(userName:string, userProfilePic: URL, likes: number, disLikes: number, replyText: string) {
        this._userName = userName;
        this._userProfilePic = userProfilePic;
        this._likes = likes;
        this._disLikes = disLikes;
        this._replyText = replyText;
    }


}
class Comments {
    getUserName(): string {
        return this._userName;
    }

    getUserProfilePic = (): URL => {
        return this._userProfilePic;
    }

    getLikes = (): number => {
        return this._likes;
    }

    getDisLikes = (): number => {
        return this._disLikes;
    }

    getCommentText = (): string =>{
        return this._commentText;
    }
    getReplies = () =>  {
        return this.replies;
    }

    private _userName:string;
    private _userProfilePic:URL;
    private _likes:number;
    private _disLikes:number;
    private _commentText:string;
    private replies:Array<Reply>;

    constructor(userName:string,userProfilePic:URL,likes:number,disLikes:number,commentText:string,replies:Array<Reply>)
    {
        this._userName=userName;
        this._userProfilePic=userProfilePic;
        this._likes=likes;
        this._disLikes=disLikes;
        this._commentText=commentText;
        this.replies=replies;
    }

}
type replies = Array<Reply>;
let replies:replies = [
     new Reply('hellcreeper',new URL(`https://www.example.com/`),7,4,'i dont like sasuke uchiha')

];

replies[1] = new Reply('hellcreeper3',new URL(`https://www.example.com/`),7,4,'i dont like sasuke uchiha');

console.log(replies[0]);
console.log(replies[1]);
type comments = Array<Comments>;
let comments:comments=[
    new Comments('lion',new URL(`https://www.example.com/`),10,4,'sasuke is cute',replies),
    new Comments('lion23',new URL(`https://www.example.com/`),10,4,'sasuke is cute',replies)

]
console.log(comments[0])

console.log(comments[1].getReplies())

let uploadVedio = new Video('Hackintosh facetime','22:10',12345,88888,777,'MacPros',new URL(`https://www.example.com/`),comments,comments.length)
console.log(uploadVedio)
console.log(uploadVedio.getComments()[0].getReplies())