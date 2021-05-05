import React, { Component } from 'react';
//import SnapkiteStreamClient from 'snapkite-stream-client';
import StreamTweet from './StreamTweet';
import Header from './Header';
import TweetStore from "../stores/TweetStore";

class Stream extends Component {
    state = {
        //tweet: null
        tweet: TweetStore.getTweet()
    }

    componentDidMount() {
        //SnapkiteStreamClient.initializeStream(this.handleNewTweet);
        TweetStore.addChangeListener(this.onTweetChange);
    }

    componentWillUnmount() {
        //SnapkiteStreamClient.destroyStream();
        TweetStore.removeChangeListener(this.onTweetChange);
    }

    onTweetChange = () => {
        this.setState({
            tweet: TweetStore.getTweet()
        })
    }

    /*
    handleNewTweet = (tweet) => {
        this.setState({
            tweet: tweet
        })
    }
     */

    render() {
        const { tweet } = this.state;
        const { onAddTweetToCollection } = this.props;
        const headerText = 'Waiting for public photos from Twitter...';

        if (tweet) {
            console.log(tweet);
            /*
            return (
                <StreamTweet
                    tweet={tweet}
                    onAddTweetToCollection={onAddTweetToCollection}
                />
            );
             */
            return (<StreamTweet tweet={tweet} />);
        }

        return (
            <Header text={headerText}/>
        );
    }
}

export default Stream;
