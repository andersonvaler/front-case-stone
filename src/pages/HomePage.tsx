import { AlertComponent, PostsComponent, UserProfileComponent } from '../components';
import { useAppState } from '../providers/AppState';
import { AppStateEnum } from '../types';

export const HomePage: React.FC = (): JSX.Element => {
    const { appState } = useAppState();

    return (
        <div className="flex w-full flex-col sm:flex-row text-sm md:text-base">
            <div
                className="w-full shadow-lg sm:w-5/12 lg:w-1/4 mb-5
                rounded-lg sm:mb-0 bg-gradient-to-tl 
                to-slate-100 from-indigo-50 border border-gray-300"
            >
                <UserProfileComponent />
            </div>
            <div className="flex flex-col items-center justfy-center w-full sm:overflow-y-scroll p-0 lg:px-16 h-screen">
                <PostsComponent />
            </div>
            {appState === AppStateEnum.ERROR && (
                <AlertComponent type="error">Ops! Ocorreu um erro ao processar sua solicitação!</AlertComponent>
            )}
            {appState === AppStateEnum.SUCCESS && (
                <AlertComponent type="success">Solicitação concluída com sucesso!</AlertComponent>
            )}
            {appState === AppStateEnum.LOADING && (
                <div className=" w-screen h-screen bg-slate-50 absolute">
                    <div className="loading-spinner"></div>
                </div>
            )}
        </div>
    );
};
