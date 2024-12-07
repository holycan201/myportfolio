import Me2 from "../assets/images/Me2.png";

export const SlideAbout = () => {
    return (
        <>
            <div className="flex justify-between">
                <div className="flex">
                    <img src={Me2} alt="" className="p-3" />
                    <div className="flex-row p-3">
                        <h2>About Me</h2>
                        <div className="flex">
                            <div>
                                <p>First Name</p>
                                <p>Last Name</p>
                                <p>Age</p>
                                <p>Address</p>
                                <p>Nationality</p>
                                <p>Language</p>
                            </div>
                            <div>
                                <p>: Muhamad</p>
                                <p>: Ramadhan</p>
                                <p>: 19 y'o</p>
                                <p>: Bekasi, Jawa Barat</p>
                                <p>: Indonesia</p>
                                <p>: Indonesia, English</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="h-80 w-80">
                        <h3>
                            6+
                        </h3>
                        <p>Month Experience</p>
                    </div>
                    <div className="h-80 w-80">
                        test
                    </div>
                </div>
            </div>
        </>
    )
}
