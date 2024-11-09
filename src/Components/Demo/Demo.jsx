import React from 'react';

const Demo = ({ name }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-[40px] p-20 ">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">{name}</h1>
        <p className="text-center text-gray-600">Welcome to the {name} component. This is a simple demo of this page </p>
      </div>
    </div>
  );
};

export default Demo;