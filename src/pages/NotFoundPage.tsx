import { useNavigate } from 'react-router-dom';
import { XCircleIcon } from '@heroicons/react/24/outline';

export const NotFoundPage: React.FC = (): JSX.Element => {
    const navigate = useNavigate();
    return (
        <section className="flex items-center h-full sm:p-16 ">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                <XCircleIcon className="text-gray-500 w-40 -mb-5" />
                <p className="text-3xl text-gray-600">Ops, essa página não existe!</p>
                <button
                    onClick={() => {
                        navigate('home');
                    }}
                    className="px-8 py-3 font-semibold rounded bg-green-500 text-white hover:bg-green-600"
                >
                    Voltar para a Home
                </button>
            </div>
        </section>
    );
};
