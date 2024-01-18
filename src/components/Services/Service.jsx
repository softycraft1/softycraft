
const Service = ( {service} ) => {
    return (
        <div className="m-4 text-center bg-[#ccc] hover:bg-[#d61e309c] p-6 pb-[100px] relative">
            <img
                src={service.icon}
                alt="Globe"
                className="h-16 w-16 m-auto"
            />
            <h1 className="text-2xl font-bold my-2">{service.title}</h1>
            <div className="divider divider-success p-2 m-2"></div>
            <p className="text-justify">{service.Descriptions}</p>
            <button
                className="btn btn-active my-6 btn-primary absolute bottom-0 left-[28%]"
                href={service.link}
            >
                Read More........
            </button>
        </div>
    )
}

export default Service