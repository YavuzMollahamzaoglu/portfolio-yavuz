import React from "react";
import "./App.css";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faLetterboxd,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "flowbite";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      user_name: form.current["user_name"].value.trim(),
      user_email: form.current["user_email"].value.trim(),
      subject: form.current["subject"].value.trim(),
      message: form.current["message"].value.trim(),
    };

    if (
      !formData.user_name ||
      !formData.user_email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill all the blanks");
      return;
    }

    emailjs
      .sendForm(
        "service_pt9556p",
        "template_r6v70ou",
        form.current,
        "-dmN0MDvmqMBhT6CW"
      )
      .then(
        () => {
          alert("Message has been sent successfully");
          form.current.reset();
        },
        (error) => {
          console.error("Message sending failed:", error.text);
          alert("Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
        }
      );
  };
  return (
    <div className="App scroll-smooth">
      <section className="" id="myself">
        <nav className="dark:bg-gray-900 text-white  fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 flex justify-center items-center text-center">
          <div className="w-full max-w-screen-xl flex flex-row items-center justify-center space-x-4 lg:space-x-12 p-4">
            <a
              href="#"
              className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 z-50 text-sm md:text-base lg:text-lg font-medium"
              aria-current="page"
            >
              Who am I
            </a>
            <a
              href="#experience"
              className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 text-sm md:text-base lg:text-lg font-medium"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 text-sm md:text-base lg:text-lg font-medium"
            >
              My Projects
            </a>
            <a
              href="#certificate"
              className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 text-sm md:text-base lg:text-lg font-medium"
            >
              Certificates
            </a>
            <a
              href="#contact-me"
              className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 text-sm md:text-base lg:text-lg font-medium"
            >
              Contact Me
            </a>
          </div>
        </nav>
        <div className="lg:pt-20 lg:grid lg:grid-cols-2 gap-4 ">
          <div className="lg:col-span-1 flex pt-20 lg:pt-0 justify-center items-center relative lg:pb-20  ">
            <div className="info-card flex flex-col gap-3 xl:fixed sm:mt-11 md:sticky limit">
              <a href="http://localhost:3000/">
                <strong className="font-sans text-4xl font-bold text-white">
                  Yavuz Mollahamzaoğlu
                </strong>
              </a>
              <span className="text-white text-xl">
                Junior Front End Engineer
              </span>
              <span className="text-white">
                I create responsive and backend-supported projects.
              </span>

              <img src="./portfoliophoto.jpeg"></img>
              <div className="social-media-icons-white gap-10 flex m-auto">
                <a
                  href="https://www.instagram.com/mollahamzaoglu/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </a>
                <a
                  href="https://github.com/YavuzMollahamzaoglu"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
                <a
                  href="https://www.linkedin.com/in/yavuz-mollahamzao%C4%9Flu-59a2531 b9/
"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </a>
                <a href="" target="_blank">
                  <FontAwesomeIcon icon={faLetterboxd}></FontAwesomeIcon>
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-1  p-4">
            <p className="text-white mb-4">
              I’m a developer passionate about creating responsive and optimized
              digital experiences that merge innovative design with robust
              engineering. My work focuses on crafting user interfaces and
              backend solutions that are not only functional but also visually
              appealing and accessible.
            </p>
            <p className="text-white mb-4">
              Since beginning my programming journey in 2020, I have explored a
              wide range of technologies, starting with Python and algorithmic
              problem-solving in C++. Over the years, I’ve expanded my expertise
              to include both frontend and backend development. I specialize in
              Angular, React, Prisma, HTML5, and CSS, while also working
              extensively with SQL and NoSQL databases to manage data-driven
              applications.
            </p>
            <p className="text-white mb-4">
              My experience spans various aspects of web development, from
              designing seamless user experiences to implementing scalable
              backend systems. I have a deep appreciation for clean code,
              attention to detail, and building performant, user-centric
              applications.
            </p>
            <p className="text-white mb-4">
              In addition to my technical abilities, I bring a multidisciplinary
              perspective from my studies in Electrical and Electronics
              Engineering. I believe this foundation enhances my problem-solving
              skills and allows me to approach challenges with a unique mindset.
            </p>
            <p className="text-white ">
              Outside of development, I enjoy exploring new technologies,
              traveling the world, playing video games, and engaging in all
              kinds of sports. Whether it’s climbing, running, or trying out
              something new, I love staying active and challenging myself both
              mentally and physically.
            </p>
          </div>
        </div>
      </section>
      <section id="experience">
        <div className="experience mt-20">
          <div className="pt-20 lg:grid lg:grid-cols-2 gap-4 ">
            <div className="info flex flex-col gap-4"></div>
            <div className="info flex flex-col gap-4 experience-cards">
              <h1 className="flex text-white cursor-auto justify-center font-bold text-3xl title">
                Experience
              </h1>
              <a
                href="#?"
                class="flex flex-col items-center cursor-auto	   hover:bg-gray-500 hover:bg-opacity-25 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 p-2  "
              >
                <img
                  class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  className="tubitak"
                  src="./alku.png"
                  alt=""
                ></img>
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <p class="mb-1 text-sm font-medium 	 text-gray-500 dark:text-gray-400">
                    2024 November - Current
                  </p>
                  <h5 class="mb-2 text-2xl 	 font-bold tracking-tight text-gray-900 dark:text-white text-white">
                    Alanya Aladdin Keykubat Universty, IT Asistant
                  </h5>
                  <p class="mb-3 font-normal text-gray-300">
                    At my university's IT department, I primarily work on
                    frontend-focused projects and contribute to team efforts. I
                    mainly use HTML and CSS in my tasks.
                  </p>
                  <div className="flex  ">
                    <button
                      type="button"
                      class="text-white cursor-auto	 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                    >
                      HTML5
                    </button>
                    <button
                      type="button"
                      class="text-white cursor-auto	 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                    >
                      CSS
                    </button>
                    <button
                      type="button"
                      class="text-white cursor-auto	 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                    >
                      ReactJs
                    </button>
                  </div>
                </div>
              </a>
              <a
                href="#?"
                class="flex flex-col items-center hover:bg-gray-500 cursor-auto	 hover:bg-opacity-25 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 p-2  "
              >
                <img
                  class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  className="tubitak"
                  src="./huawei3.png"
                  alt=""
                ></img>
                <div class="flex flex-col justify-between p-4 leading-normal ">
                  <p class="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    2024 July - 2024 August
                  </p>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight  text-white">
                    Huawei, Front End Engineer Intership
                  </h5>
                  <p class="mb-3 font-normal text-gray-300">
                    During my summer internship at Huawei, I focused on
                    front-end development with a strong emphasis on AngularJS. I
                    gained hands-on experience in building dynamic web
                    applications, working extensively with AngularJS.
                    Additionally, I acquired foundational knowledge in backend
                    development, allowing me to integrate and manage data more
                    effectively in my projects and successfully submitted my
                    final work under the mentorship of Cihat Haktanir.
                  </p>
                  <div className="flex ">
                    <button
                      type="button"
                      class="text-white bg-gradient-to-r cursor-auto	 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                    >
                      AngularJs
                    </button>
                    <button
                      type="button"
                      class="text-white bg-gradient-to-r cursor-auto	 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                    >
                      HTML5
                    </button>

                    <button
                      type="button"
                      class="text-white bg-gradient-to-r cursor-auto	 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                    >
                      PrismaJs
                    </button>
                    <button
                      type="button"
                      class="text-white bg-gradient-to-r cursor-auto	 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                    >
                      NodeJs
                    </button>
                  </div>
                </div>
              </a>

              <a
                href="#?"
                class="flex flex-col items-center  cursor-auto	  hover:bg-gray-500 hover:bg-opacity-25 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 p-2  "
              >
                <img
                  class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg "
                  className="tubitak"
                  src="./tubitaklogo.png"
                  alt=""
                ></img>
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <p class="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    2022 November - 2024 November
                  </p>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-white">
                    TUBITAK, Researcher
                  </h5>
                  <p class="mb-3 font-normal  text-gray-300">
                    The purpose of this work is to investigate the possibilities
                    of utilizing sensors in the measurement of plant water
                    consumption through evaporation pan measurements.
                    Additionally, I conducted research, worked on the
                    installation and operation of sensors, and applied
                    analytical thinking throughout the project. I prepared
                    detailed reports, delivered an effective presentation, and
                    successfully submitted my final work under the mentorship of
                    Assoc. Prof. Dr. Fırat Arslan.
                  </p>
                  <div className="flex ">
                    <button
                      type="button"
                      class="text-white bg-gradient-to-r cursor-auto	 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                    >
                      Literatur
                    </button>
                    <button
                      type="button"
                      class="text-white bg-gradient-to-r cursor-auto	 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                    >
                      Sensors
                    </button>
                    <button
                      type="button"
                      class="text-white bg-gradient-to-r cursor-auto	 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                    >
                      Electrical Engineering
                    </button>
                  </div>
                </div>
              </a>
              <a
                className="text-white flex justify-center sm:justify-start hover:text-teal-300 font-medium text-slate-200 items-baseline"
                href="./cv.pdf"
                target="_blank"
              >
                <span> View Full Resume </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="inline-block icon h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="pt-20 lg:grid lg:grid-cols-2 gap-4 ">
          <div className="col-span-1 flex p-4 md:ml-15 justify-center items-center ">
            <div className=" flex flex-col gap-4 "></div>
          </div>

          <div className="col-span-1 mt-4  ">
            <h1 className="flex  justify-center align-middle text-white  font-bold text-3xl title">
              My Projects
            </h1>
            <a
              href="#?"
              class="flex flex-col items-center cursor-auto  hover:bg-gray-500 hover:bg-opacity-25 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 p-2  "
            >
              <img
                class="object-cover w-full rounded-xl  h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                className="project-image"
                src="./task-app.png"
                alt=""
              ></img>
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-xl  tracking-tight hover:text-teal-300 text-gray-900 dark:text-white text-white">
                  Task Manager App
                </h5>
                <p class="mb-3 font-normal text-gray-300">
                  I made this project as my Huawei internship finish projects
                  and create it in a short time like 2 week.
                </p>
                <div className="flex justify-center">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    AngularJs
                  </button>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    Angular Material
                  </button>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    PrismaJs
                  </button>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    SQLite
                  </button>
                </div>
              </div>
            </a>
            <a
              href="#?"
              class="flex flex-col items-center cursor-auto  hover:bg-gray-500 hover:bg-opacity-25 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 p-2  "
            >
              <img
                class="object-cover  w-full rounded-xl justify-left h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                className="project-image"
                src="./real-estate.jpeg"
                alt=""
              ></img>
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-xl  tracking-tight hover:text-teal-300 text-gray-900 dark:text-white text-white">
                  Real Estate App
                </h5>
                <p class="mb-3 font-normal text-gray-300">
                  Collaborated on a real estate project focusing on UI/UX
                  design, using HTML, CSS, and Bootstrap. Emphasized SEO best
                  practices to optimize project visibility and performance.
                </p>
                <div className="flex justify-center">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    HTML5
                  </button>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    CSS
                  </button>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    Bootstrap
                  </button>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    SEO
                  </button>
                </div>
              </div>
            </a>
            <a
              href="#?"
              class="flex flex-col items-center  cursor-auto  hover:bg-gray-500 hover:bg-opacity-25 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 p-2  "
            >
              <img
                class="object-cover w-full rounded-xl h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                className="project-image"
                src="./social-app.jpeg"
                alt=""
              ></img>
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-xl  tracking-tight hover:text-teal-300 text-gray-900 dark:text-white text-white">
                  Social App
                </h5>
                <p class="mb-3 font-normal text-gray-300">
                  UI/UX for a social app can demonstrate your skills in user
                  interface design, user experience optimization, and
                  prototyping.
                </p>
                <div className="flex justify-center">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    ReactJs
                  </button>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    Material UI
                  </button>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    ReactDOM
                  </button>
                </div>
              </div>
            </a>
            <a
              href="#?"
              class="flex flex-col items-center cursor-auto  hover:bg-gray-500 hover:bg-opacity-25 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 p-2 mb-2  "
            >
              <img
                class="object-cover w-full rounded-xl h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                className="project-image"
                src="./universty.jpeg"
                alt=""
              ></img>
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-xl  tracking-tight hover:text-teal-300 text-gray-900 dark:text-white text-white">
                  Universty Automation
                </h5>
                <p class="mb-3 font-normal text-gray-300">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <div className="flex justify-center">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    PrismaJs
                  </button>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    ReactJs
                  </button>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    MySQL
                  </button>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    ExpressJs
                  </button>
                </div>
              </div>
            </a>
            <a
              className=" hover:text-teal-300 font-medium text-slate-200 items-baseline"
              href="./cv.pdf"
              target="_blank"
            >
              <span> View My GitHub Repositorys </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section id="certificate" className="hidden sm:block">
        <div className="pt-20 lg:grid lg:grid-cols-2 flex justify-center gap-4 ">
          <div className="col-span-1 flex p-4 ml-15 justify-center items-center  ">
            <div className=" flex flex-col gap-4 "></div>
          </div>

          <div className="col-span-1  flex flex-col justify-center mr-40 ">
            <h1 className="flex  justify-center align-middle  text-white font-bold text-3xl ml-20 title-certificate">
              Certificates
            </h1>
            <div>
              <Swiper
                pagination={{
                  type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper p-2 "
              >
                <SwiperSlide>
                  <img
                    className="slider-image "
                    src="./certificate/bilgi.jpeg"
                  ></img>
                  <span className="flex justify-center text-white mt-2">
                    Information Technology Entry
                  </span>
                  <span className="flex justify-center text-center text-white mt-2">
                    Computer hardware, software, networking, problem-solving, IT
                    systems.
                  </span>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="slider-image"
                    src="./certificate/html5.jpeg"
                  ></img>
                  <span className="flex justify-center text-white mt-2">
                    Web Developing with HTML5
                  </span>
                  <span className="flex justify-center text-center text-white mt-2">
                    Web design, Semantic HTML, Multimedia integration,
                    Accessibility, CSS3.
                  </span>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="slider-image"
                    src="./certificate/css-temelleri.jpeg"
                  ></img>
                  <span className="flex justify-center text-white mt-2">
                    CSS Basics
                  </span>
                  <span className="flex justify-center text-center text-white mt-2">
                    CSS Fundamentals, Box model, Flexbox, Responsive design,
                    Media queries.
                  </span>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="slider-image"
                    src="./certificate/devops.jpeg"
                  ></img>
                  <span className="flex justify-center text-white mt-2">
                    DevOps Solutions
                  </span>
                  <span className="flex justify-center text-center text-white mt-2">
                    Continuous integration, continuous deployment, automation,
                    containerization.
                  </span>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="slider-image"
                    src="./certificate/git.jpeg"
                  ></img>
                  <span className="flex justify-center text-white mt-2">
                    Version Controls:Git & GitHub
                  </span>
                  <span className="flex justify-center text-center text-white mt-2">
                    Branching, Merging, Collaboration, Code Management, Commit
                    History.
                  </span>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="slider-image"
                    src="./certificate/temelag.jpeg"
                  ></img>
                  <span className="flex justify-center text-white mt-2">
                    Basic Network Technologies
                  </span>
                  <span className="flex justify-center text-center text-white mt-2">
                    Protocols, IP addressing, Subnetting, LAN/WAN Concepts,
                    Routing, Switching.
                  </span>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="slider-image"
                    src="./certificate/veri_modelleme.jpeg"
                  ></img>
                  <span className="flex justify-center text-white mt-2">
                    Data Modelling
                  </span>
                  <span className="flex justify-center text-center text-white mt-2">
                    Entity relationships, database schema design, normalization,
                    data integrity.
                  </span>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="slider-image"
                    src="./certificate/veri_tabani_giris.jpeg"
                  ></img>
                  <span className="flex justify-center text-white mt-2">
                    Database Entry
                  </span>
                  <span className="flex justify-center text-center text-white mt-2">
                    Data input, validation, database management systems, query
                    execution.
                  </span>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="slider-image"
                    src="./certificate/yapayzeka.jpeg"
                  ></img>
                  <span className="flex justify-center text-white mt-2">
                    Artificial Intelligence Workshop
                  </span>
                  <span className="flex justify-center text-center text-white mt-2">
                    Machine learning basics, AI concepts, model training, AI
                    applications.
                  </span>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-20 lg:grid lg:grid-cols-2 gap-4 ">
          <div className="col-span-1 flex p-4 ml-15 justify-center items-center  ">
            <div className=" flex flex-col gap-4 "></div>
          </div>

          <div className="col-span-1 flex justify-center md:mr-40 ">
            <section id="contact-me">
              <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md contact-me">
                <h2 class="mb-4  tracking-tight font-bold text-3xl text-center text-gray-300 text-white ">
                  Contact Me
                </h2>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-300  sm:text-xl">
                  To reach me, simply fill out the information below and send
                  your message. Additionally, you can contact me via WhatsApp
                  at,
                  <a
                    className=" text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    href="tel:+905374639725"
                  >
                    +905374639725
                  </a>{" "}
                  to send your message.
                </p>

                <form ref={form} onSubmit={sendEmail} class="space-y-8">
                  <div>
                    <label
                      for="user_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      id="user_name"
                      placeholder="Alan Turing"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="user_email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="alanturingk@gmail.com"
                      id="user_email"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="subject"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder=""
                      required
                    />
                  </div>

                  <div class="sm:col-span-2">
                    <label
                      for="message"
                      class="block mb-2 text-sm font-medium text-gray-300"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      class="block p-2.5 w-full text-sm text-gray-300 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                  </div>

                  <div class="flex justify-center">
                    <button
                      type="submit"
                      className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg sm:w-fit focus:ring-4 focus:outline-none bg-gray-700 hover:bg-gray-500"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
