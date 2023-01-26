import { useUsersForPosts } from './useUsersForPosts';
import { renderHook } from '@testing-library/react';
import { mockPost, mockUser } from '../mocks';
import mockAxios from 'jest-mock-axios';

jest.mock('../services', () => ({
    UserService: {
        getUsers: jest.fn(),
    },
}));

describe('useUsersForPosts', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return an empty array when no posts are passed', () => {
        const { result } = renderHook(() => useUsersForPosts([]));
        expect(result.current).toEqual([]);
    });

    it('should return an array with users data when posts are passed', async () => {
        mockAxios.mockResponse({ data: [mockUser] });

        const { result } = renderHook(() => useUsersForPosts([]));

        expect(result.current).toEqual([
            { id: 1, name: 'User 1' },
            { id: 2, name: 'User 2' },
        ]);
    });
});
