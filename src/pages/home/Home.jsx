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
  const [toggleMenu, setToggleMenu] = useState(false);
  const [schoolTab, setSchoolTab] = useState(false);
  const [forexTab, setForexTab] = useState(false);
  const [csTab, setCsTab] = useState(true);
  const [ssTab, setSsTab] = useState(false);

  const activeTabL = "underline decoration-wavy underline-offset-4";
  const activeTabS =
    "flex flex-row items-center justify-end w-full text-[#ffc451]";
  const noActiveTabS = "flex flex-row items-center justify-end w-full";

  const handleSchool = () => {
    setSchoolTab(true);
    setForexTab(false);
    setCsTab(false);
    setSsTab(false);
    setToggleMenu(false);
  };
  const handleForex = () => {
    setSchoolTab(false);
    setForexTab(true);
    setCsTab(false);
    setSsTab(false);
    setToggleMenu(false);
  };
  const handleCs = () => {
    setSchoolTab(false);
    setForexTab(false);
    setCsTab(true);
    setSsTab(false);
    setToggleMenu(false);
  };
  const handleSs = () => {
    setSchoolTab(false);
    setForexTab(false);
    setCsTab(false);
    setSsTab(true);
    setToggleMenu(false);
  };

  return (
    <>
      <nav className="flex items-center justify-between text-[#ffc451] bg-[rgba(0,0,0,0.8)] sm:text-lg">
        <ul className="hidden w-1/3 sm:flex justify-evenly">
          <li>
            <button className={!csTab ? null : activeTabL} onClick={handleCs}>
              Computer Science
            </button>
          </li>
          <li>
            <button
              className={!forexTab ? null : activeTabL} onClick={handleForex}>
              Forex
            </button>
          </li>
        </ul>
        <div className="flex w-1/3 justify-evenly">
          <img src={logo} alt="logo" className="my-1 w-14 h-14 rounded-xl" />
        </div>
        <ul className="hidden w-1/3 sm:flex justify-evenly">
          <li>
            <button
              className={!schoolTab ? null : activeTabL}
              onClick={handleSchool}
            >
              School
            </button>
          </li>
          <li>
            <button className={!ssTab ? null : activeTabL} onClick={handleSs}>
              Soft Skills
            </button>
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
        <div className="w-full px-4 pt-4 pb-2 space-y-5 text-right text-white bg-black rounded-b-lg">
          <button
            className={!csTab ? noActiveTabS : activeTabS}
            onClick={handleCs}
          >
            <span className="pb-2 mr-4 scale-in-hor-right">
              Computer Science
            </span>
            <AiOutlineLaptop
              size={24}
              className={!csTab ? "white" : "text-[#ffc451]"}
            />
          </button>
          <hr />
          <button
            className={!forexTab ? noActiveTabS : activeTabS}
            onClick={handleForex}
          >
            <span className="pb-2 mr-4 scale-in-hor-right">Forex</span>
            <AiOutlineMoneyCollect
              size={24}
              className={!forexTab ? "white" : "text-[#ffc451]"}
            />
          </button>
          <hr />
          <button
            className={!schoolTab ? noActiveTabS : activeTabS}
            onClick={handleSchool}
          >
            <span className="pt-4 pb-2 mr-4 scale-in-hor-right">School</span>
            <AiFillHourglass
              size={24}
              className={!schoolTab ? "white" : "text-[#ffc451]"}
            />
          </button>
          <hr />
          <button
            className={!ssTab ? noActiveTabS : activeTabS}
            onClick={handleSs}
          >
            <span className="pb-2 mr-4 scale-in-hor-right">Soft Skills</span>
            <AiFillAccountBook
              size={24}
              className={!ssTab ? "white" : "text-[#ffc451]"}
            />
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
