// import banner from '../assets/Banner.jpg';
import people from "../assets/banner/person.png";
import circle from "../assets/banner/dotteted-circle.png";
import globe from "../assets/banner/Globe_1_.png";
import services from "../assets/data/services.json";
import projects from "../assets/data/projects.json";
import coustomsoftwere from "../assets/data/coustomsoftwere.json";
import resons from "../assets/data/resons.json";
import { FaExternalLinkAlt } from "react-icons/fa";

const Home = () => {
  console.log(projects);
  return (
    <div className="">
      {/* Hero section */}

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

      {/* Our Services */}
      <section id="services" className="bg-1 mt-16">
        <div className="h-auto py-4">
          <div className="text-center my-10">
            <h1 className="text-4xl font-bold ">OUR SERVICES</h1>
            <p className="text-justify tracking-normal text-black font-semibold leading-7 m-12">
              Nobo IT is one of the best Software Companies in Bangladesh,
              located in Mirpur, Dhaka. We have highly Dedicated & Innovative
              team members who are eager to help you in running your business.
              You can run business smoothly by using our Software & Application.
              We have expertise in Web application, Website development, Android
              applications, IOS applications, Graphics Design, SEO & Internet
              Marketing. We are here for you. If you need any kind of help,
              please dont hesitate to meet our team.
            </p>
          </div>
          <div className="m-12">
            <div>
              <div className="grid gap-7 grid-cols-3">
                {services.map((data) => (
                  <div
                    className="text-center bg-[#ccc] hover:bg-[#d61e309c] pt-4 pb-[80px] relative"
                    key={data.id}
                  >
                    <div className="m-4">
                      <img
                        src={data.icon}
                        alt="Globe"
                        className="h-16 w-16 m-auto"
                      />
                      <h1 className="text-2xl font-bold my-2">{data.title}</h1>
                      <div className="divider divider-success p-2 m-2"></div>
                      <p className="text-justify">{data.Descriptions}</p>
                      <button
                        className="btn btn-active my-6 btn-primary absolute bottom-0 left-[28%]"
                        href={data.link}
                      >
                        Read More........
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
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
              Our Custom Softwares| SoftyCraft
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
                    className=" bg-[#ccc] hover:bg-[#d61e309c] h-[300px] shadow-lg relative"
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
              <br />
              SoftyCraft
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
                    className=" bg-[#ccc] hover:bg-[#d61e309c] h-[300px] shadow-lg relative"
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
