import React, { useState } from "react";
import logo from "../../assets/Brandnn.jpg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import {
  AiFillHourglass,
  AiOutlineMoneyCollect,
  AiOutlineLaptop,
  AiFillAccountBook,
} from "react-icons/ai";
import { ComputerScience, Forex, School, SoftSkills } from "../../components";

const Home = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [schoolTab, setSchoolTab] = useState(false)
  const [forexTab, setForexTab] = useState(true)
  const [csTab, setCsTab] = useState(false)
  const [ssTab, setSsTab] = useState(false)

  const activeTab = "underline decoration-wavy underline-offset-4"

  const handleSchool = () => {
    setSchoolTab(true)
    setForexTab(false)
    setCsTab(false)
    setSsTab(false)
}
const handleForex = () => {
    setSchoolTab(false)
    setForexTab(true)
    setCsTab(false)
    setSsTab(false)
}
const handleCs = () => {
    setSchoolTab(false)
    setForexTab(false)
    setCsTab(true)
    setSsTab(false)
}
const handleSs = () => {
    setSchoolTab(false)
    setForexTab(false)
    setCsTab(false)
    setSsTab(true)
}
  
  return (
    <>
      <nav className="flex items-center justify-between text-[#ffc451] bg-[rgba(0,0,0,0.8)] sm:text-lg">
        <ul className="hidden w-1/3 sm:flex justify-evenly">
          <li>
            <button className={!forexTab ? null : activeTab} onClick={handleForex}>Forex</button>
            </li>
          <li>
            <button className={!csTab ? null : activeTab} onClick={handleCs}>Computer Science</button>
            </li>
        </ul>
        <div className="flex w-1/3 justify-evenly">
          <img src={logo} alt="logo" className="my-1 w-14 h-14 rounded-xl" />
        </div>
        <ul className="hidden w-1/3 sm:flex justify-evenly">
          <li>
            <button className={!schoolTab ? null : activeTab} onClick={handleSchool}>School</button>
            </li>
          <li>
            <button className={!ssTab ? null : activeTab} onClick={handleSs}>Soft Skills</button>
            </li>
        </ul>
        <div className="mr-3 sm:hidden">
          {toggleMenu ? (
            <RiCloseLine
              color="white"
              size={27}
              onClick={() => setToggleMenu(false)}
              className="icon"
            />
          ) : (
            <RiMenu3Line
              color="white"
              size={27}
              onClick={() => setToggleMenu(true)}
              className="icon"
            />
          )}
        </div>
      </nav>
      {toggleMenu && (
        <div className="w-full px-4 pb-2 space-y-5 text-right text-white bg-black rounded-b-lg">
          <button className="flex flex-row items-center justify-end w-full" onClick={handleSchool}>
            <span className="pt-4 pb-2 mr-4 scale-in-hor-right">School</span>
            <AiFillHourglass size={24} color="white" />
          </button>
          <hr />
          <button className="flex flex-row items-center justify-end w-full" onClick={handleForex}>
            <span className="pb-2 mr-4 scale-in-hor-right">Forex</span>
            <AiOutlineMoneyCollect size={24} color="white" />
          </button>
          <hr />
          <button className="flex flex-row items-center justify-end w-full" onClick={handleCs}>
            <span className="pb-2 mr-4 scale-in-hor-right">
              Computer Science
            </span>
            <AiOutlineLaptop size={24} color="white" />
          </button>
          <hr />
          <button className="flex flex-row items-center justify-end w-full" onClick={handleSs}>
            <span className="pb-2 mr-4 scale-in-hor-right">Soft Skills</span>
            <AiFillAccountBook size={24} color="white" />
          </button>
        </div>
      )}

      
      {/* Display Section */}
      <div className="mt-">
        <div className={!schoolTab ? "hidden" : "block"}>
          <School />
        </div>
        <div className={!forexTab ? "hidden" : "block"}>
          <Forex />
        </div>
        <div className={!csTab ? "hidden" : "block"}>
          <ComputerScience />
        </div>
        <div className={!ssTab ? "hidden" : "block"}>
          <SoftSkills />
        </div>
      </div>
      {/* End of Display Section */}
    </>
  );
};

export default Home;
