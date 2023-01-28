import { PostsComponent, UserProfileComponent } from '../components';

export function HomePage() {
    return (
        <div className="flex w-full flex-col sm:flex-row text-sm md:text-base">
            <div
                className="w-full shadow-lg sm:w-5/12 lg:w-1/4 mb-5
                rounded-lg sm:mb-0 bg-gradient-to-tl 
                to-slate-100 from-indigo-50 border border-gray-200"
            >
                <UserProfileComponent />
            </div>
            <div className="flex flex-col items-center justfy-center w-full h-full sm:overflow-y-scroll p-0 lg:px-16">
                <PostsComponent />
            </div>
        </div>
    );
}
