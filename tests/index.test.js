import { fireEvent } from '@testing-library/dom';
import { tweetsData } from './data.js';
import { render, handleLikeClick, handleRetweetClick, handleReplyClick } from './index.js';

test('handleLikeClick should toggle the like status and update the likes count', () => {
    const tweetId = tweetsData[0].uuid;
    const initialLikeCount = tweetsData[0].likes;
    const likeButton = document.createElement('button');
    likeButton.dataset.like = tweetId;

    handleLikeClick(tweetId);

    expect(tweetsData[0].isLiked).toBe(true);
    expect(tweetsData[0].likes).toBe(initialLikeCount + 1);

    handleLikeClick(tweetId);

    expect(tweetsData[0].isLiked).toBe(false);
    expect(tweetsData[0].likes).toBe(initialLikeCount);
});

test('handleRetweetClick should toggle the retweet status and update the retweets count', () => {
    const tweetId = tweetsData[0].uuid;
    const initialRetweetCount = tweetsData[0].retweets;
    const retweetButton = document.createElement('button');
    retweetButton.dataset.retweet = tweetId;

    handleRetweetClick(tweetId);

    expect(tweetsData[0].isRetweeted).toBe(true);
    expect(tweetsData[0].retweets).toBe(initialRetweetCount + 1);

    handleRetweetClick(tweetId);

    expect(tweetsData[0].isRetweeted).toBe(false);
    expect(tweetsData[0].retweets).toBe(initialRetweetCount);
});

test('handleReplyClick should toggle the visibility of the reply section', () => {
    const replyId = tweetsData[0].uuid;
    const replyButton = document.createElement('button');
    replyButton.dataset.reply = replyId;
    const replySection = document.createElement('div');
    replySection.id = `replies-${replyId}`;
    replySection.classList.add('tweet-replies', 'hidden');

    handleReplyClick(replyId);

    expect(replySection.classList.contains('hidden')).toBe(false);

    handleReplyClick(replyId);

    expect(replySection.classList.contains('hidden')).toBe(true);
});

test('render should display the correct number of tweets', () => {
    const container = document.createElement('div');
    const tweetsCount = tweetsData.length;

    render(container);

    const renderedTweets = container.querySelectorAll('.tweet');
    expect(renderedTweets.length).toBe(tweetsCount);
});
