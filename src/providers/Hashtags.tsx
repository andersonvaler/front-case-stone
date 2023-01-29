import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { HashtagsService } from '../services';
import { Hashtag } from '../types';

interface HashtagsContextProps {
    hashtags: Hashtag[];
    getHashtags: (ids: number[]) => Hashtag[];
    setHashtags: React.Dispatch<React.SetStateAction<Hashtag[]>>;
}

interface IProps {
    children: ReactNode;
}

const HashtagsContext = createContext<HashtagsContextProps>({
    hashtags: [],
    setHashtags: () => {},
    getHashtags: () => [],
});

export const HashtagsProvider: React.FC<IProps> = ({ children }) => {
    const [hashtags, setHashtags] = useState<Hashtag[]>([]);

    useEffect(() => {
        HashtagsService.getHashtags().then(response => {
            setHashtags(response.data);
        });
    }, []);

    const getHashtags = useCallback(
        (ids: number[]): Hashtag[] => {
            return hashtags.filter(hashtag => ids.includes(hashtag.id));
        },
        [hashtags],
    );

    const value = useMemo(
        () => ({
            hashtags,
            setHashtags,
            getHashtags,
        }),
        [hashtags, getHashtags],
    );

    return <HashtagsContext.Provider value={value}>{children}</HashtagsContext.Provider>;
};

export const useHashtags = () => useContext(HashtagsContext);
