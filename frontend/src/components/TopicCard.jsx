 import "../components/enroll.css";
 import "tailwindcss";
 import TopicInfo from "../api/topiccard.json";
 import { IoBookOutline } from "react-icons/io5";
 import { FaGraduationCap } from "react-icons/fa";


export const TopicCard =({onQuizSelect})=>{
     const iconMap ={
        FaGraduationCap:<FaGraduationCap />,
        IoBookOutline:<IoBookOutline />,
       }
     return   <section section className="Generate-Quiz">

        <div className="topic-card grid grid-two--cols gap-10 w-200 h-50">
          
            {
                    TopicInfo.map((info)=>{

                     const {id,heading,paragraph,icon}=info;
                    return <>
                             <div className="topic-card-content" key={id} onClick={()=>onQuizSelect(id,heading)}>
                                <p className="">{iconMap[icon]}</p>
                               
                             <h1 className="topic-card-heading">{heading}</h1>
                             <h3 className="">{paragraph}</h3>
                             </div>
                                </>
                })
            }
        
        </div>
        </section>
}