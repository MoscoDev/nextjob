import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="relative bg-deep-purple-accent-400">
      <div className="px-4 pt-12 mx-auto  md:max-w-full lg:max-w-full md:px-24 lg:px-8">
        <div className="max-w-screen-xl mx-auto grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Nextjobs</span>
              <img
                className="h-8"
                src={
                  "data:image/png;base64,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"
                }
                alt=""
              />
            </Link>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-deep-purple-50">
                I had noticed that both in the very poor and very rich extremes
                of society the mad were often allowed to mingle freely
              </p>
              <p className="mt-4 text-sm text-deep-purple-50">
                the easy and effective way to connect with movies.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Category
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    References
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Cherry
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Web
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    eCommerce
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Apples
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Nonprofit
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Educational
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Business
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Infopreneur
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Personal
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Wiki
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Forum
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-6 pb-6 bg-indigo-800 -mx-4 md:-mx-24 lg:-mx-8  sm:flex-row px-6">
          <p className="text-sm text-gray-100">
            © Copyright 2020 Yoke marketing. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="white" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="white" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="white" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
