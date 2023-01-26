export const baseUrl = 'http://localhost:3333';

const apiRoutes = {
    posts: '/posts',
    texts: '/texts',
    hashtags: '/hashtags',
    users: '/users',
    me: '/me',
};

export function getApiUrl(route: keyof typeof apiRoutes, filters?: { name: string; value: string }[]): string {
    const url = `${baseUrl}${apiRoutes[route]}`;

    if (filters) {
        const searchParams = new URLSearchParams();
        filters.forEach(filter => {
            searchParams.set(filter.name, filter.value);
        });

        return `${url}?${searchParams.toString()}`;
    }

    return url;
}
