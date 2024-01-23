import React, { useState } from 'react';
import { MyModal, aboutInfo, XIcon } from '../../tools/tools';

const ContactMe = () => {
  const [isModalOpen, setIsModalOpen] = useState(MyModal.setIsModalOpen);
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-800 bg-opacity-50">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md overflow-hidden mx-2 md:mx-0 dark:bg-gray-900">
        <div className="flex justify-between items-center px-6 py-4">
          <h2 className="text-2xl font-bold">Contact Me</h2>
          <button
            size="icon"
            type="button"
            onClick={() => {
              setIsModalOpen((prev) => !prev);
              return isModalOpen;
            }}
          >
            <XIcon className="w-6 h-6" />
            <span className="sr-only">Close</span>
          </button>
        </div>
        <div className="px-6 py-4">
          <div>
            <a
              className="bg-blue-500 shadow-lg shadow-blue-500/50 hover:bg-blue-600
                    hover:shadow-cyan-500/50 text-white py-2 px-4 rounded
                    dark:bg-blue-500 dark:shadow-lg dark:shadow-blue-500/50 dark:hover:bg-blue-600
                    dark:hover:shadow-cyan-500/50"
              rel="noreferrer"
            >
              Get in touch
            </a>
          </div>
          <div className="sm:max-w-[425px]">
            <p>
              Please fill out the form below and I&apos;ll get back to you as soon as
              possible.
            </p>
          </div>
          <form className="grid gap-4 py-4">
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
