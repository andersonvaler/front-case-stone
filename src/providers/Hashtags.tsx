import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
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

    useMemo(() => {
        HashtagsService.getHashtags().then(response => {
            setHashtags(response.data);
        });
    }, []);

    const getHashtags = (ids: number[]): Hashtag[] => {
        return hashtags.filter(hashtag => ids.includes(hashtag.id));
    };

    return (
        <HashtagsContext.Provider value={{ hashtags, setHashtags, getHashtags }}>{children}</HashtagsContext.Provider>
    );
};

export const useHashtags = () => useContext(HashtagsContext);
