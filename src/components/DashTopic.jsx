import { FaBookOpen } from "react-icons/fa";
import topicChose from "../api/dashtopic.json";
import "../components/enroll.css";
import { GiProgression } from "react-icons/gi";
import { PiPersonSimpleRunBold } from "react-icons/pi";

export const DashTopic=({onTopicSelect})=>{

      const iconMap = {
      FaBookOpen: <FaBookOpen className="icon-style" />,
      GiProgression: <GiProgression className="icon-style" />,
      PiPersonSimpleRunBold: <PiPersonSimpleRunBold className="icon-style" />
    }
    return <section className="grid grid-three--cols  card">
      
         
    {
        topicChose.map((topic)=>{
            const{id,name,information,icon}=topic;
            return  <div className="card-about dash-topic " key={id} onClick={()=>onTopicSelect(id,name)}>
               <p>{iconMap[icon]}</p>
           <h1 className="section-sub--heading">{name}</h1>
           <p>{information}</p>
         </div>
      
        })
    }
   
    
    
    </section>
}