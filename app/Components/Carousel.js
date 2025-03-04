import { useState } from "react";
import { useEffect } from "react";

export default function Carousel({ slides }) {


    const [current, setCurrent] = useState(0)


    useEffect(() => {
        const interval = setTimeout(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearTimeout(interval);
    }, [current, slides.length]); // Depend on `current` and `s



    let previousSlide = () => {



        if (current === 0) {
            setCurrent(slides.length - 1)


        }

        else {
            setCurrent(current - 1)
        }


    }

    let nextSlide = () => {

        if (current === slides.length - 1) {
            setCurrent(0)


        }

        else {
            setCurrent(current + 1)
        }


    }

    return (<div className="overflow-hidden relative">



        <div className={`flex   transition ease-out duration-300`}

            style={{
                transform: `translateX(-${current * 100}%)`
            }}

        >

            {slides.map((s, index) => {


                return <div key={index} className="min-w-full md:h-96 border border-indigo-800 rounded-xl flex flex-col md:flex-row justify-center md:gap-8 items-center text-center p-5">


                    <img src={s.image} alt={s.name} className="md:w-56  md:h-72 w-40 h-52 rounded-lg pt-2  px-2 bg-indigo-200 md:mb-6" />

                    <div className="md:w-1/2">


                        <img className="md:w-10 w-5 md:my-7" src="comma.svg" alt="" />



                        <p className="text-gray-600  my-2">{s.message}</p>
                        <h3 className="text-lg text-blue-900 font-bold mb-6 md:mb-2 mt-4 ">{s.name}</h3>


                    </div>


                </div>



            })}

        </div>

        <div className="absolute top-0 h-full w-full flex justify-between items-center">


            <button onClick={previousSlide} className="p-2 ml-2 hidden md:block bg-gray-300 rounded-full">
                <img className="w-5" src="left.svg" alt="" />
            </button>



            <button onClick={nextSlide} className="p-2 mr-2 hidden md:block bg-gray-300 rounded-full">
                <img className="w-5" src="right.svg" alt="" />
            </button>

        </div>


        <div className="absolute bottom-0 py-5 flex justify-center gap-3 w-full">

            {slides.map((s, i) => {

                return <div onClick={() => {
                    setCurrent(i)
                }} key={"Circle" + i}

                    className={`cursor-pointer rounded-full w-3 h-3  ${i == current ? "bg-indigo-600" : "bg-indigo-400"}`}>




                </div>
            })}









        </div>

    </div>
    );

}