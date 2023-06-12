import { tweetsData } from './data.js';
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

const tweetInput = document.getElementById('tweet-input');
const tweetBtn = document.getElementById('tweet-btn');
const feed = document.getElementById('feed');
const analyticsSection = document.getElementById('analytics');

tweetBtn.addEventListener('click', function () {
    const tweetText = tweetInput.value;
    if (tweetText.trim() !== '') {
        const newTweet = {
            handle: '@chirpx',
            profilePicture: 'images/chirpxlogo.png',
            likes: 0,
            retweets: 0,
            tweetText: tweetText,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4(),
        };
        tweetsData.unshift(newTweet);
        render();
        tweetInput.value = '';
    }
});

function handleLikeClick(tweetId) {
    const targetTweetObj = tweetsData.find(tweet => tweet.uuid === tweetId);
    if (targetTweetObj) {
        targetTweetObj.isLiked = !targetTweetObj.isLiked;
        if (targetTweetObj.isLiked) {
            targetTweetObj.likes++;
        } else {
            targetTweetObj.likes--;
        }
        render();
    }
}

function handleRetweetClick(tweetId) {
    const targetTweetObj = tweetsData.find(tweet => tweet.uuid === tweetId);
    if (targetTweetObj) {
        targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted;
        if (targetTweetObj.isRetweeted) {
            targetTweetObj.retweets++;
        } else {
            targetTweetObj.retweets--;
        }
        render();
    }
}

function handleReplyClick(replyId) {
    const replySection = document.getElementById(`replies-${replyId}`);
    if (replySection) {
        replySection.classList.toggle('hidden');
    }
}

function render() {
    const feedHtml = getFeedHtml();
    feed.innerHTML = feedHtml;

    const likeButtons = document.querySelectorAll('[data-like]');
    likeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tweetId = button.dataset.like;
            handleLikeClick(tweetId);
        });
    });

    const retweetButtons = document.querySelectorAll('[data-retweet]');
    retweetButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tweetId = button.dataset.retweet;
            handleRetweetClick(tweetId);
        });
    });

    const replyButtons = document.querySelectorAll('.reply-button');
    replyButtons.forEach(button => {
        button.addEventListener('click', function () {
            const replyId = button.dataset.reply;
            handleReplyClick(replyId);
        });
    });
}

function getFeedHtml() {
    let feedHtml = '';
    tweetsData.forEach(tweet => {
        const likeIconClass = tweet.isLiked ? 'liked' : '';
        const retweetIconClass = tweet.isRetweeted ? 'retweeted' : '';
        let repliesHtml = '';
        if (tweet.replies.length > 0) {
            repliesHtml += `
                <div class="tweet-replies hidden" id="replies-${tweet.uuid}">
                    ${tweet.replies.map(reply => `
                        <div class="tweet-reply">
                            <img src="${reply.profilePicture}" class="profile-picture">
                            <div>
                                <p class="handle">${reply.handle}</p>
                                <p class="tweet-text">${reply.tweetText}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        feedHtml += `
            <div class="tweet">
                <div class="tweet-inner">
                    <img src="${tweet.profilePicture}" class="profile-picture">
                    <div>
                        <p class="handle">${tweet.handle}</p>
                        <p class="tweet-text">${tweet.tweetText}</p>
                        <div class="tweet-details">
                            <span class="tweet-detail">
                                <i class="fa-solid fa-comment-dots" data-reply="${tweet.uuid}"></i>
                                ${tweet.replies.length}
                            </span>
                            <span class="tweet-detail">
                                <i class="fa-solid fa-heart ${likeIconClass}" data-like="${tweet.uuid}"></i>
                                ${tweet.likes}
                            </span>
                            <span class="tweet-detail">
                                <i class="fa-solid fa-retweet ${retweetIconClass}" data-retweet="${tweet.uuid}"></i>
                                ${tweet.retweets}
                            </span>
                        </div>
                    </div>
                </div>
                ${repliesHtml}
                <button class="reply-button" data-reply="${tweet.uuid}">Reply</button>
            </div>
        `;
    });
    return feedHtml;
}

render();

const totalTweets = tweetsData.length;
const totalRetweets = tweetsData.reduce((total, tweet) => total + tweet.retweets, 0);
const totalLikes = tweetsData.reduce((total, tweet) => total + tweet.likes, 0);
const engagementRate = ((totalLikes / totalTweets) * 100).toFixed(2);

const analyticsHeading = document.getElementById('analytics-heading');

analyticsHeading.addEventListener('click', function () {
    const analyticsSection = document.getElementById('analytics');
    analyticsSection.classList.toggle('expand');
});

analyticsSection.innerHTML = analyticsHtml; 