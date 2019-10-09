import React, { Component } from 'react';

class Tailwind extends Component {
  render() {
    return (
      <div className="flex flex-wrap ">
        <div className="flex  items-center justify-center border border-red-500 w-full md:w-full lg:w-full bg-gray-500 h-40">
          <h1 className="sm:text-lg lg:text-5xl font-extrabold">
            Welcome to the movie database!
          </h1>
        </div>
        <div className="flex items-center justify-center border border-red-500  w-full md:w-1/2 lg:w-1/4 bg-gray-500 h-40">
          Col
        </div>
        <div className="flex items-center  justify-center border border-red-500  w-full md:w-1/2 lg:w-1/4 bg-gray-500 h-40">
          Col
        </div>
        <div className="flex  items-center justify-center border border-red-500  w-full md:w-1/2 lg:w-1/4 bg-gray-500 h-40">
          Col
        </div>
        <div className="flex  items-center justify-center border border-red-500  w-full md:w-1/2 lg:w-1/4 bg-gray-500 h-40">
          Col
        </div>
      </div>
    );
  }
}
export default Tailwind;
