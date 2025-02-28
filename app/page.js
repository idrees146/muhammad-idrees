"use client"
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter'
import { useState } from "react";








export default function Home() {


  const [active, setActive] = useState("Development")
  const activeButton = (button) => {

    setActive(button)

  }









  return (
    <>







      <div className="main bg-gray-100 pt-28 md:pb-20  flex flex-col lg:flex-row justify-center lg:gap-28 px-6 lg:px-0">
        <div className="left mt-10 lg:mt-24 text-center lg:text-left">
          <h1 className="text-3xl font-bold text-gray-500">I am Idrees</h1>

            <span className="text-gray-700 text-4xl md:text-5xl font-bold  leading-tight my-4 max-w-md mx-auto lg:mx-0">The Coolest Web </span>
       
            {''}
<h2 className="text-pink-700 text-4xl md:text-5xl font-bold  leading-tight my-4 max-w-md mx-auto lg:mx-0"> 
            <Typewriter

              words={['Designer', 'Developer']}
              loop={5} // Loop 5 times, set to 0 for infinite
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000} // Delay between words

            />
            </h2>
        
          <p className="text-gray-700 text-lg  md:text-lg leading-8 max-w-md mx-auto lg:mx-0">
            A passionate and Enthusiastic Web Developer and Designer who designs and develops stunning web applications using <strong>MERN</strong> and <strong>NEXT.js.</strong>
          </p>

          <div className="text-gray-700 text-md hidden md:flex items-center gap-4  md:text-md leading-8 mt-6 max-w-md mx-auto lg:mx-0">
            
           
           <img width={10} src = "dot.svg"/>
           <span>Available for Jobs and Internships </span>
      

             </div>



          <div className="buttons mb-10 mt-4 flex flex-col lg:flex-row gap-5 lg:gap-10 items-center justify-center lg:justify-start">
         <a href="/resume.pdf"  download="Muhammad_Idrees_Resume.pdf">    <button className="bg-pink-600 hover:bg-pink-500 cursor-pointer text-white rounded-md py-3 px-6 flex items-center gap-4">
              Resume <span><img src="download.svg" className="w-6" alt="Download" /></span>
            </button>

            </a>

            <div className="icons flex gap-4 items-center">
             <a href="https://www.facebook.com/muhammadidreesss" target = "blank">  <img className="hover:scale-125 w-10 transition cursor-pointer" src="face.svg" alt="Facebook" /></a>
             <a href="https://github.com/idrees146" target = "blank" >  <img className="hover:scale-125 w-10 transition cursor-pointer" src="git.svg" alt="GitHub" /></a>
             <a href="https://www.instagram.com/muhammadidrees_khan1?igsh=MTNiZnQ2bndsNnZveA==" target = "blank">  <img className="hover:scale-125 w-10 transition cursor-pointer" src="insta.svg" alt="Instagram" /></a>
             <a href="https://www.linkedin.com/in/muhammad-idrees-23678629b/" target = "blank">  <img className="hover:scale-125 w-10 transition cursor-pointer" src="linkedin.svg" alt="LinkedIn" /></a>
            </div>
          </div>
        </div>


        <motion.div


          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}

        >

          <div className="right md:border-2 md:rotate-6 hover:rotate-0 transition cursor-pointer md:border-indigo-900 hover:shadow-lg hover:shadow-pink-500 mb-6 rounded-3xl mt-10 lg:mt-0 flex justify-center">
            <img src="me.png" alt="Idrees" className="max-w-xs md:max-w-md" />
          </div>

        </motion.div>
      </div>

      <div className="skills mt-28 text-gray-700 text-center px-6 lg:px-0">
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-pink-500">Skills</span>
        </h2>


        <motion.div

          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >


          <p className="my-4 max-w-lg mx-auto text-lg md:text-lg">
            We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
          </p>

        </motion.div>
        <div className="box flex md:w-3/4 md:mx-auto flex-wrap justify-center gap-6 lg:gap-7">
          {[
            { name: "NEXT JS", img: "next.png" },
            { name: "React JS", img: "reactjs.svg" },
            { name: "Figma", img: "figma.svg" },
            { name: "Illustrator", img: "illustrator.svg" },
            { name: "Mongo Db", img: "mongo.svg" },
            { name: "Socket io", img: "socket-io.svg" },
            { name: "Node js", img: "node.svg" },
          ].map((skill, idx) => (
            <motion.div
              key={idx} // Move the key here
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="box1 shadow-lg rounded-lg hover:shadow-2xl cursor-pointer hover:scale-110 transition flex flex-col items-center p-6 w-36 md:w-44">
                <img src={skill.img} className="w-14 h-14 rounded-full" alt={skill.name} />
                <p className="font-bold mt-4 text-lg md:text-xl">{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </div>


      </div>

      <div id = "story" className="story bg-gray-100 flex flex-col-reverse lg:flex-row gap-10 lg:gap-28 mt-36 justify-center px-6 lg:px-0">
        <div className="left flex justify-center lg:justify-start">
          <img src="idrees.png" className="w-64 h-64 md:w-96 md:h-96 rounded-full" alt="Idrees" />
        </div>

        <div className="right lg:w-1/2 text-center lg:text-left">



          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mt-10 lg:mt-20">
            A Little of <span className="text-pink-600">My Story</span>

            <Typewriter

              words={[]}
              loop={5} // Loop 5 times, set to 0 for infinite
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000} // Delay between words

            />
          </h2>


          <motion.div

            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >


            <p className="my-8 md:text-lg text-md leading-8">
              This is Muhammad Idrees, a passionate Web Developer, always busy creating fun and interesting projects. My story begins the day I started studying Software Engineering at COMSATS University Islamabad.
            </p>

          </motion.div>


          <motion.div

            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="my-8 md:text-lg  text-md leading-8">
              That day was a decisive one to pave the way for my aspirations, envisioning where I want to see myself in the next 10 years. Web Development is something that truly immerses me; building attractive layouts and adding functionalities is more than fun for me.
            </p>


          </motion.div>
        </div>
      </div>







      <div  className="services mt-36 px-6 lg:px-0">
        <h2 id="services" className="text-3xl md:text-4xl font-bold text-gray-700 text-center">
          My Quality <span className="text-pink-600">Services</span>
        </h2>

        <div className="boxes my-10 flex flex-wrap justify-center gap-6">
          {[
            {
              title: "Web Designing",
              img: "design.svg",
              desc: "I Design Super Amazing Websites and Web Applications in Figma",
            },
            {
              title: "Web Development",
              img: "develop.svg",
              desc: "With hands-on experience in MERN and NEXT.js, I develop cool and futuristic web applications",
            },
            {
              title: "SEO",
              img: "SEO.svg",
              desc: "I bring your business online and make it rank #1 through my SEO strategies.",
            },
          ].map((service, idx) => (


            <motion.div

              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              key={idx}

            >
              <div

                className="box1 hover:bg-pink-600 hover:text-white transition cursor-pointer shadow-xl rounded-lg p-6 flex flex-col items-center w-80"
              >
                <img className="p-5 bg-white rounded-full border" src={service.img} alt={service.title} />
                <h2 className="text-2xl font-bold my-4">{service.title}</h2>
                <p className="text-center leading-8">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>



      {/* Programing Languages 
 */}



      <div className="skills mt-28 text-gray-700 text-center px-6 lg:px-0">
        <h2 className="text-3xl md:text-4xl font-bold"> Languages That I <span className="text-pink-500">Speak</span>
        </h2>
        <p className="my-4 max-w-lg mx-auto text-lg ">
          I have expertise in the following programing Languages.
        </p>

        <div className="box flex md:w-3/4 md:mx-auto flex-wrap justify-center gap-6 lg:gap-7">
          {[
            { name: "C ++", img: "c.svg" },
            { name: "Javascript", img: "js.svg" },
            { name: "Java", img: "java.svg" },
            { name: "TypeScript", img: "ts.svg" },
            { name: "Python", img: "py.svg" },


          ].map((skill, idx) => (





            <div
              key={idx}
              className="box1 shadow-lg rounded-lg hover:shadow-2xl cursor-pointer hover:scale-110 transition flex flex-col items-center p-6 w-36 md:w-44"
            >
              <img src={skill.img} className="w-14 h-14 rounded-full" alt={skill.name} />
              <p className="font-bold mt-4 text-lg md:text-xl">{skill.name}</p>
            </div>


          ))}
        </div>
      </div>




      <div id="Project" className="projects mt-36 mb-96 md:mb-10 px-6 lg:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center">
          My Recent <span className="text-pink-600">Work</span>
          <Typewriter

            words={[]}
            loop={5} // Loop 5 times, set to 0 for infinite
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000} // Delay between words

          />
        </h2>
        <p className="text-center my-4 text-lg  max-w-lg mx-auto">
          Here are some of the most recent projects that I have completed in different domains.
        </p>




        <div className="options my-10">
          <ul className="flex items-center  md:w-[400px] rounded-xl mx-auto p-2 bg-gray-200 justify-center gap-7">


            <button onClick={() => activeButton("Development")} className={`md:p-3 p-2 ${active === "Development" ? 'bg-pink-600 text-white' : 'text-black'} transition-all duration-300 rounded-xl`} >Development</button>
            <button onClick={() => activeButton("Designing")} className={`md:p-3 p-2 ${active === "Designing" ? 'bg-pink-600 text-white' : 'text-black'} transition-all duration-300 rounded-xl`}>Designing</button>
            <button onClick={() => activeButton("SEO")} className={`md:p-3 p-2 ${active === "SEO" ? 'bg-pink-600 text-white' : 'text-black'} transition-all duration-300 rounded-xl`} >SEO</button>
          </ul>
        </div>


        <div className="flex pr mt-[370px] md:mt-4 justify-center">
          <div className={`flex justify-center  md:w-[1000px] md:h-[560px] rounded-xl items-center  gap-4`}>
            <div className={`box1    ${active === "Development" ? 'block' : 'hidden'}  p-4 absolute w-full  md:w-[1000px] md:h-[560px]    rounded-xl`}>

              <div className="md:flex   md:h-[50%] mb-4 md:justify-center">
                <div className="box w-[85vw] mx-auto relative mb-6 md:mb-2 h-[200px] md:h-full rounded-xl group duration-300 transition-all  md:mx-4 border border-black  md:w-[45%]  ">

                  <img src="invenexus.png" className="group-hover:brightness-[20%] object-cover rounded-xl h-full transition-all duration-300 w-full " alt="" />

                  <div className="title absolute inset-x-0 top-4 md:top-10 flex flex-col gap-4 items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-3xl font-bold">InveNexus</h3>
                    <p className="text-xl hidden md:block">An Inventory Management System</p>


                    <div className="buttons absolute inset-x-0 top-24 md:top-32 flex justify-center items-center gap-6 space-y-3 opacity-0 group-hover:opacity-100 duration-300 transition-all">


                      <button className="hover:scale-110 transition duration-300 p-2  rounded-full w-14 bg-gray-200"><img src="linki.svg" className=" hover:rotate-45 transition-all duration-300" alt="" /></button>
                      <button className="hover:scale-110 transition duration-300 p-2 rounded-full w-14 bg-gray-200"><img src="guthib.svg" alt="" /></button>
                      <button className="hover:scale-110 transition duration-300 p-2 rounded-full w-14 bg-gray-200"><img src="doc.svg" alt="" /></button>


                    </div>
                  </div>

                </div>
                <div className="box relative w-[85vw] mx-auto transition-all h-[200px] md:h-full duration-300 group rounded-xl border border-black  md:w-[45%]  ">


                  <img src="hire.png" className="group-hover:brightness-[20%] object-fill rounded-xl h-full transition-all duration-300 w-full " alt="" />

                  <div className="title absolute inset-x-0 top-4 md:top-10 flex flex-col gap-4 items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-3xl font-bold">HireTask</h3>
                    <p className="text-xl hidden md:block">A simple Job Board</p>


                    <div className="buttons absolute inset-x-0 top-24 md:top-32 flex justify-center items-center gap-6 space-y-3 opacity-0 group-hover:opacity-100 duration-300 transition-all">


                      <button className="hover:scale-110 transition duration-300 p-2  rounded-full w-14 bg-gray-200"><img src="linki.svg" className=" hover:rotate-45 transition-all duration-300" alt="" /></button>
                      <button className="hover:scale-110 transition duration-300 p-2 rounded-full w-14 bg-gray-200"><img src="guthib.svg" alt="" /></button>
                      <button className="hover:scale-110 transition duration-300 p-2 rounded-full w-14 bg-gray-200"><img src="doc.svg" alt="" /></button>


                    </div>
                  </div>




                </div>
              </div>

              <div className="md:flex  md:h-[50%] mb-4 justify-center">

                <div className="box w-[85vw] mx-auto h-[200px] md:h-full relative md:mx-4 transition-all duration-300 group rounded-xl border border-black  md:w-[45%]  ">



                  <img src="generous.png" className="group-hover:brightness-[20%] object-fill rounded-xl h-full transition-all duration-300 w-full " alt="" />

                  <div className="title absolute inset-x-0 top-4 md:top-10 flex flex-col gap-4 items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-3xl font-bold">Mr. Generous</h3>
                    <p className="text-xl hidden md:block">Now you can Donate to Your NGO's</p>


                    <div className="buttons absolute inset-x-0 top-24 md:top-32 flex justify-center items-center gap-6 space-y-3 opacity-0 group-hover:opacity-100 duration-300 transition-all">


                      <button className="hover:scale-110 transition duration-300 p-2  rounded-full w-14 bg-gray-200"><img src="linki.svg" className=" hover:rotate-45 transition-all duration-300" alt="" /></button>
                      <button className="hover:scale-110 transition duration-300 p-2 rounded-full w-14 bg-gray-200"><img src="guthib.svg" alt="" /></button>
                      <button className="hover:scale-110 transition duration-300 p-2 rounded-full w-14 bg-gray-200"><img src="doc.svg" alt="" /></button>


                    </div>
                  </div>



                </div>
             

              </div>

            </div>
            <div className={`box2  ${active === "Designing" ? 'block' : 'hidden'}   p-4 absolute  md:w-[1000px] md:h-[560px]     rounded-xl`}>











            </div>
            <div className={`box3  ${active === "SEO" ? 'block' : 'hidden'}  p-4 absolute  md:w-[1000px] md:h-[560px]     rounded-xl`}>












            </div>
          </div>
        </div>

      </div>



      <footer className="h-96  bg-slate-900">

<div className="contact pt-24  pl-10 md:pl-20">

<div className="flex cursor-pointer group gap-4 my-6 text-white items-center">

<img src="whatsapp.svg" width={35} alt="" />
<p className="group-hover:underline">+923179619344</p>

</div>

<div className="flex cursor-pointer group gap-4 my-6 text-white items-center">

<img src="mail.svg" width={35} alt="" />
<p className="group-hover:underline" >muhammadidr1122@gmail.com</p>

</div>





<div className="flex    cursor-pointer group gap-4 my-6 text-white items-center">

<img src="location.svg" width={35} alt="" />
<p className="group-hover:underline">Lane 10, Hostel city, Park Road, Islamabad, Pakistan</p>

</div>

</div>


      </footer>
    </>
  );


}


