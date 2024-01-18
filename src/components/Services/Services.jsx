import services from "../../assets/data/services.json";
import Service from "./Service";
import ServicesInfo from "./ServicesInfo";

const Services = () => {
    console.log("Services", services)
    return (
        <section id="services" className="bg-1 mt-16">
            <div className="h-auto py-4">
                {/* Services Information */}
                <ServicesInfo />

                {/* Services Cards */}
                <div className="m-1">
                    <div>
                        <div >
                            {
                                services && <div
                                    className="grid grid-cols-3 "
                                >
                                    {services.map((service) => (
                                        <Service className="flex flex-row gap-10" key={service.id} service={service} />
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Services