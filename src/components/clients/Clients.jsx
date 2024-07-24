import React from "react";
import "./client.css";
import { IoIosFlower } from "react-icons/io";
import { GiLips, GiBowlSpiral } from "react-icons/gi";
import { LuBoxes } from "react-icons/lu";
import { IoLogoReact } from "react-icons/io5";
import { SiHiveBlockchain } from "react-icons/si";
import { MdGroups2 } from "react-icons/md";
import { BsBuildings } from "react-icons/bs";
import { FaHandsBound } from "react-icons/fa6";
import Cards from "../cards/Cards";

const Clients = () => {
  return (
    <div className="clients">
      <div className="clients__wrapper">
        <h2>Our Clients</h2>
        <small className="clients__small">
          We have been working some fourtune 500+ clients
        </small>
        <div className="clients__icons">
          <IoIosFlower /> <GiLips /> <GiBowlSpiral /> <LuBoxes />{" "}
          <IoLogoReact /> <SiHiveBlockchain /> <LuBoxes />
        </div>
      </div>

      <div className="clients__manage">
        <h3>
          Manage your entire community <br /> in a single system
        </h3>
        <small>Who is nexen sutable for?</small>
      </div>
<div className="cards__group">
<Cards
        svg={<MdGroups2 />}
        heading={"Membership organisation"}
        content={`Our membership management
          software provide full automation of 
          membership renewals and payments`}
      />
      <Cards
        svg={<BsBuildings />}
        heading={"National Associations"}
        content={`Our membership management
          software provide full automation of 
          membership renewals and payments`}
      />
      <Cards
        svg={<FaHandsBound />}
        heading={"Clubs and Groups"}
        content={`Our membership management
          software provide full automation of 
          membership renewals and payments`}
      />
</div>
      
    </div>
  );
};

export default Clients;
