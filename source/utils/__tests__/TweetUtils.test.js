import TweetUtils from '../TweetUtils';

describe('TweetUtils', () => {
    test('GetListOfTweetIds returns an array of tweet ids', () => {
        const tweetMock = {
            tweet1: {},
            tweet2: {},
            tweet3: {}
        };

        const expectedListOfTweetIds = [
            'tweet1',
            'tweet2',
            'tweet3'
        ];

        const actualListOfTweetIds = TweetUtils.getListOfTweetIds(
            tweetMock
        );

        expect(actualListOfTweetIds)
            .toEqual(expectedListOfTweetIds);
    });
});
