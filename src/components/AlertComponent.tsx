import { XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useAppState } from '../providers/AppState';
import { AppStateEnum } from '../types';

interface IProps {
    type?: 'alert' | 'success' | 'error' | 'info';
    children: string;
}

export const AlertComponent: React.FC<IProps> = ({ children, type }): JSX.Element => {
    const [style, setStyle] = useState({ bg: 'bg-gray-200', text: 'text-gray-800', hover: 'hover:bg-gray-300' });
    const [show, setShow] = useState(true);
    const { setAppState } = useAppState();

    useEffect((): void => {
        switch (type) {
            case 'alert':
                setStyle({ bg: 'bg-yellow-200', text: 'text-yellow-800', hover: 'hover:bg-yellow-300' });
                break;
            case 'success':
                setStyle({ bg: 'bg-green-200', text: 'text-green-800', hover: 'hover:bg-green-300' });
                break;
            case 'error':
                setStyle({ bg: 'bg-red-200', text: 'text-red-800', hover: 'hover:bg-red-300' });
                break;
            case 'info':
                setStyle({ bg: 'bg-blue-200', text: 'text-blue-800', hover: 'hover:bg-blue-300' });
        }

        setTimeout(() => {
            setShow(false);
            setAppState(AppStateEnum.INITIAL);
        }, 3000);
    }, [type, setAppState]);
    return (
        <div
            className={`flex p-4 mb-4 ${style.text} rounded-lg ${
                style.bg
            } absolute top-5 left-1/2 transform -translate-x-1/2 ${show ? '' : 'hidden'}`}
            role="alert"
        >
            <span className="sr-only">Info</span>
            <div className="ml-3 text-sm font-medium">{children}</div>
            <button
                type="button"
                className={`ml-auto -mx-1.5 -my-1.5  ${style.text} rounded-lg p-1.5 ${style.hover} inline-flex h-8 w-8 ml-4`}
                data-dismiss-target="#alert-1"
                aria-label="Close"
                onClick={(): void => {
                    setShow(false);
                    setAppState(AppStateEnum.INITIAL);
                }}
            >
                <span className="sr-only">Close</span>
                <XMarkIcon />
            </button>
        </div>
    );
};
