export const root = 'https://www.reddit.com';

//Call to get Sub Reddit Posts using API
export const getSubredditPosts = async (subReddits) => {
    const response = await fetch(`${root}${subReddits}.json`);
    const json = await response.json();
    return json.data.children.map((post) => post.data)
}