import Me from "../assets/images/Me.png";

export const SlideHome = () => {
    return (
        <div className="flex flex-row w-full h-screen">
            <div className="flex flex-1 justify-center items-center">
                <div className="container w-9/12 justify-between">
                    <div className="intro justify-between mt-3">
                        <p className="p-2">Hello</p>
                        <h1 className="p-2">Im Muhamad Ramadhan</h1>
                        <p className="p-2 text-justify">4th semester Information Systems student who has a strong passion for backend development. <br /> Mastering technologies such as Nodejs, Laravel, and Python, and experience in handling bug reports and managing projects.</p>
                    </div>
                    <button className="mt-2 ml-2 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            More About Me
                        </span>
                    </button>
                </div>
            </div>
            <div className="flex-1">
                <img src={Me} alt="" />
            </div>
        </div>
    )
}
