import { createContext, ReactNode, useContext, useState } from 'react';
import { AppStateEnum } from '../types';

interface AppStateContextProps {
    appState: AppStateEnum;
    setAppState: React.Dispatch<React.SetStateAction<AppStateEnum>>;
}

interface IProps {
    children: ReactNode;
}

const AppStateContext = createContext<AppStateContextProps>({ appState: AppStateEnum.INITIAL, setAppState: () => {} });

export const AppStateProvider: React.FC<IProps> = ({ children }) => {
    const [appState, setAppState] = useState<AppStateEnum>(AppStateEnum.INITIAL);

    return <AppStateContext.Provider value={{ appState, setAppState }}>{children}</AppStateContext.Provider>;
};

export const useAppState = () => useContext(AppStateContext);
