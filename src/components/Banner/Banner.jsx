import people from "../../assets/banner/person.png";
import circle from "../../assets/banner/dotteted-circle.png";
import globe from "../../assets/banner/Globe_1_.png";

const Banner = () => {
    return (
        <section id="home" className="bg-1">
            {/* <img className='opacity-25' src={banner} alt="" /> */}
            <div className="flex flex-row h-[100vh]">
                <div className="p-10 basis-[50%]">
                    <div className="flex flex-col h-[85%] items-start justify-between my-5">
                        <div>
                            <h1 className="text-4xl text-[#0685FF] leading-[50px] font-bold ">
                                Scalable and Secured Platform for Web Design & Development
                            </h1>
                        </div>
                        <div className="ms-[20px]">
                            <ul className="list-disc text-xl text-black">
                                <li>Client Management</li>
                                <li className="my-1">Web Based Interface</li>
                                <li>Campaign Management</li>
                            </ul>
                        </div>
                        <div>
                            <button className="btn btn-outline text-xl font-normal w-[250px]">
                                Get from Us
                            </button>
                        </div>
                    </div>
                </div>

                <div className="p-10 basis-[50%]">
                    <div className="">
                        <div className="relative">
                            <img
                                className="absolute top-0 right-[8px] z-30 h-[550px]"
                                src={people}
                                alt=""
                            />
                            <img
                                className="absolute top-[92px] right-[95px] z-20 circle-spin"
                                src={circle}
                                alt=""
                            />
                            <img
                                className="absolute top-[120px] right-[120px] overflow-clip z-10 glob-spin"
                                src={globe}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner