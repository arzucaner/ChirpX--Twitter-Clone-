import {tweetsData} from './data/js'
const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')

tweetBtn.addEventListener('click', function() {
    console.log(tweetInput.value)
})

document.addEventListener('click', function(e) {
    if(e.target.dataset.like){
        handleLikeClick(e.target.dataset.like)
    }
    else if(e.target.dataset.retweet){
        handleRetweetClick(e.target.dataset.retweet)
    }
    else if(e.target.dataset.reply){
        handleRetweetClick(e.target.dataset.reply)
    }
})
function handleLikeClick(tweetId){
    const targetTweetObj =tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]

    if (targetTweetObj.isLiked){
        targetTweetObj.likes---        
    }
    else{
        targetTweetObj.likes++
    }
    targetTweetObj.isLiked = !targetTweetObj.isLiked
    render()
}

function handleLikeClick(tweetId){
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]

    if(targetTweetObj.isRetweeted){
        targetTweetObj.retweets--
    }
    else{
        targetTweetObj.retweets++
    }
    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted       
    render()

function handleReplyClick(replyId){
    document.getElementById(`replies-${replyId}`).classList.toggle('hidden')
}

function getFeedHtml(){
    let feedHtml = ``

    tweetsData.forEach(function (tweet){

        let likeIconClass = ''

        if (tweet.isliked){
            likeIconClass = 'liked'
        }

        let retweetIconClass = ''

        if(tweet.isRetweeted){
            retweetIconClass = 'retweeted'
        }

        let repliesHtml =''

        if(tweet.replies.length > 0){
            console.log(tweet.uuid)
        }
        
        feedHtml += `
    <div class="tweet">
       <div class="tweet-inner">
       <img src="${tweet.profilePicture}" class="profile-picture>
       <div>
           <p class="handle">${tweet.handle}</p>
           <p class="tweet-text">${tweet.tweetText}</p>
           <div class="tweet-details">
                <span class="tweet-detail">
                      ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                   ${tweet.retweets}
                </span>
            </div>
        </div>
    </div>
</div>
`
        
    })
    return feedHtml
}

function render() {
    document.getElementById('feed').innerHTML = getFeedHtml()
}

render()