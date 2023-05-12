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
})

function handleLikeClick(tweetId){
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]
    targetTweetObj.likes++
    render()
}

function getFeedHtml(){
    let feedHtml = ``

    tweetsData.forEach(function (tweet){
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