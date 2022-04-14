export const root = 'https://www.reddit.com';

//Call to get Sub Reddit Posts using API
export const getSubredditPosts = async (subReddits) => {
    const response = await fetch(`${root}${subReddits}.json`);
    const json = await response.json();
    return json.data.children.map((post) => post.data)
}

//Call to get side Reddit posts using API
export const getSubReddits = async () => {
    const response = await fetch(`${root}/subreddits.json`)
    const json = await response.json();
    return json.data.children.map((post) => post.data)
}