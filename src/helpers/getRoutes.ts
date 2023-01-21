const baseUrl = 'http://localhost:3333';

const apiRoutes = {
    posts: '/posts',
    texts: '/texts',
    hashtags: '/hashtags',
    users: '/users',
    me: '/me',
};

export function getApiUrl(route: keyof typeof apiRoutes): string {
    return `${baseUrl}${apiRoutes[route]}`;
}
