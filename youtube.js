var Video = /** @class */ (function () {
    function Video(videoTitle, duration, numberOfViews, numberOfLikes, numberOfDislikes, nameOfTheChannel, channelProfilePic, comments, numberOfComments) {
        var _this = this;
        this.getVideoTitle = function () {
            return _this._videoTitle;
        };
        this.getDuration = function () {
            return _this._duration;
        };
        this.getNumberOfViews = function () {
            return _this._numberOfViews;
        };
        this.getNumberOfLikes = function () {
            return _this._numberOfLikes;
        };
        this.getNumberOfDislikes = function () {
            return _this._numberOfDislikes;
        };
        this.getComments = function () {
            return _this._comments;
        };
        this.setNumberOfComments = function (commentCount) {
            _this._numberOfComments = commentCount;
        };
        this.getNumberOfComments = function () {
            return _this._numberOfComments;
        };
        this.setNumberOfLikes = function (value) {
            _this._numberOfLikes = value;
        };
        this.getChannelProfilePic = function () {
            return _this._channelProfilePic;
        };
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
    return Video;
}());
var Reply = /** @class */ (function () {
    function Reply(userName, userProfilePic, likes, disLikes, replyText) {
        this._userName = userName;
        this._userProfilePic = userProfilePic;
        this._likes = likes;
        this._disLikes = disLikes;
        this._replyText = replyText;
    }
    Reply.prototype.getUserName = function () {
        return this._userName;
    };
    Reply.prototype.getUserProfilePic = function () {
        return this._userProfilePic;
    };
    Reply.prototype.getLikes = function () {
        return this._likes;
    };
    Reply.prototype.getDisLikes = function () {
        return this._disLikes;
    };
    Reply.prototype.getReplyText = function () {
        return this._replyText;
    };
    return Reply;
}());
var Comments = /** @class */ (function () {
    function Comments(userName, userProfilePic, likes, disLikes, commentText, replies) {
        var _this = this;
        this.getUserProfilePic = function () {
            return _this._userProfilePic;
        };
        this.getLikes = function () {
            return _this._likes;
        };
        this.getDisLikes = function () {
            return _this._disLikes;
        };
        this.getCommentText = function () {
            return _this._commentText;
        };
        this.getReplies = function () {
            return _this.replies;
        };
        this._userName = userName;
        this._userProfilePic = userProfilePic;
        this._likes = likes;
        this._disLikes = disLikes;
        this._commentText = commentText;
        this.replies = replies;
    }
    Comments.prototype.getUserName = function () {
        return this._userName;
    };
    return Comments;
}());
var replies = [
    new Reply('hellcreeper', new URL("https://www.example.com/"), 7, 4, 'i dont like sasuke uchiha')
];
replies[1] = new Reply('hellcreeper3', new URL("https://www.example.com/"), 7, 4, 'i dont like sasuke uchiha');
console.log(replies[0]);
console.log(replies[1]);
var comments = [
    new Comments('lion', new URL("https://www.example.com/"), 10, 4, 'sasuke is cute', replies),
    new Comments('lion23', new URL("https://www.example.com/"), 10, 4, 'sasuke is cute', replies)
];
console.log(comments[0]);
console.log(comments[1].getReplies());
var uploadVedio = new Video('Hackintosh facetime', '22:10', 12345, 88888, 777, 'MacPros', new URL("https://www.example.com/"), comments, comments.length);
console.log(uploadVedio);
console.log(uploadVedio.getComments()[0].getReplies());
//# sourceMappingURL=youtube.js.map