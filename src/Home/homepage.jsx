// import '../App.css';
import "./homepage2.css";
import "./homepage.css";
import Logo from "../assets/images/Dochub.png";
import HeroSlide1 from "../assets/images/hero-slider-1.jpg";
import HeroSlide2 from "../assets/images/hero-slider-2.jpg";
import HeroSlide3 from "../assets/images/hero-slider-3.jpg";
import BookingIcon from "../assets/images/hero-icon 2.png";
import DocEle4 from "../assets/images/Doc ele 4.png";
import DocEle7 from "../assets/images/Doc ele 7.png";
import Category1 from "../assets/images/General Physician.png"
import Category2 from "../assets/images/Dentist.jpg"
import Category3 from "../assets/images/Gynecologist.png"
import Category4 from "../assets/images/Orthopedic.png"
import Category5 from "../assets/images/Cardiologist.png"
import Strength1 from "../assets/images/booking.png"
import Strength2 from "../assets/images/trusted.png"
import Strength3 from "../assets/images/availability.png"
import Strength4 from "../assets/images/secure.png"
import AboutSlide1 from "../assets/images/about_slide1.jpg"
import AboutSlide2 from "../assets/images/about_slide2.jpg"
import AboutSlide3 from "../assets/images/about_slide3.jpg"
import AboutSlide4 from "../assets/images/about_slide4.jpg"
import testimonialBg from "../assets/images/testimonial-bg.jpg";
import Avater from "../assets/images/testi-avatar.jpg"
import formPattern from "../assets/images/form-pattern.png";
import footerBg from "../assets/images/footer-bg 3.jpg";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";



const Homepage = () => {

  useEffect(() => {

    const addEventOnElements = (elements, eventType, callback) => {
      if (!elements) return;
      elements.forEach((el) => el?.addEventListener(eventType, callback));
    };

    const removeEventOnElements = (elements, eventType, callback) => {
      if (!elements) return;
      elements.forEach((el) => el?.removeEventListener(eventType, callback));
    };

    /**
     * NAVBAR
     */
    const navbar = document.querySelector("[data-navbar]");
    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const overlay = document.querySelector("[data-overlay]");

    const toggleNavbar = () => {
      navbar?.classList.toggle("active");
      overlay?.classList.toggle("active");
      document.body.classList.toggle("nav-active");
    };

    addEventOnElements(navTogglers, "click", toggleNavbar);

    /**
     * HEADER & BACK TOP BTN
     */
    const header = document.querySelector("[data-header]");
    const backTopBtn = document.querySelector("[data-back-top-btn]");
    let lastScrollPos = 0;

    const hideHeader = () => {
      const isScrollBottom = lastScrollPos < window.scrollY;
      if (isScrollBottom) {
        header?.classList.add("hide");
      } else {
        header?.classList.remove("hide");
      }
      lastScrollPos = window.scrollY;
    };

    const handleScroll = () => {
      if (window.scrollY >= 50) {
        header?.classList.add("active");
        backTopBtn?.classList.add("active");
        hideHeader();
      } else {
        header?.classList.remove("active");
        backTopBtn?.classList.remove("active");
      }
    };
    window.addEventListener("scroll", handleScroll);

    /**
     * HERO SLIDER
     */
    const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
    const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
    const heroSliderNextBtn = document.querySelector("[data-next-btn]");

    let currentSlidePos = 0;
    let lastActiveSliderItem = heroSliderItems[0];
    let autoSlideInterval;

    const updateSliderPos = () => {
      lastActiveSliderItem?.classList.remove("active");
      heroSliderItems[currentSlidePos]?.classList.add("active");
      lastActiveSliderItem = heroSliderItems[currentSlidePos];
    };

    const slideNext = () => {
      currentSlidePos =
        currentSlidePos >= heroSliderItems.length - 1 ? 0 : currentSlidePos + 1;
      updateSliderPos();
    };

    const slidePrev = () => {
      currentSlidePos =
        currentSlidePos <= 0 ? heroSliderItems.length - 1 : currentSlidePos - 1;
      updateSliderPos();
    };

    heroSliderNextBtn?.addEventListener("click", slideNext);
    heroSliderPrevBtn?.addEventListener("click", slidePrev);

    const autoSlide = () => {
      autoSlideInterval = setInterval(slideNext, 7000);
    };
    window.addEventListener("load", autoSlide);

    addEventOnElements(
      [heroSliderNextBtn, heroSliderPrevBtn],
      "mouseover",
      () => clearInterval(autoSlideInterval)
    );
    addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

    /**
     * PARALLAX EFFECT
     */
    const parallaxItems = document.querySelectorAll("[data-parallax-item]");
    const handleMouseMove = (event) => {
      let x = (event.clientX / window.innerWidth) * 10 - 5;
      let y = (event.clientY / window.innerHeight) * 10 - 5;
      x = x - x * 2;
      y = y - y * 2;

      parallaxItems.forEach((item) => {
        const speed = Number(item.dataset.parallaxSpeed);
        item.style.transform = `translate3d(${x * speed}px, ${y * speed}px, 0px)`;
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    /**
     * RIPPLE EFFECT
     */
    const gpElements = document.querySelectorAll(".gp");
    gpElements.forEach((el) => {
      el.addEventListener("click", () => {
        el.classList.remove("ripple");
        void el.offsetWidth;
        el.classList.add("ripple");
      });
    });

    /**
     * MOUSE MOTION BLOB
     */
    const blob = document.querySelector(".blob");
    const handlePointerMove = (e) => {
      const { clientX, clientY } = e;
      blob?.animate(
        { left: `${clientX}px`, top: `${clientY}px` },
        { duration: 3000, fill: "forwards" }
      );
    };
    window.addEventListener("pointermove", handlePointerMove);

    /**
     * MOUSE MOTION ABOUT US
     */
    const cards = document.querySelectorAll(".tilt-global");
    const handleCardMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const { clientX: x, clientY: y } = e;
      const centerX = innerWidth / 2;
      const centerY = innerHeight / 2;

      const rotateY = (x - centerX) / 70;
      const rotateX = -(y - centerY) / 70;

      cards.forEach((card) => {
        const img = card.querySelector("img");
        if (img)
          img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      });
    };

    const handleMouseLeave = () => {
      cards.forEach((card) => {
        const img = card.querySelector("img");
        if (img) img.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
      });
    };

    document.addEventListener("mousemove", handleCardMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    /**
     * ABOUT US SLIDER
     */
    const nextDom = document.getElementById("next");
    const prevDom = document.getElementById("prev");
    const carouselDom = document.querySelector(".carousel");
    const SliderDom = carouselDom?.querySelector(".carousel .list");
    const thumbnailBorderDom = carouselDom?.querySelector(".carousel .thumbnail");
    let thumbnailItemsDom = thumbnailBorderDom?.querySelectorAll(".item");
    let timeRunning = 3000;
    let timeAutoNext = 7000;

    if (thumbnailBorderDom && thumbnailItemsDom?.length) {
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    }

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextDom?.click();
    }, timeAutoNext);

    const showSlider = (type) => {
      const SliderItemsDom = SliderDom?.querySelectorAll(".carousel .list .item");
      let thumbnailItemsDom = document.querySelectorAll(".carousel .thumbnail .item");

      if (type === "next") {
        SliderDom?.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom?.appendChild(thumbnailItemsDom[0]);
        carouselDom?.classList.add("next");
      } else {
        SliderDom?.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom?.prepend(
          thumbnailItemsDom[thumbnailItemsDom.length - 1]
        );
        carouselDom?.classList.add("prev");
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom?.classList.remove("next");
        carouselDom?.classList.remove("prev");
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom?.click();
      }, timeAutoNext);
    };

    nextDom?.addEventListener("click", () => showSlider("next"));
    prevDom?.addEventListener("click", () => showSlider("prev"));

    /**
     * CLEANUP
     */
    return () => {
      removeEventOnElements(navTogglers, "click", toggleNavbar);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mousemove", handleCardMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      heroSliderNextBtn?.removeEventListener("click", slideNext);
      heroSliderPrevBtn?.removeEventListener("click", slidePrev);
      nextDom?.removeEventListener("click", () => showSlider("next"));
      prevDom?.removeEventListener("click", () => showSlider("prev"));
      clearInterval(autoSlideInterval);
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, []);

  return (
    <>

      {/* -#HEADER */}

      <header class="header" data-header>
        <div class="container">

          <a href="#" class="logo">
            <img src={Logo} width="160" height="50" alt="Dochub - Home" />
          </a>

          <nav class="navbar" data-navbar>

            <button class="close-btn" aria-label="close menu" data-nav-toggler>
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>

            <a href="#" class="logo">
              <img src={Logo} width="160" height="50" alt="Dochub - Home" />
            </a>

            <ul class="navbar-list">

              <li class="navbar-item">
                <a href="#home" class="navbar-link hover-underline active">
                  <div class="separator"></div>

                  <span class="span">Home</span>
                </a>
              </li>

              <li class="navbar-item">
                <a href="#all_doctor" class="navbar-link hover-underline">
                  <div class="separator"></div>

                  <span class="span">ALL DOCTORS</span>
                </a>
              </li>

              <li class="navbar-item">
                <a href="#about-us" class="navbar-link hover-underline">
                  <div class="separator"></div>

                  <span class="span">About Us</span>
                </a>
              </li>

              <li class="navbar-item">
                <a href="#connect" class="navbar-link hover-underline">
                  <div class="separator"></div>

                  <span class="span">Contact</span>
                </a>
              </li>

            </ul>

          </nav>

          <NavLink className="btn btn-secondary" to="/doctorselection">
            <span className="text text-1">Find A DOCTOR</span>
            <span className="text text-2" aria-hidden="true">
              Find A Doctor
            </span>
          </NavLink>

          {/* <a href="#" class="btn btn-secondary">
            <span class="text text-1">Find A DOCTOR</span>

            <span class="text text-2" aria-hidden="true">Find A Doctor</span>
          </a> */}

          <button class="nav-open-btn" aria-label="open menu" data-nav-toggler>
            <span class="line line-1"></span>
            <span class="line line-2"></span>
            <span class="line line-3"></span>
          </button>

          <div class="overlay" data-nav-toggler data-overlay></div>

        </div>
      </header>

      <main>
        <article>

          {/* <!-- 
            - #HERO
          --> */}

          <section class="hero text-center" aria-label="home" id="home">

            <ul class="hero-slider" data-hero-slider>

              <li class="slider-item active" data-hero-slider-item>

                <div class="slider-bg">
                  <img src={HeroSlide1} width="1880" height="950" alt="" class="img-cover" />
                </div>

                <p class="label-2 section-subtitle slider-reveal">Book Anywhere</p>

                <h1 class="display-1 hero-title slider-reveal">
                  The smarter way to<br />
                  see your doctor
                </h1>

                <p class="body-2 hero-text slider-reveal">
                  Say goodbye to waiting rooms
                </p>

                <NavLink to="/doctorselection" className="btn btn-primary slider-reveal">
                  <span class="text text-1">View Our Doctors</span>

                  <span class="text text-2" aria-hidden="true">View Our Doctors</span>
                </NavLink>

              </li>

              <li class="slider-item" data-hero-slider-item>

                <div class="slider-bg">
                  <img src={HeroSlide2} width="1880" height="950" alt="" class="img-cover" />
                </div>

                <p class="label-2 section-subtitle slider-reveal">delightful experience</p>

                <h1 class="display-1 hero-title slider-reveal">
                  Skip the wait <br />
                  see your doctor
                </h1>

                <p class="body-2 hero-text slider-reveal">
                  Say goodbye to waiting rooms
                </p>

                <NavLink to="/doctorselection" className="btn btn-primary slider-reveal">
                  <span class="text text-1">View Our Doctors</span>

                  <span class="text text-2" aria-hidden="true">View Our Doctors</span>
                </NavLink>

              </li>

              <li class="slider-item" data-hero-slider-item>

                <div class="slider-bg">
                  <img src={HeroSlide3} width="1880" height="950" alt="" class="img-cover" />
                </div>

                <p class="label-2 section-subtitle slider-reveal">Your wellness, one click away</p>

                <h1 class="display-1 hero-title slider-reveal">
                  Where healing begins <br />
                  with booking
                </h1>

                <p class="body-2 hero-text slider-reveal">
                  Say goodbye to waiting rooms
                </p>

                <NavLink to="/doctorselection" className="btn btn-primary slider-reveal">
                  <span class="text text-1">View Our Doctors</span>

                  <span class="text text-2" aria-hidden="true">View Our Doctors</span>
                </NavLink>

              </li>

            </ul>

            <button class="slider-btn prev" aria-label="slide to previous" data-prev-btn>
              <ion-icon name="chevron-back"></ion-icon>
            </button>

            <button class="slider-btn next" aria-label="slide to next" data-next-btn>
              <ion-icon name="chevron-forward"></ion-icon>
            </button>

            <NavLink to="/doctorselection" className="hero-btn has-after">
              <img src={BookingIcon} width="48" height="48" alt="booking icon" />

              <span class="label-2 text-center span">Book A Doctor</span>
            </NavLink>

          </section>

          <section class="section service" aria-label="service">
            <div class="doc-ele1">
              <img src={DocEle4} alt="" />
            </div>

            <div class="doc-ele2">
              <img src={DocEle7} alt="" />
            </div>

            <div class="cate-head">
              <div class="cate-content">
                <h1>Find by Speciality</h1>
                <p>
                  Simply browse through our extensive list of trusted doctors,<br />
                  schedule your appointment hassle-free.
                </p>
              </div>
            </div>

            <div class="cate-logo">
              <NavLink to="/doctorselection" className="logo-item">
                <div class="gp">
                  <img src={Category1} alt="General Physician" />
                </div>
                <p>General Physician</p>
              </NavLink>

              <NavLink to="/doctorselection" className="logo-item">
                <div class="gp">
                  <img src={Category2} alt="Dentist" />
                </div>
                <p>Dentist</p>
              </NavLink>

              <NavLink to="/doctorselection" className="logo-item">
                <div class="gp">
                  <img src={Category3} alt="Gynecologist" />

                </div>
                <p>Gynecologist</p>
              </NavLink>

              <NavLink to="/doctorselection" className="logo-item">
                <div class="gp">
                  <img src={Category4} alt="Orthopedic" />
                </div>
                <p>Orthopedic</p>
              </NavLink>

              <NavLink to="/doctorselection" className="logo-item">
                <div class="gp">
                  <img src={Category5} alt="Cardiologist" />
                </div>
                <p>Cardiologist</p>
              </NavLink>
            </div>

          </section>

          <section class="top-doc" id="all_doctor">
            <div class="cate-head">
              <div class="cate-content">
                <h1>Top Doctors To Book</h1>
                <p>
                  Simply browse through our extensive list of trusted doctors
                </p>
              </div>
            </div>
            <div class="blob"></div>

            <div class="card-grid-wrapper">

              <div class="card">
                <div class="card-content">
                  <div class="card-image">
                    <div class="card-image-container">
                      <img src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg" alt="Profile Image" />
                    </div>
                    <div class="card-glow"></div>
                  </div>
                  <div class="card-info">
                    <h2 class="card-name">Sarah Anderson</h2>
                    <p class="card-title">General Physician</p>

                    <div class="card-stats">
                      <div class="stat">
                        <span class="stat-value">7y</span>
                        <span class="stat-label">Exp</span>
                      </div>
                      <div class="stat">
                        <span class="stat-value">18.3k</span>
                        <span class="stat-label">Rating</span>
                      </div>

                      <div class="stat">
                        <span class="doc-available"></span>
                        <span class="stat-label">Available</span>
                      </div>

                      {/* <div class="stat">
                        <span class="doc-notavailable"></span>
                        <span class="stat-label">Not Available</span>
                      </div> */}

                    </div>

                    <div class="card-actions">
                      {/* <button class="action-button primary">
                        <span>Book</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="8.5" cy="7" r="4"></circle>
                          <line x1="20" y1="8" x2="20" y2="14"></line>
                          <line x1="23" y1="11" x2="17" y2="11"></line>
                        </svg>
                      </button> */}

                      <NavLink to="/bookappointment">
                        <button class="action-button primary">
                          <span>Book</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="8.5" cy="7" r="4"></circle>
                            <line x1="20" y1="8" x2="20" y2="14"></line>
                            <line x1="23" y1="11" x2="17" y2="11"></line>
                          </svg>
                        </button>
                      </NavLink>

                      <button class="action-button secondary">
                        <span>Message</span>
                        {/* <!-- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path
                            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                          </path>
                        </svg> --> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-content">
                  <div class="card-image">
                    <div class="card-image-container">
                      <img src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg" alt="Profile Image" />
                    </div>
                    <div class="card-glow"></div>
                  </div>
                  <div class="card-info">
                    <h2 class="card-name">Sarah Anderson</h2>
                    <p class="card-title">General Physician</p>

                    <div class="card-stats">
                      <div class="stat">
                        <span class="stat-value">6.5y</span>
                        <span class="stat-label">Exp</span>
                      </div>
                      <div class="stat">
                        <span class="stat-value">18.3k</span>
                        <span class="stat-label">Rating</span>
                      </div>
                      {/* <!-- <div class="stat">
                        <span class="doc-available"></span>
                        <span class="stat-label">Available</span>
                      </div> --> */}

                      <div class="stat">
                        <span class="doc-notavailable"></span>
                        <span class="stat-label">Not Available</span>
                      </div>

                    </div>

                    <div class="card-actions">
                      <NavLink to="/bookappointment">
                        <button class="action-button primary">
                          <span>Book</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="8.5" cy="7" r="4"></circle>
                            <line x1="20" y1="8" x2="20" y2="14"></line>
                            <line x1="23" y1="11" x2="17" y2="11"></line>
                          </svg>
                        </button>
                      </NavLink>
                      <button class="action-button secondary">
                        <span>Message</span>
                        {/* <!-- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path
                            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                          </path>
                        </svg> --> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-content">
                  <div class="card-image">
                    <div class="card-image-container">
                      <img src="https://images.pexels.com/photos/5214995/pexels-photo-5214995.jpeg" alt="Profile Image" />
                    </div>
                    <div class="card-glow"></div>
                  </div>
                  <div class="card-info">
                    <h2 class="card-name">Sarah Anderson</h2>
                    <p class="card-title">General Physician</p>

                    <div class="card-stats">
                      <div class="stat">
                        <span class="stat-value">7y</span>
                        <span class="stat-label">Exp</span>
                      </div>
                      <div class="stat">
                        <span class="stat-value">18.3k</span>
                        <span class="stat-label">Rating</span>
                      </div>
                      {/* <!-- <div class="stat">
                        <span class="doc-available"></span>
                        <span class="stat-label">Available</span>
                      </div> --> */}

                      <div class="stat">
                        <span class="doc-available"></span>
                        <span class="stat-label">Available</span>
                      </div>

                    </div>

                    <div class="card-actions">
                    <NavLink to="/bookappointment">
                        <button class="action-button primary">
                          <span>Book</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="8.5" cy="7" r="4"></circle>
                            <line x1="20" y1="8" x2="20" y2="14"></line>
                            <line x1="23" y1="11" x2="17" y2="11"></line>
                          </svg>
                        </button>
                      </NavLink>
                      <button class="action-button secondary">
                        <span>Message</span>
                        {/* <!-- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path
                            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                          </path>
                        </svg> --> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-content">
                  <div class="card-image">
                    <div class="card-image-container">
                      <img src="https://images.pexels.com/photos/4270363/pexels-photo-4270363.jpeg" alt="Profile Image" />
                    </div>
                    <div class="card-glow"></div>
                  </div>
                  <div class="card-info">
                    <h2 class="card-name">Sarah Anderson</h2>
                    <p class="card-title">General Physician</p>

                    <div class="card-stats">
                      <div class="stat">
                        <span class="stat-value">6y</span>
                        <span class="stat-label">Exp</span>
                      </div>
                      <div class="stat">
                        <span class="stat-value">18.3k</span>
                        <span class="stat-label">Rating</span>
                      </div>
                      {/* <!-- <div class="stat">
                        <span class="doc-available"></span>
                        <span class="stat-label">Available</span>
                      </div> --> */}

                      <div class="stat">
                        <span class="doc-notavailable"></span>
                        <span class="stat-label">Available</span>
                      </div>

                    </div>

                    <div class="card-actions">
                      <NavLink to="/bookappointment">
                        <button class="action-button primary">
                          <span>Book</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="8.5" cy="7" r="4"></circle>
                            <line x1="20" y1="8" x2="20" y2="14"></line>
                            <line x1="23" y1="11" x2="17" y2="11"></line>
                          </svg>
                        </button>
                      </NavLink>
                      <button class="action-button secondary">
                        <span>Message</span>
                        {/* <!-- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path
                            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                          </path>
                        </svg> --> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-content">
                  <div class="card-image">
                    <div class="card-image-container">
                      <img src="https://images.pexels.com/photos/32351311/pexels-photo-32351311.jpeg" alt="Profile Image" />
                    </div>
                    <div class="card-glow"></div>
                  </div>
                  <div class="card-info">
                    <h2 class="card-name">Sarah Anderson</h2>
                    <p class="card-title">General Physician</p>

                    <div class="card-stats">
                      <div class="stat">
                        <span class="stat-value">8y</span>
                        <span class="stat-label">Exp</span>
                      </div>
                      <div class="stat">
                        <span class="stat-value">18.3k</span>
                        <span class="stat-label">Rating</span>
                      </div>
                      {/* <!-- <div class="stat">
                        <span class="doc-available"></span>
                        <span class="stat-label">Available</span>
                      </div> --> */}

                      <div class="stat">
                        <span class="doc-available"></span>
                        <span class="stat-label">Available</span>
                      </div>

                    </div>

                    <div class="card-actions">
                      <NavLink to="/bookappointment">
                        <button class="action-button primary">
                          <span>Book</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="8.5" cy="7" r="4"></circle>
                            <line x1="20" y1="8" x2="20" y2="14"></line>
                            <line x1="23" y1="11" x2="17" y2="11"></line>
                          </svg>
                        </button>
                      </NavLink>
                      <button class="action-button secondary">
                        <span>Message</span>
                        {/* <!-- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path
                            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                          </path>
                        </svg> --> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-content">
                  <div class="card-image">
                    <div class="card-image-container">
                      <img src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg" alt="Profile Image" />
                    </div>
                    <div class="card-glow"></div>
                  </div>
                  <div class="card-info">
                    <h2 class="card-name">Sarah Anderson</h2>
                    <p class="card-title">General Physician</p>

                    <div class="card-stats">
                      <div class="stat">
                        <span class="stat-value">7y</span>
                        <span class="stat-label">Exp</span>
                      </div>
                      <div class="stat">
                        <span class="stat-value">18.3k</span>
                        <span class="stat-label">Rating</span>
                      </div>
                      {/* <!-- <div class="stat">
                        <span class="doc-available"></span>
                        <span class="stat-label">Available</span>
                      </div> --> */}

                      <div class="stat">
                        <span class="doc-available"></span>
                        <span class="stat-label">Available</span>
                      </div>

                    </div>

                    <div class="card-actions">
                      <NavLink to="/bookappointment">
                        <button class="action-button primary">
                          <span>Book</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="8.5" cy="7" r="4"></circle>
                            <line x1="20" y1="8" x2="20" y2="14"></line>
                            <line x1="23" y1="11" x2="17" y2="11"></line>
                          </svg>
                        </button>
                      </NavLink>
                      <button class="action-button secondary">
                        <span>Message</span>
                        {/* <!-- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path
                            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                          </path>
                        </svg> --> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-content">
                  <div class="card-image">
                    <div class="card-image-container">
                      <img src="https://images.pexels.com/photos/5214995/pexels-photo-5214995.jpeg" alt="Profile Image" />
                    </div>
                    <div class="card-glow"></div>
                  </div>
                  <div class="card-info">
                    <h2 class="card-name">Sarah Anderson</h2>
                    <p class="card-title">General Physician</p>

                    <div class="card-stats">
                      <div class="stat">
                        <span class="stat-value">7y</span>
                        <span class="stat-label">Exp</span>
                      </div>
                      <div class="stat">
                        <span class="stat-value">18.3k</span>
                        <span class="stat-label">Rating</span>
                      </div>
                      {/* <!-- <div class="stat">
                        <span class="doc-available"></span>
                        <span class="stat-label">Available</span>
                      </div> --> */}

                      <div class="stat">
                        <span class="doc-available"></span>
                        <span class="stat-label">Available</span>
                      </div>

                    </div>

                    <div class="card-actions">
                      <NavLink to="/bookappointment">
                        <button class="action-button primary">
                          <span>Book</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="8.5" cy="7" r="4"></circle>
                            <line x1="20" y1="8" x2="20" y2="14"></line>
                            <line x1="23" y1="11" x2="17" y2="11"></line>
                          </svg>
                        </button>
                      </NavLink>
                      <button class="action-button secondary">
                        <span>Message</span>
                        {/* <!-- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path
                            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                          </path>
                        </svg> --> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-content">
                  <div class="card-image">
                    <div class="card-image-container">
                      <img src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg" alt="Profile Image" />
                    </div>
                    <div class="card-glow"></div>
                  </div>
                  <div class="card-info">
                    <h2 class="card-name">Sarah Anderson</h2>
                    <p class="card-title">General Physician</p>

                    <div class="card-stats">
                      <div class="stat">
                        <span class="stat-value">6.5y</span>
                        <span class="stat-label">Exp</span>
                      </div>
                      <div class="stat">
                        <span class="stat-value">18.3k</span>
                        <span class="stat-label">Rating</span>
                      </div>
                      {/* <!-- <div class="stat">
                        <span class="doc-available"></span>
                        <span class="stat-label">Available</span>
                      </div> --> */}

                      <div class="stat">
                        <span class="doc-notavailable"></span>
                        <span class="stat-label">Not Available</span>
                      </div>

                    </div>

                    <div class="card-actions">
                      <NavLink to="/bookappointment">
                        <button class="action-button primary">
                          <span>Book</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="8.5" cy="7" r="4"></circle>
                            <line x1="20" y1="8" x2="20" y2="14"></line>
                            <line x1="23" y1="11" x2="17" y2="11"></line>
                          </svg>
                        </button>
                      </NavLink>
                      <button class="action-button secondary">
                        <span>Message</span>
                        {/* <!-- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path
                            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                          </path>
                        </svg> --> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- <button class="readmore-btn">
                <span class="book-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#111111" viewBox="0 0 126 75" class="book">
                    <rect stroke-width="3" stroke="#fff" rx="7.5" height="70" width="121" y="2.5" x="2.5"></rect>
                    <line stroke-width="3" stroke="#fff" y2="75" x2="63.5" x1="63.5"></line>
                    <path stroke-linecap="round" stroke-width="4" stroke="#fff" d="M25 20H50"></path>
                    <path stroke-linecap="round" stroke-width="4" stroke="#fff" d="M101 20H76"></path>
                    <path stroke-linecap="round" stroke-width="4" stroke="#fff" d="M16 30L50 30"></path>
                    <path stroke-linecap="round" stroke-width="4" stroke="#fff" d="M110 30L76 30"></path>
                  </svg>
      
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 65 75" class="book-page">
                    <path stroke-linecap="round" stroke-width="4" stroke="#fff" d="M40 20H15"></path>
                    <path stroke-linecap="round" stroke-width="4" stroke="#fff" d="M49 30L15 30"></path>
                    <path stroke-width="3" stroke="#fff"
                      d="M2.5 2.5H55C59.1421 2.5 62.5 5.85786 62.5 10V65C62.5 69.1421 59.1421 72.5 55 72.5H2.5V2.5Z"></path>
                  </svg>
                </span>
                <span class="doc-text"> See more </span>
              </button> --> */}

              <NavLink to="/doctorselection" className="btn-shine">See More</NavLink>
            </div>


          </section>

          <section class="strength">
            <div class="cate-head">
              <div class="cate-content">
                <h1>Our Strength</h1>
                <p>
                  Why choose us
                </p>
              </div>
            </div>

            <div class="strength-wrap">
              <div class="strength-card">
                <div class="strength-content">
                  <div class="back">
                    <div class="back-content">
                      <img src={Strength1} alt="" />
                    </div>
                  </div>
                  <div class="front">

                    <div class="img">
                      <div class="strength-circle">
                      </div>
                      <div class="strength-circle" id="right">
                      </div>
                      <div class="strength-circle" id="bottom">
                      </div>
                    </div>

                    <div class="front-content">
                      <div class="description">
                        <div class="title">
                          <h1 class="title">
                            <strong>Easy Booking</strong>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="strength-card">
                <div class="strength-content">
                  <div class="back">
                    <div class="back-content">
                      <img src={Strength2} alt="" />
                    </div>
                  </div>
                  <div class="front">

                    <div class="img">
                      <div class="strength-circle">
                      </div>
                      <div class="strength-circle" id="right">
                      </div>
                      <div class="strength-circle" id="bottom">
                      </div>
                    </div>

                    <div class="front-content">
                      <div class="description">
                        <div class="title">
                          <h1 class="title">
                            <strong>Trusted Doctors</strong>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="strength-card">
                <div class="strength-content">
                  <div class="back">
                    <div class="back-content">
                      <img src={Strength3} alt="" />
                    </div>
                  </div>
                  <div class="front">

                    <div class="img">
                      <div class="strength-circle">
                      </div>
                      <div class="strength-circle" id="right">
                      </div>
                      <div class="strength-circle" id="bottom">
                      </div>
                    </div>

                    <div class="front-content">
                      <div class="description">
                        <div class="title">
                          <h1 class="title">
                            <strong>24/7 Available</strong>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="strength-card">
                <div class="strength-content">
                  <div class="back">
                    <div class="back-content">
                      <img src={Strength4} alt="" />
                    </div>
                  </div>
                  <div class="front">

                    <div class="img">
                      <div class="strength-circle">
                      </div>
                      <div class="strength-circle" id="right">
                      </div>
                      <div class="strength-circle" id="bottom">
                      </div>
                    </div>

                    <div class="front-content">
                      <div class="description">
                        <div class="title">
                          <h1 class="title">
                            <strong>Secure Records</strong>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </section>

          <section class="about-us" id="about-us">
            <div class="carousel">
              <div class="list">
                <div class="item">
                  <img src={AboutSlide1} />
                  <div class="content">
                    <div class="author">DOCHUB</div>
                    <div class="title">Where Technology Meets Care</div>
                    <div class="topic">OUT STORY</div>
                    <div class="des">
                      Founded in 2020, Dochub started as a simple idea to
                      make doctor appointments easier. What began as a local
                      solution has grown into a trusted platform connecting thousands of
                      patients with reliable healthcare providers — quickly and effortlessly.
                    </div>
                    <div class="buttons">
                      <button>SEE MORE</button>
                      <button>SUBSCRIBE</button>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <img src={AboutSlide2} />
                  <div class="content">
                    <div class="author">DOCHUB</div>
                    <div class="title">Where Technology Meets Care</div>
                    <div class="topic">OUT STORY</div>
                    <div class="des">
                      It all started in a small clinic where long queues and missed appointments
                      were everyday challenges. Seeing the chaos firsthand, a group of young tech
                      enthusiasts decided to create Dochub — a platform that would bring order, ease,
                      and efficiency to doctor visits. Today, Dochub is helping patients nationwide skip
                      the lines and see the right doctors, right on time.
                    </div>
                    <div class="buttons">
                      <button>SEE MORE</button>
                      <button>SUBSCRIBE</button>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <img src={AboutSlide3} />
                  <div class="content">
                    <div class="author">DOCHUB</div>
                    <div class="title">Where Technology Meets Care</div>
                    <div class="topic">OUT STORY</div>
                    <div class="des">
                      When one of our founders struggled to book a specialist
                      during a family medical emergency, they realized how fragmented
                      the healthcare appointment system was. That moment inspired the birth
                      of Dochub — a digital bridge between patients and doctors. What began as
                      a personal frustration has become a solution trusted by thousands.
                    </div>
                    <div class="buttons">
                      <button>SEE MORE</button>
                      <button>SUBSCRIBE</button>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <img src={AboutSlide4} />
                  <div class="content">
                    <div class="author">DOCHUB</div>
                    <div class="title">Where Technology Meets Care</div>
                    <div class="topic">OUT STORY</div>
                    <div class="des">
                      Dochub was born during the COVID-19 pandemic, a time
                      when safe, timely access to doctors was more important than ever.
                      We built a simple yet powerful platform to help patients connect with
                      healthcare professionals virtually and in person. Since then, Dochub has
                      grown into a reliable partner in everyday health.
                    </div>
                    <div class="buttons">
                      <button>SEE MORE</button>
                      <button>SUBSCRIBE</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="thumbnail">
                <div class="item">
                  <img src={AboutSlide1} />
                  <div class="content">
                    <div class="title">
                      A Humble Beginning in a Small Clinic
                    </div>
                  </div>
                </div>
                <div class="item">
                  <img src={AboutSlide2} />
                  <div class="content">
                    <div class="title">
                      A Personal Emergency Sparked the Idea
                    </div>
                  </div>
                </div>
                <div class="item">
                  <img src={AboutSlide3} />
                  <div class="content">
                    <div class="title">
                      Born During the Pandemic
                    </div>
                  </div>
                </div>
                <div class="item">
                  <img src={AboutSlide4} />
                  <div class="content">
                    <div class="title">
                      From a Student Project to a National Service
                    </div>
                  </div>
                </div>
              </div>

              <div className="arrows">
                <button id="prev">&lt;</button>
                <button id="next">&gt;</button>
              </div>
              <div class="time"></div>
            </div>
          </section>

          <section class="section testi text-center has-bg-image"
            style={{ backgroundImage: `url(${testimonialBg})` }} aria-label="testimonials">
            <div class="container">

              <div class="quote">”</div>

              <p class="headline-2 testi-text">
                Booking my doctor’s appointment was so simple and fast. I found a great specialist
                nearby and even got reminders before my visit. This site saved me so much time!
              </p>

              <div class="wrapper">
                <div class="separator"></div>
                <div class="separator"></div>
                <div class="separator"></div>
              </div>

              <div class="profile">
                <img src={Avater} width="100" height="100" loading="lazy" alt="Sam Jhonson"
                  class="img" />

                <p class="label-2 profile-name">Riya Sharma</p>
              </div>

            </div>
          </section>

          <section className="reservation" id="connect">
            <div className="container">
              <div className="form reservation-form bg-black-10">
                <form action="" className="form-left">
                  <h2 className="headline-1 text-center">Contact Us</h2>

                  <p className="form-text text-center">
                    Appointment request{" "}
                    <a href="tel:+88123123456" className="link">
                      +88-123-123456
                    </a>
                  </p>

                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      autoComplete="off"
                      className="input-field"
                      required
                    />

                    <input
                      type="email"
                      name="phone"
                      placeholder="Email Address"
                      autoComplete="off"
                      className="input-field"
                      required
                    />
                  </div>

                  <textarea
                    name="message"
                    placeholder="Message"
                    autoComplete="off"
                    className="input-field"
                    required
                  ></textarea>

                  <button type="submit" className="btn btn-secondary">
                    <span className="text text-1">Post Your Query</span>
                    <span className="text text-2" aria-hidden="true">
                      Post Your Query
                    </span>
                  </button>
                </form>

                <div
                  className="form-right text-center"
                  style={{ backgroundImage: `url(${formPattern})` }}
                >
                  <div className="form-right-container">
                    <p className="contact-label">Appointment Request</p>

                    <a
                      href="tel:+88123123456"
                      className="body-1 contact-number hover-underline"
                    >
                      +88-123-123456
                    </a>

                    <div className="separator"></div>

                    <p className="contact-label">Headquarters</p>

                    <address className="body-4">
                      HealthCare Lane, Wellness City,
                      <br />
                      London 9578, UK
                    </address>

                    <p className="contact-label">Consultation Hours</p>

                    <p className="body-4">
                      Monday to Sunday <br />
                      11.00 am - 2.30pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer class="footer section has-bg-image text-center"
            style={{ backgroundImage: `url(${footerBg})` }}>
            <div class="container">

              <div class="footer-top grid-list">

                <div class="footer-brand has-before has-after">

                  <a href="#" class="logo">
                    <img src={Logo} width="160" height="50" loading="lazy" alt="grilli home" />
                  </a>

                  <address class="body-4">
                    HealthCare Lane, Wellness City,London 9578, UK
                  </address>

                  <a href="mailto:booking@dochub.com" class="body-4 contact-link">booking@dochub.com</a>

                  <a href="tel:+88123123456" class="body-4 contact-link">Any Enquiry : +88-123-123456</a>

                  <p class="body-4">
                    Open : 11.00 am - 2.30pm
                  </p>

                  <div class="wrapper">
                    <div class="separator"></div>
                    <div class="separator"></div>
                    <div class="separator"></div>
                  </div>

                  <p class="title-1">Get News & Offers</p>

                  <p class="label-1">
                    Subscribe us & Get <span class="span">25% Off.</span>
                  </p>

                  <form action="" class="input-wrapper">
                    <div class="icon-wrapper">
                      <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>

                      <input type="email" name="email_address" placeholder="Your email" autocomplete="off"
                        class="input-field" />
                    </div>

                    <button type="submit" class="btn btn-secondary">
                      <span class="text text-1">Subscribe</span>

                      <span class="text text-2" aria-hidden="true">Subscribe</span>
                    </button>
                  </form>

                </div>

                <ul class="footer-list">

                  <li>
                    <a href="#home" class="label-2 footer-link hover-underline">Home</a>
                  </li>

                  <li>
                    <a href="#all_doctor" class="label-2 footer-link hover-underline">All Doctors</a>
                  </li>

                  <li>
                    <a href="#about-us" class="label-2 footer-link hover-underline">About Us</a>
                  </li>

                  <li>
                    <a href="#connect" class="label-2 footer-link hover-underline">Contact</a>
                  </li>

                </ul>

                <ul class="footer-list">

                  <li>
                    <a href="#" class="label-2 footer-link hover-underline">Facebook</a>
                  </li>

                  <li>
                    <a href="#" class="label-2 footer-link hover-underline">Instagram</a>
                  </li>

                  <li>
                    <a href="#" class="label-2 footer-link hover-underline">Twitter</a>
                  </li>

                  <li>
                    <a href="#" class="label-2 footer-link hover-underline">Youtube</a>
                  </li>

                </ul>

              </div>

              <div class="footer-bottom">

                <p class="copyright">
                  &copy; 2025 DOCHUB. All Rights Reserved | Crafted by <a
                    href="https://www.linkedin.com/in/adhip-halder-505835246/" target="_blank" class="link">Adhip Halder</a>
                </p>

              </div>

            </div>
          </footer>




        </article>
      </main>

      {/* <!-- 
        - #BACK TO TOP
      --> */}

      <a href="#top" class="back-top-btn active" aria-label="back to top" data-back-top-btn>
        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
      </a>

    </>
  );
}

export default Homepage;
