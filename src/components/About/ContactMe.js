import React, { useRef, useState } from 'react';
import { XIcon } from '../../tools/features';
import emailjs from '@emailjs/browser';
import './contact_me.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Circles } from 'react-loader-spinner';
import { faEnvelopeCircleCheck, faRectangleXmark } from '@fortawesome/free-solid-svg-icons';

const ContactMe = ({ closeModal }) => {
  const [emailSent, setEmailSent] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const refForm = useRef();

  const handleCloseModal = () => {
    closeModal()
    setMessage('')
    setError(null)
    setEmailSent(null)
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        'service_cb3l138',
        'contact_form_njpci7g',
        refForm.current,
        'iowCyNFAmwFKZDxcH'
      )
      .then(
        () => {
          setMessage('Message successfully sent!');
          setEmailSent(true);
          setIsLoading(false);
          refForm.current.reset();
          // window.location.reload(false);
        },
        () => {
          setMessage('Failed to send the message, please try again');
          setEmailSent(false);
          setIsLoading(false);
          setError(true);
        }
      );
  };

  return (
    <div className="modal-container flex items-center justify-center mt-5 w-full">
      <div className="modal-content bg-white rounded-lg shadow-md overflow-hidden mx-2 md:mx-0 dark:bg-gray-900 w-full max-w-md">
        <div className="modal-header bg-gray-800 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Contact Me</h2>
          <button size="icon" type="button" onClick={handleCloseModal}>
            <XIcon className="w-6 h-6" />
            <span className="sr-only">Close</span>
          </button>
        </div>
        <div className="modal-body px-6 py-4">  
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul className="space-y-4">
                <li className="flex flex-wrap items-center space-y-4">
                  <input type="text" name="from_name" placeholder="Name" required className="w-full bg-gray-100 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-400 md:w-1/2 md:flex-grow md:flex-shrink-0 md:flex md:items-center md:space-x-4" />
                  <input type="email" name="from_email" placeholder="Email" required className="w-full bg-gray-100 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-400 md:w-1/2 md:flex-grow md:flex-shrink-0 md:flex md:items-center md:space-x-4" />
                </li>
                <li>
                  <input type="text" name="subject" placeholder="Subject" required className="w-full bg-gray-100 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-400" />
                </li>
                <li>
                  <textarea name="message" placeholder="Message" required className="w-full bg-gray-100 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-400" ></textarea>
                </li>
                <li className="flex justify-end item-center">
                  {emailSent ? (
                    <FontAwesomeIcon icon={faEnvelopeCircleCheck} color="#0c2dc2" height="40" width="44" />
                  ) : (
                    error && (
                      <FontAwesomeIcon icon={faRectangleXmark} color="#c21b0c" height="40" width="44" />
                    )
                  )}
                  {isLoading ? (
                    <Circles height="35" width="35" color="#115173" ariaLabel="circles-loading" />
                  ) : (
                    <input type="submit" className="flat-button bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" value="SEND" />
                  )}
                </li>
              </ul>
            </form>
            <p className="text-center" style={{ color: emailSent ? '#fff' : '#c21b0c' }}>
              {message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
