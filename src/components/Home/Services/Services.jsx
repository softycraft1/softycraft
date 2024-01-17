import services from "../../../assets/data/services.json";
import Service from "./Service";
import ServicesInfo from "./ServicesInfo";

const Services = () => {
    console.log("Services", services)
    return (
        <section id="services" className="bg-1 mt-16">
            <div className="h-auto py-4">
                {/* Sercies Information */}
                <ServicesInfo />

                {/* Services Cards */}
                <div className="m-12">
                    <div>
                        <div className="grid gap-7 grid-cols-3">
                            {
                                services && <div
                                    className="text-center bg-[#ccc] hover:bg-[#d61e309c] pt-4 pb-[80px] relative"
                                >
                                    {services.map((service) => (
                                        <Service key={service.id} service={service} />
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