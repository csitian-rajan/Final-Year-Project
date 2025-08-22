 import "../components/enroll.css";
 import dashInfo from "../api/dashcard.json";
 import { IoBookOutline } from "react-icons/io5";
 import { FaGraduationCap } from "react-icons/fa";
 import { CiCircleCheck } from "react-icons/ci";
 import { IoIosTimer } from "react-icons/io";

export const DashCard =()=>{


    const iconMap ={
        CiCircleCheck:<CiCircleCheck />,
        FaGraduationCap:<FaGraduationCap />,
        IoBookOutline:<IoBookOutline />,
        IoIosTimer:<IoIosTimer />

    }
     return   <section section className="dash-card-students">

        <div className="  grid grid-four--cols">
          
            {
                    dashInfo.map((info)=>{

                     const {id,heading,number,icon,gradient}=info;
                    return <>
                             <div className="dash-card" key={id} style={{backgroundImage:gradient }}>
                                <div className="dash-heading">
                             <p className="dash-card-subheading">{heading}</p>
                             <h1 className="dash-section-heading">{number}</h1>
                             </div>
                              <p className="dash-section-heading">{iconMap[icon]}</p>
                             </div>
                            
                           </>
                })
            }
        
        </div>
        </section>
}