import { FaBookOpen } from "react-icons/fa";
import aboutCard from "../api/choose.json";
import "../components/enroll.css";
import { GiProgression } from "react-icons/gi";
import { PiPersonSimpleRunBold } from "react-icons/pi";

export const AboutCard=()=>{

      const iconMap = {
  FaBookOpen: <FaBookOpen className="icon-style-green" />,
  GiProgression: <GiProgression className="icon-style-blue" />,
  PiPersonSimpleRunBold: <PiPersonSimpleRunBold className="icon-style-red" />
    }
    return <section className="grid grid-three--cols">
    {
        aboutCard.map((about)=>{
            const{id,name,information,icon}=about;
        //     return  <div className="card-about" key={id}>
        //        <p>{iconMap[icon]}</p>
        //    <h1 className="section-sub--heading">{name}</h1>
        //    <p>{information}</p>
        //  </div>

          return  <div className="card-about dash-topic " key={id}>
               <p className="icons">{iconMap[icon]}</p>
           <h1 className="section-sub--heading">{name}</h1>
           <p>{information}</p>
          {/* <button className="btn">Generate Quiz</button> */}
         </div>
        })
    }
    
    </section>
}