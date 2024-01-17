// import banner from '../assets/Banner.jpg';
import projects from "../assets/data/projects.json";
import coustomsoftwere from "../assets/data/coustomsoftwere.json";
import resons from "../assets/data/resons.json";
import { FaExternalLinkAlt } from "react-icons/fa";
import Services from "../components/Home/Services/Services";
import Banner from "../components/Home/Banner/Banner";

const Home = () => {
    console.log(projects);
    return (
        <div className="">
            {/* Hero section */}
            <Banner />

            {/* Our Services */}
            <Services />

            {/* Project */}
            <section id="projects" className="bg-1 mt-16">
                <div className="h-auto py-4">
                    <div className="text-center my-10">
                        <h1 className="text-4xl font-bold ">Project Works | SoftyCraft</h1>
                        <p className=" tracking-normal text-black font-semibold leading-7 my-2">
                            SoftyCraft has completed so many projects around the country.
                            Please have a look -
                        </p>
                    </div>
                    <div className="m-12">
                        <div>
                            <div className="grid gap-7 grid-cols-3">
                                {projects.map((project) => (
                                    <div
                                        className=" bg-[#ccc] hover:bg-[#d61e309c] h-[300px] shadow-lg relative"
                                        key={project.id}
                                    >
                                        <div className="m-4">
                                            <img src={project.picture} alt="Globe" className="" />
                                            <div className="divider divider-success p-2 m-2"></div>
                                            <h1 className="text-xl font-bold my-2">
                                                {project.title}
                                            </h1>
                                            <p className="text-justify">
                                                <strong>Type:</strong> {project.project_type} /{" "}
                                                {project.year}
                                            </p>
                                            <button
                                                className="text-sky-700 btn-primary absolute bottom-5 right-5"
                                                href={project.project_link}
                                            >
                                                <FaExternalLinkAlt />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* coustom_softwere */}
            <section id="coustom_softwere" className="bg-1 mt-16">
                <div className="h-auto py-4">
                    <div className="text-center my-10">
                        <h1 className="text-4xl font-bold ">
                            Our Custom Softwares | SoftyCraft
                        </h1>
                        <p className=" tracking-normal text-black font-semibold leading-7 my-2">
                            We are always with our clients. We belive in long term
                            relationship with our most valuable clients by providing our IT
                            Service and Support
                        </p>
                    </div>
                    <div className="m-12">
                        <div>
                            <div className="grid gap-7 grid-cols-4">
                                {coustomsoftwere.map((soft) => (
                                    <div
                                        className=" bg-[#ccc] hover:bg-[#d61e309c] py-2 shadow-lg relative"
                                        key={soft.id}
                                    >
                                        <div className="m-4">
                                            <img
                                                src={soft.icon}
                                                alt="Globe"
                                                className="h-16 w-16 m-auto"
                                            />
                                            <div className="divider divider-success p-2 m-2"></div>
                                            <h1 className="text-xl font-bold my-2">{soft.title}</h1>
                                            <p className="">{soft.Descriptions}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Reasons */}
            <section id="coustom_softwere" className="bg-1 mt-16">
                <div className="h-auto py-4">
                    <div className="text-center my-10">
                        <h1 className="text-4xl font-bold ">
                            Why Choose Us?
                        </h1>
                        <p className=" tracking-normal text-black font-semibold leading-7 my-2">
                            We are always with our clients. We belive in long term
                            relationship with our most valuable clients by providing our IT
                            Service and Support
                        </p>
                    </div>
                    <div className="m-12">
                        <div>
                            <div className="grid gap-7 grid-cols-3">
                                {resons.map((reson) => (
                                    <div
                                        className=" bg-[#ccc] hover:bg-[#d61e309c] py-4 shadow-lg relative"
                                        key={reson.id}
                                    >
                                        <div className="m-4">
                                            <img
                                                src={reson.icon}
                                                alt="Globe"
                                                className="h-16 w-16 m-auto"
                                            />
                                            <h1 className="text-xl text-center font-bold my-2">
                                                {reson.title}
                                            </h1>
                                            <div className="divider divider-success p-2 m-2"></div>
                                            <p className="">{reson.Descriptions}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
