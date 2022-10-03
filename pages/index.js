import Head from "next/head";

export default function Home() {
  return (
    <div className="container-fylo">
      <Head>
        <title>Fylo</title>
        <meta
          name="description"
          content="Fylo landing page challenge by front end mentor"
        />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>

      <header className="navbar flex items-center justify-between py-7 px-6 sm:py-12 sm:px-16">
        <img src="/images/logo.svg" alt="Fylo" className=" w-24 sm:w-40" />
        <ul className="flex items-center gap-5 sm:gap-12 text-sm sm:text-base text-desaturatedBlue">
          <li>
            <a href="#" className=" hover:text-desaturatedBlue">
              Features
            </a>
          </li>
          <li>
            <a href="#" className=" hover:text-desaturatedBlue">
              Team
            </a>
          </li>
          <li>
            <a href="#" className=" hover:text-desaturatedBlue">
              Sign In
            </a>
          </li>
        </ul>
      </header>

      <main className="main mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  py-7 px-6 md:py-12 md:px-16 mb-32">
          <div>
            <h1 className=" text-3xl text-center md:text-left md:text-4xl text-veryDarkBlue font-heading font-bold mt-12">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className=" my-7 md:my-4 text-base text-center md:text-left">
              Fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
            <div>
              <form>
                <input
                  type="text"
                  className=" w-full sm:w-1/2 py-3 px-4 mb-4 sm:mb-0 border-black border outline-none mr-4 rounded placeholder:text-lightGray"
                  placeholder="Enter your email..."
                />
                <button className=" w-full sm:w-2/6 py-3 px-4 bg-brightBlue hover:bg-lightBrightBlue text-lightGrayishBlue rounded ">
                  Get Started
                </button>
              </form>
            </div>
          </div>
          <div className=" row-start-1 md:col-start-2">
            <img src="/images/illustration-1.svg" alt="" className="w-full" />
          </div>
        </div>

        <div className="testimonial bg-mobile-curve md:bg-desktop-curve px-6 py-28 md:pt-32 md:pb-24 md:px-16  grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="mt-10 mb-7 md:my-0 text-lg md:text-4xl text-center md:text-left text-veryDarkBlue font-heading font-bold">
              Stay Productive, wherever you are
            </h2>
            <p className="my-4 text-base">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="text-base mb-4">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>
            <div className="flex mx-auto md:mx-0 my-10 md:mt-0 items-center gap-1 md:mb-8 border-b border-b-cyan hover:border-b-lightCyan w-max">
              <a href="#" className=" text-cyan hover:text-lightCyan">
                See how Fylo works
              </a>
              <img src="/images/icon-arrow.svg" alt="" />
            </div>
            <div className=" bg-white w-full md:w-3/5 p-8 rounded-md shadow-xl">
              <img src="/images/icon-quotes.svg" alt="" className="mb-3" />
              <p className="card-text text-desaturatedBlue mb-3">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <div className=" flex items-center gap-3">
                <img
                  src="/images/avatar-testimonial.jpg"
                  alt=""
                  className=" w-7 h-7 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="testimonial-name">Kyle Burton</span>
                  <span className=" text-xs">Founder & CEO, Huddle</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row-start-1 md:col-start-2">
            <img
              src="/images/illustration-2.svg"
              alt=""
              className=" object-contain w-full"
            />
          </div>
        </div>
      </main>

      <section className="bg-desaturatedBlue py-7 px-6 md:py-16 md:px-16">
        <div className="grid grid-cols-1 my-10 md:my-0 md:grid-cols-2 text-center md:text-left text-white md:gap-16">
          <div className=" col-span-1 md:w-4/5">
            <h2 className="text-xl md:text-3xl font-heading font-bold text-white">
              Get early access today
            </h2>
            <p className="my-4 text-base text-lightGrayishBlue opacity-80">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </div>
          <div className=" col-span-1 ">
            <form className="flex flex-col justify-center">
              <input
                type="email"
                className=" md:w-9/12 mb-3 py-3 px-4 border-black border outline-none md:mr-4 rounded placeholder:text-lightGray text-black"
                placeholder="email@example.com"
              />
              <button className=" md:w-2/5 py-3 px-4 bg-brightBlue hover:bg-lightBrightBlue text-lightGrayishBlue rounded ">
                Get Started For Free
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer bg-veryDarkBlue py-20 px-16 text-lightGray">
        <img src="/images/logo1.svg" alt="" className=" mb-3 md:mb-0" />
        <div className="grid grid-cols-1 md:grid-cols-4 mt-6">
          <div className="mb-7 md:mb-0">
            <div className="flex items-center gap-4 mb-4">
              <img src="/images/icon-phone.svg" alt="" />
              <span>Phone: +1-543-123-4567</span>
            </div>
            <div className="flex items-center gap-4">
              <img src="/images/icon-email.svg" alt="" />
              <span>example@fylo.com</span>
            </div>
          </div>
          <div className="mb-7 md:mb-0">
            <ul className=" flex flex-col gap-3">
              <li>
                <a href="#" className=" hover:text-desaturatedBlue">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-desaturatedBlue">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-desaturatedBlue">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-desaturatedBlue">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-7 md:mb-0">
            <ul className=" flex flex-col gap-3">
              <li>
                <a href="#" className=" hover:text-desaturatedBlue">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-desaturatedBlue">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-desaturatedBlue">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#">
              <svg
                fill="hsl(0, 0%, 75%)"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
                className=" w-7 h-7 hover:fill-desaturatedBlue"
              >
                <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 32.380773 34.967178 39.306373 27 40.720703 L 27 29 L 30.625 29 C 31.129 29 31.555188 28.623047 31.617188 28.123047 L 31.992188 25.123047 C 32.028188 24.839047 31.938047 24.553891 31.748047 24.337891 C 31.559047 24.122891 31.287 24 31 24 L 27 24 L 27 20.5 C 27 19.397 27.897 18.5 29 18.5 L 31 18.5 C 31.552 18.5 32 18.053 32 17.5 L 32 14.125 C 32 13.607 31.604844 13.174906 31.089844 13.128906 C 31.030844 13.123906 29.619984 13 27.833984 13 C 23.426984 13 21 15.616187 21 20.367188 L 21 24 L 17 24 C 16.448 24 16 24.447 16 25 L 16 28 C 16 28.553 16.448 29 17 29 L 21 29 L 21 40.720703 C 13.032822 39.306373 7 32.380773 7 24 C 7 14.593391 14.593385 7 24 7 z" />
              </svg>
            </a>
            <a href="#">
              <svg
                fill="hsl(0, 0%, 75%)"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
                className=" w-7 h-7 hover:fill-desaturatedBlue"
              >
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 30.693359 14.058594 C 27.093054 14.058594 24.152344 16.998175 24.152344 20.597656 C 24.152344 20.622956 24.159856 20.646615 24.160156 20.671875 C 20.346071 20.164308 16.972078 18.281343 14.654297 15.439453 A 1.0001 1.0001 0 0 0 13.015625 15.568359 C 12.452734 16.536013 12.130859 17.663768 12.130859 18.857422 C 12.130859 19.919597 12.426761 20.906321 12.878906 21.796875 A 1.0001 1.0001 0 0 0 12.085938 22.773438 L 12.085938 22.84375 C 12.085938 24.777783 12.990963 26.452789 14.332031 27.652344 A 1.0001 1.0001 0 0 0 14.072266 28.677734 C 14.630704 30.41466 15.93241 31.774479 17.5625 32.541016 C 16.258408 33.150994 14.861087 33.587891 13.320312 33.587891 C 12.909515 33.587891 12.510187 33.564538 12.119141 33.517578 A 1.0001 1.0001 0 0 0 11.460938 35.353516 C 14.065405 37.024617 17.166795 38 20.490234 38 C 25.860882 38 30.105907 35.743874 32.943359 32.525391 C 35.780812 29.306907 37.253906 25.153083 37.253906 21.240234 C 37.253906 21.122724 37.248494 21.01029 37.246094 20.894531 C 38.219933 20.11274 39.135827 19.250444 39.830078 18.210938 A 1.0001 1.0001 0 0 0 38.705078 16.699219 C 38.866705 16.38464 39.095491 16.111528 39.205078 15.769531 A 1.0001 1.0001 0 0 0 37.744141 14.603516 C 36.869551 15.121731 35.886845 15.463383 34.869141 15.701172 C 33.725772 14.727018 32.30529 14.058594 30.693359 14.058594 z M 30.693359 16.058594 C 32.005547 16.058594 33.178321 16.606981 34.005859 17.490234 A 1.0001 1.0001 0 0 0 34.927734 17.789062 C 35.079649 17.759183 35.201682 17.662443 35.351562 17.626953 C 35.332963 17.638463 35.321514 17.658672 35.302734 17.669922 A 1.0001 1.0001 0 0 0 35.832031 19.527344 C 35.763341 19.579724 35.722335 19.662323 35.652344 19.712891 A 1.0001 1.0001 0 0 0 35.238281 20.566406 C 35.247781 20.79066 35.253906 21.015832 35.253906 21.240234 C 35.253906 24.645385 33.939657 28.371609 31.443359 31.203125 C 28.947059 34.03464 25.308587 36 20.490234 36 C 18.837046 36 17.2817 35.669687 15.800781 35.167969 C 17.643043 34.77762 19.387244 34.125203 20.816406 33.003906 A 1.0001 1.0001 0 0 0 20.21875 31.21875 C 18.803099 31.19304 17.712807 30.392345 16.898438 29.359375 C 17.197615 29.320665 17.507049 29.319275 17.792969 29.240234 A 1.0001 1.0001 0 0 0 17.724609 27.294922 C 16.073199 26.96164 14.784996 25.723029 14.3125 24.121094 C 14.7378 24.223448 15.110445 24.452375 15.5625 24.466797 A 1.0001 1.0001 0 0 0 16.150391 22.636719 C 14.930654 21.821102 14.130859 20.439709 14.130859 18.857422 C 14.130859 18.530423 14.306329 18.270522 14.371094 17.964844 C 17.211591 20.776703 20.99183 22.6429 25.248047 22.857422 A 1.0001 1.0001 0 0 0 26.271484 21.628906 C 26.193654 21.29976 26.152344 20.956387 26.152344 20.597656 C 26.152344 18.079138 28.173664 16.058594 30.693359 16.058594 z" />
              </svg>
            </a>
            <a href="#">
              <svg
                fill="hsl(0, 0%, 75%)"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
                className=" w-7 h-7 hover:fill-desaturatedBlue"
              >
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
