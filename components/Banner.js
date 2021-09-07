import Image from "next/image"

function Banner() {
    return (
        <div className=" relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] ">
            <Image 
            src="https://links.papareact.com/0fm"
            layout="fill" objectFit="cover"
            />
            <div className=" absolute top-1/2 w-full text-center ">
                <p className="text-sm sm:text-lg">Not sure where to go? Perfect</p>
                <button className="bg-white text-purple-500 font-bold border-2 rounded-full px-10 py-4 my-3 shadow-md hover:shadow-xl
                active:scale-90 transition duration-150
                ">
                    I'm Flexible
                </button>
            </div>
        </div>
    )
}

export default Banner
