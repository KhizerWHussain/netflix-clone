"use client";
import React, { useEffect, useRef } from "react";

interface Prop {
  movie: any;
  onClose: () => void;
}

const MovieModal = ({ movie, onClose }: Prop) => {
  if (!movie) return null;

  const modalRef: any | null = useRef(null);

  const handleClickOutside = (event: any) => {
    if (modalRef?.current && !modalRef?.current?.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-30">
      <div className="bg-[#0B0B0B] rounded-lg p-4 w-[40rem] flex flex-col justify-center relative h-[36rem]">
        <button
          className="absolute top-2 right-2 text-gray-500 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt={movie.title}
          className="h-96 w-full mb-4"
        />
        <div className="flex flex-col gap-6 pl-6 pr-6">
          <p className="">{movie?.overview}</p>
          <button className="bg-primary p-2 rounded-md text-[14px] w-32 hover:bg-red-700 z-50">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
