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

    return (<div className="overflow-hidden group relative">



        <div className={`flex  group-hover:brightness-50 transition ease-out duration-300`}

            style={{
                transform: `translateX(-${current * 100}%)`
            }}

        >

            {slides.map((s, index) => {


                return <div key={index} className="min-w-full bg-gray-200 rounded-xl flex flex-col items-center text-center p-5">
                    <img src={s.image} alt={s.name} className="w-56 h-52 rounded-full  mb-6" />
                    <h3 className="text-lg font-bold mb-2 mt-4">{s.name}</h3>
                    <p className="text-gray-600 mb-10">{s.message}</p>
                </div>



            })}

        </div>

        <div className="absolute top-0 h-full w-full flex justify-between items-center">


            <button onClick={previousSlide} className="p-2 ml-2 bg-gray-300 rounded-full">
                <img className="w-5" src="left.svg" alt="" />
            </button>



            <button onClick={nextSlide} className="p-2 mr-2 bg-gray-300 rounded-full">
                <img className="w-5" src="right.svg" alt="" />
            </button>

        </div>


        <div className="absolute bottom-0 py-5 flex justify-center gap-3 w-full">

            {slides.map((s, i) => {

                return <div onClick={() => {
                    setCurrent(i)
                }} key={"Circle" + i}

                    className={`cursor-pointer rounded-full w-3 h-3  ${i == current ? "bg-white" : "bg-gray-500"}`}>




                </div>
            })}









        </div>

    </div>
    );

}