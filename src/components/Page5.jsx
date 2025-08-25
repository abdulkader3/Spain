import React from "react";
import Button from "./Button.jsx";

const Page5 = () => {

  // CountryCodes.js
  const countryCodes = [
    { code: "+1", name: "United States", flag: "🇺🇸" },
    { code: "+1-242", name: "Bahamas", flag: "🇧🇸" },
    { code: "+1-246", name: "Barbados", flag: "🇧🇧" },
    { code: "+1-264", name: "Anguilla", flag: "🇦🇮" },
    { code: "+1-268", name: "Antigua and Barbuda", flag: "🇦🇬" },
    { code: "+1-284", name: "British Virgin Islands", flag: "🇻🇬" },
    { code: "+1-441", name: "Bermuda", flag: "🇧🇲" },
    { code: "+1-345", name: "Cayman Islands", flag: "🇰🇾" },
    { code: "+1-473", name: "Grenada", flag: "🇬🇩" },
    { code: "+1-684", name: "American Samoa", flag: "🇦🇸" },
    { code: "+1-670", name: "Northern Mariana Islands", flag: "🇲🇵" },
    { code: "+1-671", name: "Guam", flag: "🇬🇺" },
    { code: "+1-787", name: "Puerto Rico", flag: "🇵🇷" },
    { code: "+1-876", name: "Jamaica", flag: "🇯🇲" },
    { code: "+20", name: "Egypt", flag: "🇪🇬" },
    { code: "+27", name: "South Africa", flag: "🇿🇦" },
    { code: "+30", name: "Greece", flag: "🇬🇷" },
    { code: "+31", name: "Netherlands", flag: "🇳🇱" },
    { code: "+32", name: "Belgium", flag: "🇧🇪" },
    { code: "+33", name: "France", flag: "🇫🇷" },
    { code: "+1", name: "United States", flag: "🇺🇸" },
    { code: "+36", name: "Hungary", flag: "🇭🇺" },
    { code: "+39", name: "Italy", flag: "🇮🇹" },
    { code: "+41", name: "Switzerland", flag: "🇨🇭" },
    { code: "+43", name: "Austria", flag: "🇦🇹" },
    { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
    { code: "+49", name: "Germany", flag: "🇩🇪" },
    { code: "+52", name: "Mexico", flag: "🇲🇽" },
    { code: "+54", name: "Argentina", flag: "🇦🇷" },
    { code: "+55", name: "Brazil", flag: "🇧🇷" },
    { code: "+56", name: "Chile", flag: "🇨🇱" },
    { code: "+57", name: "Colombia", flag: "🇨🇴" },
    { code: "+58", name: "Venezuela", flag: "🇻🇪" },
    { code: "+60", name: "Malaysia", flag: "🇲🇾" },
    { code: "+61", name: "Australia", flag: "🇦🇺" },
    { code: "+62", name: "Indonesia", flag: "🇮🇩" },
    { code: "+63", name: "Philippines", flag: "🇵🇭" },
    { code: "+64", name: "New Zealand", flag: "🇳🇿" },
    { code: "+65", name: "Singapore", flag: "🇸🇬" },
    { code: "+66", name: "Thailand", flag: "🇹🇭" },
    { code: "+81", name: "Japan", flag: "🇯🇵" },
    { code: "+82", name: "South Korea", flag: "🇰🇷" },
    { code: "+84", name: "Vietnam", flag: "🇻🇳" },
    { code: "+86", name: "China", flag: "🇨🇳" },
    { code: "+90", name: "Turkey", flag: "🇹🇷" },
    { code: "+91", name: "India", flag: "🇮🇳" },
    { code: "+92", name: "Pakistan", flag: "🇵🇰" },
    { code: "+93", name: "Afghanistan", flag: "🇦🇫" },
    { code: "+94", name: "Sri Lanka", flag: "🇱🇰" },
    { code: "+95", name: "Myanmar", flag: "🇲🇲" },
    { code: "+98", name: "Iran", flag: "🇮🇷" },
    { code: "+212", name: "Morocco", flag: "🇲🇦" },
    { code: "+213", name: "Algeria", flag: "🇩🇿" },
    { code: "+216", name: "Tunisia", flag: "🇹🇳" },
    { code: "+218", name: "Libya", flag: "🇱🇾" },
    { code: "+220", name: "Gambia", flag: "🇬🇲" },
    { code: "+221", name: "Senegal", flag: "🇸🇳" },
    { code: "+222", name: "Mauritania", flag: "🇲🇷" },
    { code: "+223", name: "Mali", flag: "🇲🇱" },
    { code: "+224", name: "Guinea", flag: "🇬🇳" },
    { code: "+225", name: "Côte d’Ivoire", flag: "🇨🇮" },
    { code: "+226", name: "Burkina Faso", flag: "🇧🇫" },
    { code: "+227", name: "Niger", flag: "🇳🇪" },
    { code: "+228", name: "Togo", flag: "🇹🇬" },
    { code: "+229", name: "Benin", flag: "🇧🇯" },
    { code: "+230", name: "Mauritius", flag: "🇲🇺" },
    { code: "+231", name: "Liberia", flag: "🇱🇷" },
    { code: "+232", name: "Sierra Leone", flag: "🇸🇱" },
    { code: "+233", name: "Ghana", flag: "🇬🇭" },
    { code: "+234", name: "Nigeria", flag: "🇳🇬" },
    { code: "+235", name: "Chad", flag: "🇹🇩" },
    { code: "+236", name: "Central African Republic", flag: "🇨🇫" },
    { code: "+237", name: "Cameroon", flag: "🇨🇲" },
    { code: "+238", name: "Cape Verde", flag: "🇨🇻" },
    { code: "+239", name: "São Tomé and Príncipe", flag: "🇸🇹" },
    { code: "+240", name: "Equatorial Guinea", flag: "🇬🇶" },
    { code: "+241", name: "Gabon", flag: "🇬🇦" },
    { code: "+242", name: "Republic of the Congo", flag: "🇨🇬" },
    { code: "+243", name: "DR Congo", flag: "🇨🇩" },
    { code: "+244", name: "Angola", flag: "🇦🇴" },
    { code: "+245", name: "Guinea-Bissau", flag: "🇬🇼" },
    { code: "+246", name: "British Indian Ocean Territory", flag: "🇮🇴" },
    { code: "+248", name: "Seychelles", flag: "🇸🇨" },
    { code: "+249", name: "Sudan", flag: "🇸🇩" },
    { code: "+250", name: "Rwanda", flag: "🇷🇼" },
    { code: "+251", name: "Ethiopia", flag: "🇪🇹" },
    { code: "+252", name: "Somalia", flag: "🇸🇴" },
    { code: "+253", name: "Djibouti", flag: "🇩🇯" },
    { code: "+254", name: "Kenya", flag: "🇰🇪" },
    { code: "+255", name: "Tanzania", flag: "🇹🇿" },
    { code: "+256", name: "Uganda", flag: "🇺🇬" },
    { code: "+257", name: "Burundi", flag: "🇧🇮" },
    { code: "+258", name: "Mozambique", flag: "🇲🇿" },
    { code: "+260", name: "Zambia", flag: "🇿🇲" },
    { code: "+261", name: "Madagascar", flag: "🇲🇬" },
    { code: "+263", name: "Zimbabwe", flag: "🇿🇼" },
    { code: "+264", name: "Namibia", flag: "🇳🇦" },
    { code: "+265", name: "Malawi", flag: "🇲🇼" },
    { code: "+266", name: "Lesotho", flag: "🇱🇸" },
    { code: "+267", name: "Botswana", flag: "🇧🇼" },
    { code: "+268", name: "Eswatini", flag: "🇸🇿" },
    { code: "+269", name: "Comoros", flag: "🇰🇲" },
    { code: "+290", name: "Saint Helena", flag: "🇸🇭" },
    { code: "+291", name: "Eritrea", flag: "🇪🇷" },
    { code: "+297", name: "Aruba", flag: "🇦🇼" },
    { code: "+298", name: "Faroe Islands", flag: "🇫🇴" },
    { code: "+299", name: "Greenland", flag: "🇬🇱" },
  ];

  return (
    <>
      <div className="main w-full h-fit bg-white flex justify-between font-poppins px-[130px] items-center ">

        <div className="form shadow-[0_8px_12px_-2px_rgba(0,0,0,0.25)] px-[40px] pt-20 pb-10 ">
          {/* firstName */}
          <div className="firstName-LastName w-full h-fit flex gap-8 ">
            <div className="first">
              <p className="text-[18px] font-medium">First Name</p>
              <input
                type="text"
                placeholder="First Name"
                className="w-[230px] h-[40px] rounded-sm border px-2"
              />
            </div>

            <div className="last">
              <p className="text-[18px] font-medium">Last Name</p>
              <input
                type="text"
                placeholder="Last Name"
                className="w-[230px] h-[40px] rounded-sm border px-2"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="email w-full my-[20px] ">
            <div className="last">
              <p className="text-[18px] font-medium">Last Name</p>
              <input
                type="text"
                placeholder="YourEmail@email.com"
                className="w-full h-[40px] rounded-sm border px-2"
              />
            </div>
          </div>

          <div className="email w-full">
            <div className="last">
              <p className="text-[18px] font-medium">Contact Number</p>
              <div className="flex">
                {/* Country Code Dropdown */}
                <select className="w-[220px] h-[40px] border rounded-sm px-2 flex items-center">
                  {countryCodes.map((c, idx) => (
                    <option key={idx} value={c.code}>
                      🌏 {c.name} ({c.code})
                    </option>
                  ))}
                </select>

                {/* Phone Number Input */}
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="flex-1 h-[40px] rounded-sm border px-2 ml-2"
                />
              </div>
            </div>
          </div>

          {/* Which time do you prefer */}
          <div className="email w-full my-[30px] ">
            <div className="last">
              <p className="text-[18px] font-medium">
                Which time do you prefer?
              </p>
              <select className="w-full h-[40px] rounded-sm border px-2">
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
            </div>
          </div>


          {/* button */}
          <div className=" w-full flex justify-center "> <Button buttonText={'Submit'}/> </div>
        </div>

        <div className="details w-[500px] ">
          <p className="text-[40px] font-semibold mb-5 ">
            {" "}
            <span className="text-red-500"> We’ve Got You</span> Covered, Book
            An Appointment With Us Today
          </p>

          <p className=" text-[18px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit.
          </p>
        </div>
      </div>
    </>
  );
};

export default Page5;
