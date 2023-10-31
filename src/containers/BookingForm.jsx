import React, { useState } from 'react'
import CtaButton from '../components/CtaButton'
import { RiArrowDropDownFill, RiArrowDropUpFill, RiCheckFill, RiDropFill, RiMailCheckFill } from 'react-icons/ri';
import { useLocation,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const sessions = [
  {
    "session_name": "Regular Session",
    "session_type": "Studio",
    "price": "₦1,200",
    "number_of_outfits": "1",
    "softcopies_included": "2 edited Soft Copies"
  },
  {
    "session_name": "30 Minutes Photo Session",
    "session_type": "Studio",
    "price": "₦10,000",
    "number_of_outfits": "1-3",
    "softcopies_included": "6 edited Soft Copies"
  },
  {
    "session_name": "1 Hour Photo Session",
    "session_type": "Studio",
    "price": "₦20,000",
    "number_of_outfits": "1-6",
    "softcopies_included": "12 edited Soft Copies"
  },
  {
    "session_name": "Pre-Wedding & Couple Studio Session",
    "session_type": "Studio",
    "price": "₦10,000",
    "number_of_outfits": "1-3",
    "softcopies_included": "7 edited Soft Copies"
  },
  {
    "session_name": "Outdoor Session",
    "session_type": "Outdoor",
    "price": "₦25,000",
    "number_of_outfits": "1-4",
    "softcopies_included": "10 edited Soft Copies"
  },
  {
    "session_name": "Pre-Wedding & Couple Outdoor Session",
    "session_type": "Outdoor",
    "price": "₦25,000",
    "number_of_outfits": "1-3",
    "softcopies_included": "10 edited Soft Copies"
  }
]
const BookingForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const selectedSession = sessions.find(session => session.session_name === selectedOption);
  const location = useLocation()
  const currentDate = new Date().toISOString().split('T')[0];
  const locatedOptions = new URLSearchParams(location.search).get('selectedOption');
  const navigate = useNavigate()
  const [fullname ,setFullName] = useState('')
  const [date ,setDate] = useState('')
  const [email ,setEmail] = useState('')
  const [phone ,setPhone] = useState('')
  const [guests ,setGuest] = useState('')
  const [startTime,setStartTime] = useState('')
  const [endTime ,setEndTime] = useState('')
  const [adInfo,setAdInfo] = useState('')
  const [isDisabled,setIsDisabled] = useState(true)
  const handleFullNameChange = (event)=>{
    setFullName(event.target.value)
    console.log(event.target.value)
  }
  const handleDateChange = (event)=>{
      setDate(event.target.value)
      console.log(event.target.value)
  }
  const handleEmailChange = (event)=>{
      setEmail(event.target.value)
      console.log(event.target.value)
  }
  const handlePhoneChange = (event)=>{
      setPhone(event.target.value)
      console.log(event.target.value)
    }
    const handleGuestChange = (event)=>{
      setGuest(event.target.value)
      console.log(event.target.value)
    }
  const handleStartTimeChange = (event)=>{
      setStartTime(event.target.value)
      console.log(event.target.value)
  }
  const handleEndTimeChange = (event)=>{
      setEndTime(event.target.value)
      console.log(event.target.value)
  }
  const handleAdInfoChange = (event)=>{
      setAdInfo(event.target.value)
      console.log(event.target.value)
  }
  const [isFormLoading,setIsFormLoading] = useState(false)
  const [formLoadingState,setFormLoadingState] = useState(true)
  if(isFormLoading === true){
    document.body.style.overflowY='hidden'
  }else{
      document.body.style.overflowY='scroll'
  }
  useEffect(()=>{setIsDisabled(!(fullname && email && phone && date && selectedOption))},[fullname,email,phone,date,selectedOption])
  const handleSubmit = async (event) => {
      event.preventDefault()
      setIsFormLoading(true)
        try {
          const response = await axios.post('http://192.168.245.144:3001/api/send-email', {
            fullname,
            date,
            email,
            phone,
            adInfo,
            startTime,
            endTime,
            guests,
            selectedOption
          }); // Adjust the URL as needed
          console.log(response.data.message);
        } catch (error) {
          alert('Connection to server failed, Please check connection and try again.')
          console.error(error);
        }finally{
          setFormLoadingState(false)
        }
      };
  useEffect(()=>{
    if(locatedOptions){
      setSelectedOption(decodeURIComponent(locatedOptions))
      console.log('log'+ locatedOptions)
    }else{
      console.log('Did not recieve query')
    }
  },[locatedOptions])

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    navigate(`/booking?selectedOption=${encodeURIComponent(option)}`,{replace:true})
  };
  return (
    <>
    <div className='h-fit max-lg:px-16 max-md:px-8 px-16 bg-white-alablaster  bgclip2 text-ghost-white py-16'>
      <div className=''>
        <div>
          <p className='text-4xl'>Book a studio session with us</p>
          <p>Fill in the form below in the required fields <span className=' text-red-500'>*</span></p>
        </div>
        <div>
        <form onSubmit={handleSubmit} id='booking-form' className='flex flex-col space-y-4 p-4  mx-auto text-eerie-black font-medium bg-ghost-white '>
          {
            isFormLoading?
            <>
              <div className='loader-container'>
                {
                  formLoadingState === true?
                <div className='loader-spinner '>

                </div>:
                <div className='text-center flex flex-col justify-center items-center gap-8 text-eerie-black p-4' >
                  <RiCheckFill className=' text-eerie-black text-4xl'/>
                  <div>
                    <p className=' text-2xl max-sm:text-lg'>Mail Sent Successfully</p>
                    <p className='text-xl max-sm:text-sm'>You will receive a mail from us within the next 24 Hours</p>
                  </div>
                  <div>
                    <a href='/'>
                    <CtaButton text='Go Back Home' />
                    </a>
                  </div>
                </div>
                }
              </div>
            </>:
            <>
                <label htmlFor="name" className="block text-eerie-black font-bold" required>Name <span className=' text-red-500'>*</span></label>
                <input type="text" value={fullname} onChange={handleFullNameChange} id="name" className="border px-3 py-2 focus:outline-none focus:ring focus:ring-eerie-black focus:border-eerie-black" />

                <label htmlFor="email" className="block text-eerie-black font-bold" required>Email <span className=' text-red-500'>*</span></label>
                <input type="email" value={email} onChange={handleEmailChange} id="email" className="border px-3 py-2 focus:outline-none focus:ring focus:ring-eerie-black focus:border-eerie-black" />

                <label htmlFor="phone" className="block text-eerie-black font-bold" required>Phone Number <span className=' text-red-500'>*</span></label>
                <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} className="border px-3 py-2 focus:outline-none focus:ring focus:ring-eerie-black focus:border-eerie-black" />



                <label htmlFor="event" className="block text-eerie-black font-bold">Photography Type <span className=' text-red-500'>*</span></label>
                <div className={`custom-dropdown ${isOpen ? 'open' : ''}`}>
                    <div
                      className={`dropdown-header flex justify-between items-center ${isOpen? 'border-4 border-eerie-black':''}`}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <p>
                        {selectedOption || 'Select an option'}
                      </p>
                      {isOpen? <RiArrowDropUpFill size={30}/> :<RiArrowDropDownFill size={30}/>}
                    </div>
                    {isOpen && (
                      <>
                      <div className="dropdown-options">
                        {sessions.map((session, index) => (
                          <div
                            key={index}
                            className="option"
                            onClick={() => handleOptionClick(session.session_name)}
                          >
                            {session.session_name}
                          </div>
                        ))}
                      </div>
                      </>
                    )}
                  </div>
                  {selectedOption &&
                      <div className=' font-medium flex justify-between'>
                        <p>{selectedSession.number_of_outfits} outfits</p>
                        <p>{selectedSession.softcopies_included}</p>
                        <p>{selectedSession.price}</p>
                      </div>
                  }
                <label htmlFor="date" className="block text-eerie-black font-bold"  required>Booking Date <span className=' text-red-500'>*</span></label>
                <input type="date" id="date" min={currentDate} onChange={handleDateChange} value={date} className="border px-3 py-2 focus:outline-none focus:ring focus:ring-eerie-black focus:border-eerie-black" />

                <label htmlFor="start-time" className="block text-eerie-black font-bold">Start Time</label>
                <input type="time" id="start-time" onChange={handleStartTimeChange} value={startTime} className="border px-3 py-2 focus:outline-none focus:ring focus:ring-eerie-black focus:border-eerie-black" />

                <label htmlFor="end-time" className="block text-eerie-black font-bold">End Time</label>
                <input type="time" id="end-time" onChange={handleEndTimeChange} value={endTime} className="border px-3 py-2 focus:outline-none focus:ring focus:ring-eerie-black focus:border-eerie-black" />

                <label htmlFor="additional-requests" className="block text-eerie-black font-bold">Additional Requests</label>
                <textarea id="additional-requests" onChange={handleAdInfoChange} value={adInfo} className="border px-3 py-2 focus:outline-none focus:ring focus:ring-eerie-black focus:border-eerie-black"></textarea>

                <label htmlFor="number-of-guests" className="block text-eerie-black font-bold">Number of Guests</label>
                <input type="number" id="number-of-guests" onChange={handleGuestChange} value={guests} className="border px-3 py-2 focus:outline-none focus:ring focus:ring-eerie-black focus:border-eerie-black" min="1" />
                {/* <CtaButton text='SEND MAIL' className={'text-center py-2'} onClick={handleClick}/ */}
                <button type='submit' disabled={isDisabled} className={`text-ghost-white font-bold   p-4 duration-200 ease-in-out ${isDisabled?'bg-antiflash-white text-silver-platinum-grey':'bg-silver-platium hover:text-eerie-black hover:bg-ghost-white'}`}>
                  <p>SEND MAIL</p>
                </button>
            </>
          }
</form>

        </div>
      </div>

    </div>
    </>
  )
}

export default BookingForm