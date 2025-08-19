import React from 'react'

const Navbar = () => {
  const handleWhatsAppClick = () => {
    const phone = "8801970713237"; // your number (no +, no spaces)
    const message = "Hello, I am interested in your services"; 
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="nav container flex justify-between font-poppins mt-[50px] mb-[50px] px-[110px] items-center ">
        <div className="logo text-7xl text-blue-600 font-bold"> LOGO </div>

        <div className="manu"> 
          <ul className='flex text-2xl gap-10 items-center '>
            <li className='hover:underline transition-all hover:scale-110 hover:text-[#005eff]'>
              <a href="#services">Our Services</a>
            </li>

            <li 
              className='hover:underline transition-all hover:scale-110 hover:text-[#009730] cursor-pointer'
              onClick={handleWhatsAppClick}
            >
              (+88) 01970713237
            </li>

            <button className='bg-red-500 text-white w-[190px] h-[55px] text-[17px] rounded-md hover:scale-110 transition-all active:scale-90 cursor-pointer'>
              Contact Us
            </button>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
