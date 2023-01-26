import React from 'react';
import { useAuthUser } from '../providers/AuthUser';
import { User } from '../types';

interface IProps {
    userData?: User;
    isSummary?: boolean;
}

export const UserProfileComponent: React.FC<IProps> = ({ userData, isSummary }): JSX.Element => {
    const { authUser } = useAuthUser();
    if (isSummary) {
        return (
            <>
                {userData ? (
                    <div className="w-full text-sm text-gray-800 flex pb-5 items-center content-center">
                        <img
                            className="h-14 w-14 object-cover rounded-full"
                            src={userData.profilePic}
                            alt="User Profile"
                        />
                        <div className=" ml-2 mt-1">
                            <p className="text-md font-semibold -mb-1">{userData.name}</p>
                            <p className="pb-2">{userData.username}</p>
                        </div>
                    </div>
                ) : (
                    <div>Loading ...</div>
                )}
            </>
        );
    }

    return (
        <>
            {authUser ? (
                <div className="w-full text-md  text-gray-800 sm:p-3 md:p-6 p-3 ">
                    <div className="sm:flex-col flex w-full">
                        <img
                            className="w-16 h-16 sm:h-40 sm:w-40 object-cover rounded-lg"
                            src={authUser.profilePic}
                            alt="User Profile"
                        />
                        <div className="pl-3 sm:pl-1 ">
                            <p className="text-lg font-medium sm:pt-5 pt-1 :sm-mb-1 -mb-2">{authUser.name}</p>
                            <p className="pb-2 font-normal">{authUser.username}</p>
                        </div>
                    </div>

                    <p className="font-normal leading-5  ">{authUser.bio}</p>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
};
