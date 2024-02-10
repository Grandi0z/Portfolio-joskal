import React, { useState } from 'react';
import { MyModal, XIcon } from '../../tools/features';
import { Link } from 'react-router-dom';


const ContactMe = () => {
  const [isModalOpen, setIsModalOpen] = useState(MyModal.setIsModalOpen);
  
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-800 bg-opacity-50">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md overflow-hidden mx-2 md:mx-0 dark:bg-gray-900">
        <div className="flex justify-between items-center px-6 py-4">
          <h2 className="text-2xl font-bold">{}</h2>
          <button
            size="icon"
            type="button"
            onClick={() => { setIsModalOpen((prev) => !prev); return isModalOpen; }}
          >
            <XIcon className="w-6 h-6" />
            <span className="sr-only">Close</span>
          </button>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-700 dark:text-gray-300">
            {}
          </p>
        </div>
        <div className="px-6 py-4 flex justify-between flex-col items-center">
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold m-auto">Technologies</h3>
               
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactMe;
