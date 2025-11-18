export const Spinner = () => {
    return (
        <div
            // className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-[#0a0a0acc] text-white z-[9999] backdrop-blur-sm"
            className=" flex flex-col items-center justify-center "
        >
            {/* Spinner Circle */}
            <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-6"></div>

            {/* Animated Text */}
            <p className="text-lg tracking-wider text-gray-300 animate-pulse">
                Loading<span className="text-emerald-400">...</span>
            </p>

            {/* Subtext */}
            <small className="text-gray-500 mt-2">
                Please wait while we prepare things for you
            </small>
        </div>
    );
};
