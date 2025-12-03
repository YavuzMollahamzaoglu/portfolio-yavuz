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
import { useRef, useEffect, useState } from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
// email sending removed per request

function App() {
  // Theme (dark/light)
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      if (saved === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // default to dark
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    if (next === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  // Language (EN/TR)
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
  const toggleLang = () => {
    const next = lang === "en" ? "tr" : "en";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  // Keep <html lang> and direction consistent with selected language
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", "ltr");
  }, [lang]);

  const i18n = {
    en: {
      nav: {
        who: "Who am I",
        exp: "Experience",
        projects: "My Projects",
        certs: "Certificates",
        contact: "Contact Me",
      },
      subtitle: "Junior Electrical-Electronics Engineer",
      tagline: "Bridging hardware and software through full-stack development.",
      headings: {
        experience: "Experience",
        projects: "My Projects",
        certificates: "Certificates",
        contact: "Contact Me",
      },
      about: [
        "Hello! I am Yavuz Mollahamzaoğlu, a Junior Electrical-Electronics Engineer currently based in Portugal. I graduated in August 2025. My programming journey began at university, where I started learning Python and C++ in 2020. Since then, I have been steadily developing my skills to bridge the gap between hardware and software.",
        "My work focuses on full-stack development using Angular, React, Node.js, and Prisma. I have contributed to impactful projects, such as the exam preparation platform (ingilizceprep.com). Currently, I work in the IT department at REMAX/WISE, where I support data enrichment and automation processes for their real estate operations (like realestate-lisbon.com).",
        "Beyond software, I have a solid engineering foundation; I designed a mapping algorithm for a smart vacuum cleaner as my graduation project and conducted government-funded research on sensor-based precision agriculture. Outside of work, I am a true explorer that visited 30 countries and lived in 4, bringing a global perspective and high energy to every team I join.",
        "Enjoy exploring my journey!",
      ],
      links: {
        resume: "View Full Resume",
        repos: "View My GitHub Repositories",
      },
      contact: {
        lead: "To reach me, simply fill out the information below and send your message. You can also contact me via WhatsApp at",
      },
      projects: {
        taskManager:
          "A Jira-style task management application developed during my Huawei internship as a capstone project. Built without using external libraries, it features drag-and-drop functionality, task tracking, and a clean, intuitive interface. Completed in just 2 weeks.",
        realEstate:
          "A comprehensive real estate platform developed as part of a government-supported bootcamp program. This project earned me a certificate of completion and showcases my skills in responsive design.",
        socialApp:
          "A modern social media platform built with React, featuring real-time updates, user profiles, and interactive content sharing. Demonstrates proficiency in component-based architecture and state management.",
        ingilizceprep:
          "A live exam preparation web app built during my internship capstone. Uses React, TypeScript, Node.js, Material UI, and MySQL. The app helps users practice English exams with interactive content and statistics. Live at https://ingilizceprep.com/.",
        lisbonRealEstate:
          "Data enrichment and automation for a live property listing website. Implemented web scraping pipelines and workflow automation using Python, Puppeteer, Node.js, n8n, and Make to keep listings fresh and complete.",
      },
    },
    tr: {
      nav: {
        who: "Ben kimim",
        exp: "Deneyim",
        projects: "Projelerim",
        certs: "Sertifikalar",
        contact: "İletişim",
      },
      subtitle: "Junior Elektrik-Elektronik Mühendisi",
      tagline:
        "Full-stack geliştirme yetkinlikleriyle donanım ve yazılım dünyalarını birleştiriyorum.",
      headings: {
        experience: "Deneyim",
        projects: "Projelerim",
        certificates: "Sertifikalar",
        contact: "İletişim",
      },
      about: [
        "Merhaba! Ben Yavuz Mollahamzaoğlu, şu anda Portekiz'de yaşayan bir Junior Elektrik-Elektronik Mühendisiyim. Ağustos 2025'te mezun oldum. Programlama yolculuğum üniversitede başladı; 2020 yılında Python ve C++ öğrenmeye başladım. O zamandan beri donanım ve yazılım arasındaki köprüyü kurmak için becerilerimi geliştiriyorum.",
        "Çalışmalarım Angular, React, Node.js ve Prisma kullanarak full-stack geliştirmeye odaklanıyor. ingilizceprep.com gibi projeleri sıfırdan tasarlayıp hayata geçirdim. Şu anda REMAX/WISE'ın IT departmanında çalışıyorum ve gayrimenkul operasyonları (realestate-lisbon.com) için veri zenginleştirme ve otomasyon süreçlerini destekliyorum.",
        "Yazılımın ötesinde, sağlam bir mühendislik temeline sahibim; mezuniyet projem olarak akıllı süpürge için haritalama algoritması tasarladım ve sensör tabanlı hassas tarım üzerine hükümet destekli araştırma yaptım. İş dışında gerçek bir kaşifim 30 ülke ziyaret ettim ve 4 ülkede yaşadım, katıldığım her ekibe küresel bir bakış açısı ve yüksek enerji getiriyorum.",
        "Yolculuğumu keşfetmenin tadını çıkarın!",
      ],
      links: {
        resume: "Özgeçmişi Görüntüle",
        repos: "GitHub Depolarımı Görüntüle",
      },
      contact: {
        lead: "Bana ulaşmak için aşağıdaki bilgileri doldurup mesajınızı gönderebilirsiniz. Ayrıca WhatsApp üzerinden şu numaradan iletişime geçebilirsiniz",
      },
      projects: {
        taskManager:
          "Huawei stajım sırasında bitirme projesi olarak geliştirdiğim Jira tarzı görev yönetim uygulaması. Harici kütüphane kullanmadan sürükle-bırak özelliği, görev takibi ve temiz, sezgisel bir arayüz içeriyor. Sadece 2 haftada tamamladım.",
        realEstate:
          "Hükümet destekli bir bootcamp programının parçası olarak geliştirilen kapsamlı gayrimenkul platformu. Bu proje bana bir tamamlama sertifikası kazandırdı ve responsive tasarım üzerine kendimi geliştirmeme yardımcı oldu.",
        socialApp:
          "React ile geliştirilmiş modern bir sosyal medya platformu. Gerçek zamanlı güncellemeler, kullanıcı profilleri ve etkileşimli içerik paylaşımı özellikleri bulunuyor. Bileşen tabanlı mimari ve state yönetimindeki yetkinliği gösteriyor.",
        ingilizceprep:
          "Staj bitirme projesi kapsamında geliştirilen ve canlıda yayınlanan İngilizce hazırlık uygulaması. React, TypeScript, Node.js, Material UI ve MySQL kullanır. Kullanıcıların İngilizce sınavlarını interaktif içerik ve istatistiklerle çalışmasına yardımcı olucak bir site tasarladım. Canlı: https://ingilizceprep.com/.",
        lisbonRealEstate:
          "Canlı bir emlak listeleme sitesi için veri zenginleştirme ve otomasyon geliştirdim. İlanların güncel ve eksiksiz kalması için Python, Puppeteer, Node.js, n8n ve Make ile web scraping akışları ve iş akışı otomasyonları kurdum.",
      },
    },
  };
  const t = i18n[lang];
  const form = useRef();

  return (
    <div className="App scroll-smooth">
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur text-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-700 flex justify-center items-center text-center">
        <div className="w-full max-w-screen-xl flex flex-row items-center justify-center space-x-4 lg:space-x-12 p-4 relative">
          <a
            href="#myself"
            className="text-white hover:text-teal-300 transition-colors text-sm md:text-base lg:text-lg font-medium"
            aria-current="page"
          >
            {t.nav.who}
          </a>
          <a
            href="#experience"
            className="text-white hover:text-teal-300 transition-colors text-sm md:text-base lg:text-lg font-medium"
          >
            {t.nav.exp}
          </a>
          <a
            href="#projects"
            className="text-white hover:text-teal-300 transition-colors text-sm md:text-base lg:text-lg font-medium"
          >
            {t.nav.projects}
          </a>
          <a
            href="#certificate"
            className="text-white hover:text-teal-300 transition-colors text-sm md:text-base lg:text-lg font-medium"
          >
            {t.nav.certs}
          </a>
          <a
            href="#contact-me"
            className="text-white hover:text-teal-300 transition-colors text-sm md:text-base lg:text-lg font-medium"
          >
            {t.nav.contact}
          </a>

          {/* Right controls: theme + language */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="text-white hover:text-teal-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
            </button>
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              className="text-white text-xs md:text-sm lg:text-base border border-white/30 rounded px-2 py-1 hover:text-teal-300 hover:border-teal-300"
            >
              {lang.toUpperCase()}
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-24 lg:grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-24 flex justify-center">
            <div className="info-card flex flex-col gap-3 hero-left">
              <a href="http://localhost:3000/">
                <strong className="font-sans text-4xl font-bold text-white">
                  Yavuz Mollahamzaoğlu
                </strong>
              </a>
              <span className="text-white text-xl">{t.subtitle}</span>
              <span className="text-white">{t.tagline}</span>

              <img
                className="profile-photo"
                src={
                  process.env.PUBLIC_URL +
                  (theme === "light"
                    ? "/light-photo.jpg"
                    : "/portfoliophoto.jpeg")
                }
                alt="Profile"
              />
              <div className="social-media-icons-white gap-10 flex m-auto">
                <a
                  href="https://www.instagram.com/mollahamzaoglu/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </a>
                <a
                  href="https://github.com/YavuzMollahamzaoglu"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
                <a
                  href="https://www.linkedin.com/in/yavuz-mollahamzaoglu-59a2531b9/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </a>
                <a
                  href="https://letterboxd.com/mollahamzaoglu/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Letterboxd"
                >
                  <FontAwesomeIcon icon={faLetterboxd}></FontAwesomeIcon>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sağ Kolon - Tüm Content */}
        <div className="col-span-1">
          {/* Ben kimim Section */}
          <section id="myself" className="p-4 mb-20">
            <div className="w-full">
              <div style={{ marginTop: lang === "tr" ? "75px" : "60px" }}>
                {t.about.map((para, idx) => (
                  <p
                    key={idx}
                    className={`text-white ${
                      idx === t.about.length - 1 ? "" : "mb-4"
                    }`}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="experience-cards p-4 mb-20">
            <h1 className="text-white font-bold text-3xl text-center mb-4 title">
              {t.headings.experience}
            </h1>
            <a
              href="#experience"
              className="flex flex-row items-center cursor-auto hover:bg-blue-100 dark:hover:bg-gray-700/40 rounded-lg w-full p-2 transition-colors"
            >
              <img
                className="tubitak object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                style={{
                  maxWidth: "220px",
                  maxHeight: "220px",
                  width: "100%",
                  height: "auto",
                }}
                src={process.env.PUBLIC_URL + "/huawei3.png"}
                alt="Huawei logo"
              />
              <div className="flex-1 flex flex-col justify-between p-4 leading-normal max-w-3xl w-full ">
                <p class="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {lang === "en"
                    ? "2024 July - 2024 August"
                    : "2024 Temmuz - 2024 Ağustos"}
                </p>
                <h5 class="mb-2 text-2xl font-bold tracking-tight  text-white">
                  {lang === "en"
                    ? "Huawei, Front-End Developer (Summer Internship, Hybrid)"
                    : "Huawei, Front-End Developer (Yaz Stajı, Hibrit)"}
                </h5>
                <p class="mb-3 font-normal text-gray-300">
                  {lang === "en"
                    ? "During my summer internship at Huawei, I focused on front-end development with a strong emphasis on AngularJS. I gained hands-on experience in building dynamic web applications, working extensively with AngularJS. Additionally, I acquired foundational knowledge in backend development, allowing me to integrate and manage data more effectively in my projects and successfully submitted my final work under the mentorship of Cihat Haktanir."
                    : "Huawei'deki yaz stajımda, ağırlıklı olarak AngularJS ile ön yüz geliştirme üzerine çalıştım. Dinamik web uygulamaları geliştirme konusunda pratik deneyim kazandım. Ayrıca, arka uç geliştirme konusunda temel bilgiler edindim ve projelerimde veriyi daha etkili yönetebildim. Staj sonunda, Cihat Haktanır'ın mentörlüğünde final projemi başarıyla teslim ettim."}
                </p>
                <div className="flex justify-center flex-wrap gap-2">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r cursor-auto\t from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    AngularJs
                  </button>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r cursor-auto\t from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    HTML5
                  </button>

                  <button
                    type="button"
                    class="text-white bg-gradient-to-r cursor-auto\t from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    PrismaJs
                  </button>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r cursor-auto\t from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    NodeJs
                  </button>
                </div>
              </div>
            </a>
            <a
              href="#experience"
              className="flex flex-row items-center cursor-auto hover:bg-blue-100 dark:hover:bg-gray-700/40 rounded-lg w-full p-2 transition-colors"
            >
              <img
                className="tubitak"
                src={process.env.PUBLIC_URL + "/alku.png"}
                alt="ALKU University logo"
              />
              <div className="flex-1 flex flex-col justify-between p-4 leading-normal max-w-3xl w-full">
                <p class="mb-1 text-sm font-medium \t text-gray-500 dark:text-gray-400">
                  {lang === "en"
                    ? "2024 November - 2025 May"
                    : "2024 Kasım - 2025 Mayıs"}
                </p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  {lang === "en"
                    ? "Alanya Aladdin Keykubat University, IT Assistant (Part Time, On office)"
                    : "Alanya Alaaddin Keykubat Üniversitesi, IT Asistanı (Yarı Zamanlı, Ofiste)"}
                </h5>
                <p class="mb-3 font-normal text-gray-300">
                  {lang === "en"
                    ? "At my university's IT department, I primarily worked on frontend-focused projects and contributed to team efforts. I mainly used HTML and CSS in my tasks. Additionally, I performed maintenance work and regularly participated in meetings and idea exchanges with colleagues."
                    : "Üniversitemin IT departmanında ağırlıklı olarak frontend projelerinde çalıştım ve ekip işlerine katkı sağladım. Görevlerimde çoğunlukla HTML ve CSS kullandım. Ayrıca bakım işleri yaptım ve ekip arkadaşlarımla toplantılara katılarak fikir alışverişinde bulundum."}
                </p>
                <div className="flex justify-center flex-wrap gap-2">
                  <button
                    type="button"
                    class="text-white cursor-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center mb-2"
                  >
                    HTML5
                  </button>
                  <button
                    type="button"
                    class="text-white cursor-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center mb-2"
                  >
                    CSS
                  </button>
                  <button
                    type="button"
                    class="text-white cursor-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center mb-2"
                  >
                    ReactJs
                  </button>
                  <button
                    type="button"
                    class="text-white cursor-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center mb-2"
                  >
                    Maintance
                  </button>
                  <button
                    type="button"
                    class="text-white cursor-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center mb-2"
                  >
                    Tailwind
                  </button>
                </div>
              </div>
            </a>

            <a
              href="#experience"
              className="flex flex-row items-center cursor-auto hover:bg-blue-100 dark:hover:bg-gray-700/40 rounded-lg w-full p-2 transition-colors"
            >
              <img
                className="tubitak object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={process.env.PUBLIC_URL + "/tubitaklogo.png"}
                alt="TÜBİTAK logo"
              />
              <div className="flex-1 flex flex-col justify-between p-4 leading-normal max-w-3xl w-full">
                <p class="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  2022 November - 2024 November
                </p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  TUBITAK, Researcher
                </h5>
                <p class="mb-3 font-normal  text-gray-300">
                  The purpose of this work is to investigate the possibilities
                  of utilizing sensors in the measurement of plant water
                  consumption through evaporation pan measurements.
                  Additionally, I conducted research, worked on the installation
                  and operation of sensors, and applied analytical thinking
                  throughout the project. I prepared detailed reports, delivered
                  an effective presentation, and successfully submitted my final
                  work under the mentorship of Assoc. Prof. Dr. Fırat Arslan.
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
              href="#experience"
              className="flex flex-row items-center cursor-auto hover:bg-blue-100 dark:hover:bg-gray-700/40 rounded-lg w-full p-2 transition-colors"
            >
              <img
                className="tubitak object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={process.env.PUBLIC_URL + "/salixus-logo.png"}
                alt="Salixus Technology logo"
              />
              <div className="flex-1 flex flex-col justify-between p-4 leading-normal max-w-3xl w-full">
                <p class="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {lang === "en"
                    ? "2025 August - 2025 September"
                    : "2025 Ağustos - 2025 Eylül"}
                </p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  {lang === "en"
                    ? "Software Developer (Summer Internship, On office)"
                    : "Yazılım Geliştirici (Yaz Stajı, Ofiste)"}
                </h5>
                <p class="mb-3 font-normal text-gray-300">
                  {lang === "en"
                    ? "During this internship, I developed an interactive Erasmus exam preparation platform using React, Tailwind CSS, Prisma.js, and MySQL. I gained hands-on experience in full-stack development, database modeling, and user-centered design. I graduated upon completion of this internship. (ingilizceprep.com)"
                    : "Bu stajda React, Tailwind CSS, Prisma.js ve MySQL kullanarak interaktif bir Erasmus sınav hazırlık platformu geliştirdim. Full-stack geliştirme, veritabanı modelleme ve kullanıcı odaklı tasarımda pratik deneyim kazandım. Bu stajı tamamlayarak mezun oldum. (ingilizceprep.com)"}
                </p>
                <div className="flex">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r cursor-auto from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    React
                  </button>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r cursor-auto from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    Tailwind CSS
                  </button>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r cursor-auto from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    Prisma.js
                  </button>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r cursor-auto from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center me-2 mb-2"
                  >
                    MySQL
                  </button>
                </div>
              </div>
            </a>
            <a
              href="#experience"
              className="flex flex-row items-center cursor-auto hover:bg-blue-100 dark:hover:bg-gray-700/40 rounded-lg w-full p-2 transition-colors"
            >
              <img
                className="tubitak object-cover w-full rounded-t-lg h-80 md:h-auto md:w-56 md:rounded-none md:rounded-s-lg"
                style={{
                  maxWidth: "180px",
                  maxHeight: "180px",
                  width: "100%",
                  height: "auto",
                }}
                src={process.env.PUBLIC_URL + "/remax-logo.png"}
                alt="REMAX logo"
              />
              <div className="flex-1 flex flex-col justify-between p-4 leading-normal max-w-3xl w-full">
                <p class="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {lang === "en"
                    ? "2025 October - Current"
                    : "2025 Ekim - Şu an"}
                </p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  {lang === "en"
                    ? "REMAX/WISE, IT & Automation Specialist (Full Time, On office)"
                    : "REMAX/WISE, IT & Otomasyon Uzmanı (Tam Zamanlı, Ofiste)"}
                </h5>
                <p class="mb-3 font-normal text-gray-300">
                  {lang === "en"
                    ? "Built automated data enrichment pipelines for Portuguese real estate companies using Node.js, Puppeteer, and Make. Developed multi-source scraping solutions for LinkedIn and Idealista. Designed and deployed static web apps with Supabase backend and Vercel hosting."
                    : "Portekiz'deki emlak şirketleri için Node.js, Puppeteer ve Make ile otomatik veri zenginleştirme akışları kurdum. LinkedIn ve Idealista için çoklu kaynaklardan veri çekme çözümleri geliştirdim. Supabase ve Vercel ile tam özellikli, duyarlı web uygulamaları tasarladım ve yayına aldım."}
                </p>
                <div className="flex justify-center flex-wrap gap-2">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r cursor-auto from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center mb-2"
                  >
                    n8n
                  </button>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r cursor-auto from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center mb-2"
                  >
                    Automation
                  </button>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r cursor-auto from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center mb-2"
                  >
                    Data Enrichment
                  </button>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r cursor-auto from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center mb-2"
                  >
                    NodeJs
                  </button>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r cursor-auto from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center mb-2"
                  >
                    Python
                  </button>
                </div>
              </div>
            </a>
          </section>

          {/* Projects Section */}
          <section id="projects" className="p-4 mb-20">
            <h1 className="flex justify-center align-middle text-white font-bold text-3xl title">
              {t.headings.projects}
            </h1>
            <a
              href="#projects"
              className="flex flex-row items-center cursor-auto hover:bg-blue-100 dark:hover:bg-gray-700/40 rounded-lg w-full p-2 transition-colors"
            >
              <img
                className="project-image object-cover w-full rounded-xl h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={process.env.PUBLIC_URL + "/task-app.png"}
                alt="Task Manager App screenshot"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-xl tracking-tight hover:text-teal-300 text-white">
                  Task Manager App
                </h5>
                <p class="mb-3 font-normal text-gray-300">
                  {t.projects.taskManager}
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
                    NodeJs
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
              href="#projects"
              className="flex flex-row items-center cursor-auto hover:bg-blue-100 dark:hover:bg-gray-700/40 rounded-lg w-full p-2 transition-colors"
            >
              <img
                className="project-image object-cover w-full rounded-xl justify-left h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={process.env.PUBLIC_URL + "/real-estate.jpeg"}
                alt="Real Estate App screenshot"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-xl tracking-tight hover:text-teal-300 text-white">
                  Real Estate App
                </h5>
                <p class="mb-3 font-normal text-gray-300">
                  {t.projects.realEstate}
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
                    Git
                  </button>
                </div>
              </div>
            </a>
            <a
              href="#projects"
              className="flex flex-row items-center cursor-auto hover:bg-blue-100 dark:hover:bg-gray-700/40 rounded-lg w-full p-2 transition-colors"
            >
              <img
                className="project-image object-cover w-full rounded-xl h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={process.env.PUBLIC_URL + "/lisbon-real-estate.jpg"}
                alt="Lisbon Real Estate project"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-xl tracking-tight hover:text-teal-300 text-white">
                  Lisbon Real Estate
                </h5>
                <p class="mb-3 font-normal text-gray-300">
                  {t.projects.lisbonRealEstate}
                </p>
                <div className="flex justify-center flex-wrap gap-2">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center mb-2"
                  >
                    Python
                  </button>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center mb-2"
                  >
                    Puppeteer
                  </button>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center mb-2"
                  >
                    Node.js
                  </button>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center mb-2"
                  >
                    n8n
                  </button>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center mb-2"
                  >
                    Make
                  </button>
                </div>
              </div>
            </a>
            <a
              href="#projects"
              className="flex flex-row items-center cursor-auto hover:bg-blue-100 dark:hover:bg-gray-700/40 rounded-lg w-full p-2 transition-colors"
            >
              <img
                className="project-image object-cover w-full rounded-xl h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={process.env.PUBLIC_URL + "/ingilizceprep.jpg"}
                alt="Ingilizce Hazirlik App screenshot"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-xl tracking-tight hover:text-teal-300 text-white break-words">
                  İngilizce Hazırlık App
                </h5>
                <p className="mb-3 font-normal text-gray-300 break-words whitespace-pre-line">
                  {t.projects.ingilizceprep}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center mb-2 cursor-default pointer-events-none"
                  >
                    React
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center mb-2"
                  >
                    TypeScript
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center mb-2"
                  >
                    Node.js
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center mb-2"
                  >
                    Material UI
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center mb-2"
                  >
                    MySQL
                  </button>
                </div>
              </div>
            </a>
            <a
              href="#projects"
              className="flex flex-row items-center cursor-auto hover:bg-blue-100 dark:hover:bg-gray-700/40 rounded-lg w-full p-2 mb-2 transition-colors"
            >
              <img
                className="project-image object-cover w-full rounded-xl h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={process.env.PUBLIC_URL + "/universty.jpeg"}
                alt="University Automation App screenshot"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-xl tracking-tight hover:text-teal-300 text-white">
                  University Automation
                </h5>
                <p className="mb-3 font-normal text-gray-300">
                  {lang === "en"
                    ? "I created a general university automation system as my first MySQL project, where I learned the basics of relational databases and MySQL usage. The backend was built with Express.js and Prisma, and the project features a full-stack architecture."
                    : "İlk MySQL projem olarak genel bir üniversite otomasyon sistemi geliştirdim. Bu projede ilişkisel veritabanı ve MySQL kullanımını öğrendim. Backend kısmında Express.js ve Prisma kullandım, proje tam kapsamlı bir full-stack mimariye sahip."}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center mb-2"
                  >
                    PrismaJs
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center mb-2"
                  >
                    ReactJs
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center mb-2"
                  >
                    MySQL
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center mb-2"
                  >
                    ExpressJs
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xs px-4 py-1.5 text-center mb-2"
                  >
                    Backend
                  </button>
                </div>
              </div>
            </a>
          </section>

          {/* Certificates Section */}
          <section id="certificate" className="hidden sm:block p-4 mb-20">
            <h1 className="text-white font-bold text-3xl mb-4 text-center title-certificate">
              {t.headings.certificates}
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
                    src={process.env.PUBLIC_URL + "/certificate/sql-badi.jpg"}
                    alt="Certificate: SQL Badi"
                  />
                  <span className="flex justify-center text-white mt-2">
                    SQL Badi
                  </span>
                  <span className="flex justify-center text-center text-white mt-2">
                    {lang === "en"
                      ? "SQL fundamentals, queries, relational database design."
                      : "SQL fundamentals, sorgular, relational database design."}
                  </span>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="slider-image "
                    src={
                      process.env.PUBLIC_URL +
                      "/certificate/cloud_coderspace.jpg"
                    }
                    alt="Certificate: Cloud Coderspace"
                  />
                  <span className="flex justify-center text-white mt-2">
                    Cloud Coderspace
                  </span>
                  <span className="flex justify-center text-center text-white mt-2">
                    {lang === "en"
                      ? "Cloud computing, deployment, scalable infrastructure."
                      : "Cloud computing, deployment, scalable infrastructure."}
                  </span>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="slider-image "
                    src={process.env.PUBLIC_URL + "/certificate/bilgi.jpeg"}
                    alt="Certificate: Information Technology Entry"
                  />
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
                    src={process.env.PUBLIC_URL + "/certificate/html5.jpeg"}
                    alt="Certificate: Web Developing with HTML5"
                  />
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
                    src={
                      process.env.PUBLIC_URL + "/certificate/css-temelleri.jpeg"
                    }
                    alt="Certificate: CSS Basics"
                  />
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
                    src={process.env.PUBLIC_URL + "/certificate/devops.jpeg"}
                    alt="Certificate: DevOps Solutions"
                  />
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
                    src={process.env.PUBLIC_URL + "/certificate/git.jpeg"}
                    alt="Certificate: Git & GitHub Version Control"
                  />
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
                    src={process.env.PUBLIC_URL + "/certificate/temelag.jpeg"}
                    alt="Certificate: Basic Network Technologies"
                  />
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
                    src={
                      process.env.PUBLIC_URL +
                      "/certificate/veri_modelleme.jpeg"
                    }
                    alt="Certificate: Data Modelling"
                  />
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
                    src={
                      process.env.PUBLIC_URL +
                      "/certificate/veri_tabani_giris.jpeg"
                    }
                    alt="Certificate: Database Entry"
                  />
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
                    src={process.env.PUBLIC_URL + "/certificate/yapayzeka.jpeg"}
                    alt="Certificate: Artificial Intelligence Workshop"
                  />
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
          </section>

          {/* Contact Section (Static info) */}
          <section id="contact-me" className="p-4 mb-20">
            <div class="py-2 lg:py-2 px-4 mx-auto w-full contact-me">
              <h2 className="mb-4 tracking-tight font-bold text-3xl text-center text-white title">
                {t.headings.contact}
              </h2>
              <div className="mb-8 lg:mb-16 font-light text-center text-gray-300 sm:text-xl">
                {lang === "en"
                  ? "You can reach me via the channels below."
                  : "Aşağıdaki kanallar üzerinden bana ulaşabilirsiniz."}
              </div>

              <div className="max-w-2xl mx-auto grid gap-4">
                <a
                  href="mailto:yavuzmollahamzaoglu@gmail.com"
                  className="block p-4 rounded-lg bg-white border border-gray-300 shadow-md text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  <strong className="block">Email</strong>
                  <span>yavuzmollahamzaoglu@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/905374639725"
                  target="_blank"
                  rel="noreferrer"
                  className="block p-4 rounded-lg bg-white border border-gray-300 shadow-md text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  <strong className="block">WhatsApp</strong>
                  <span>+90 537 463 97 25</span>
                </a>
                <div className="block p-4 rounded-lg bg-white border border-gray-300 shadow-md text-gray-900">
                  <strong className="block">
                    {lang === "tr" ? "Lokasyon" : "Location"}
                  </strong>
                  <span>Barcanera Rua Egas Moniz 4, Lisbon, Portugal</span>
                </div>
                <a
                  href="https://www.linkedin.com/in/yavuz-mollahamzaoğlu-59a2531b9"
                  target="_blank"
                  rel="noreferrer"
                  className="block p-4 rounded-lg bg-white border border-gray-300 shadow-md text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  <strong className="block">LinkedIn</strong>
                  <span>yavuz-mollahamzaoğlu-59a2531b9</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
