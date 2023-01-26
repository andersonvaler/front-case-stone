import { PostsComponent, UserProfileComponent } from './components';

function App() {
    return (
        <div className="flex w-full flex-col sm:flex-row">
            <div
                className="w-full shadow-lg sm:w-1/4 mb-5
                rounded-lg sm:mb-0 bg-gradient-to-tl 
                to-slate-100 from-indigo-50 border border-gray-200"
            >
                <UserProfileComponent />
            </div>
            <div className="w-full h-screen overflow-scroll p-0 sm:w-3/4 sm:px-16">
                <PostsComponent />
            </div>
        </div>
    );
}

export default App;
