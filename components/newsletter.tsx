'use client'
import { useState } from 'react'
import axios, { AxiosResponse } from 'axios';
import { headers } from 'next/headers';

export default function Newsletter() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState('');
  


  // name handel state
  function handelname (e: any) {
    setName(e.target.value)
  }

  // email handel state
  function handelemail (e: any) {
    setEmail(e.target.value)
  }

  // message handel state
  const handelmessage =(e: any)=> {
    setMessage(e.target.value)
  }

        // submit handel function
    const handelsubmit = async (e: any) => {
      e.preventDefault();
      const data = {
        name: name,
        email: email,
        message: message
      };
    
      try {
        const res: AxiosResponse = await axios.post('api/hello/contact', data,{
          headers:{
            "Content-Type": "application/json",
          }
        });
        // Handle the response here
        const {message} = await res.data;
        if(message == 'Message has been sent'){
          setSuccess(message)
      }else{
        setError(message);
      }
        setTimeout(() => {
          setSuccess('')
          setError([])
          setName('')
          setEmail('')
          setMessage('')
        },2000)
     

      } catch (error) {
        // Handle the error here
      }
    };

    


  return (
    <section id="get-in-touch">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                    <stop stopColor="#DFDFDF" offset="0%" />
                    <stop stopColor="#4C4C4C" offset="44.317%" />
                    <stop stopColor="#333" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                    <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                    <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                    <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">We'd Love to Hear From You!</h3>
                <p className="text-gray-300 text-lg mb-6">Feel free to reach out with any inquiries, comments, or thoughts. Your communication is always welcomed and highly valued.</p>

                {/* CTA form */}
                <form onSubmit={handelsubmit} className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input onChange={handelname} type="text" name='Name' id='Name' className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Your name…" aria-label="Your name…" />
                   
                    <input onChange={handelemail} type="email" name='Email' id='Email' className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Your email…" aria-label="Your email…" />
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0 mt-4">
                    {/* <input type="text" className="form-textarea w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Your comments…" aria-label="Your comments…" /> */}
                    <textarea onChange={handelmessage} name='Message' id='Message' className="form-textarea w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Your comments…" aria-label="Your comments…"/>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-left max-w-xs mx-auto sm:max-w-md lg:mx-0 mt-4">
                    <button type='submit' className="btn text-white bg-blue-600 hover:bg-blue-700 shadow">Submit</button>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-left max-w-xs mx-auto sm:max-w-md lg:mx-0 mt-4">
                    <p className='text-red-600'>{error}</p>
                    <p className='text-green-600'>{success}</p>
                  </div>
                </form>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}