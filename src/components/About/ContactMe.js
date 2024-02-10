import React, { useRef, useState } from 'react';
import { MyModal, XIcon } from '../../tools/features';
import './contact_me.scss'


const ContactMe = () => {
  const [isModalOpen, setIsModalOpen] = useState(MyModal.setIsModalOpen);

  const refForm = useRef()

  const sendEmail = (e) => {
    // e.preventDefault()
    
    // emailjs
    //     .sendForm(
    //         'gmail',
    //         'contact_form_njpci7g',
    //         refForm.current,
    //         'iowCyNFAmwFKZDxcH'
    //     )
    //     .then(
    //         () => {
    //             alert('message successfully sent!')
    //             window.location.reload(false)
    //         },
    //         () => {
    //             alert('failed to send the message, please try again')
    //         }
    //     )
  }
  
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
        <div className="flex justify-between flex-col items-center">
            <h3 className="font-semibold m-auto capitalize">Message</h3>
            <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required/>
                            </li>
                            <li>
                                <input type='text' name='subject' placeholder='Subject' required/>
                            </li>
                            <li>
                                <textarea name='message' placeholder='Message' required></textarea>
                            </li>
                            <li><input type='submit' className='flat-button' value='SEND'/></li>
                        </ul>
                    </form>
                </div>
      </div>
    </div>
    </div>
  );
};

export default ContactMe;
