import axios from "axios";
import React, { useEffect, useState } from "react";

function Movielist() {

const [movielist, setMovielist] = useState([])

useEffect(() => {
 axios.get("http://localhost:3000/movies").then((res) => {
   setMovielist(res.data);
   console.log(res.data);
 });
}, [])


  return (
    <div>
     
      <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Yoke Movie List</h2>
            <p className="font-serif text-sm dark:text-gray-400">
              Qualisque erroribus usu at, duo te agam soluta mucius.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {movielist?.map((movie) => (
              <article
                key={movie?.id}
                className="flex flex-col dark:bg-gray-900"
              >
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <img
                    alt=""
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src={movie?.Images[0]}
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                 
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                  >
                    {movie?.Genre}
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                    {movie?.Title}
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                    <span>{movie?.Year}</span>
                    <span>{movie?.imdbRating}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Movielist;
