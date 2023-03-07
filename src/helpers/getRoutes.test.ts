import { getApiUrl, baseUrl } from './getRoutes';

describe('getApiUrl', () => {
    it('should return the correct URL for routes', () => {
        expect(getApiUrl('posts')).toBe(`${baseUrl}/posts`);
        expect(getApiUrl('texts')).toBe(`${baseUrl}/texts`);
        expect(getApiUrl('hashtags')).toBe(`${baseUrl}/hashtags`);
        expect(getApiUrl('users')).toBe(`${baseUrl}/users`);
        expect(getApiUrl('me')).toBe(`${baseUrl}/me`);
    });
});
