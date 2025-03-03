

export default function Carousel({ slides }) {


    return (<div className="overflow-hidden group relative">



        <div className="flex group-hover:brightness-50">

            {slides.map((s) => {
                return <img src={s} alt="" />
            })}

        </div>

<div className="absolute top-0 h-full w-full flex justify-between items-center">


<button className="p-4 ml-2 group-hover:bg-gray-300 rounded-full">
<img src="left.svg" alt="" />
        </button>



        <button className="p-4 mr-2 group-hover:bg-gray-300 rounded-full">
<img src="right.svg" alt="" />
        </button>


        



        </div>

    </div>
    );

}