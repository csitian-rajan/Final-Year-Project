import { FaArrowCircleLeft, FaArrowCircleRight, FaLongArrowAltRight } from "react-icons/fa";
import { Enroll } from "../components/Enroll";
import { AboutCard } from "../components/AboutCard";

export const Home =()=>{
    return <>
    <main className="hero-section main">
        <div className="container">
            <div className="grid  grid-two--cols">
            <div className="headings">
         <h1 className="section-heading">Master Your Competitive Exams </h1>
         <div className="section-sub-heading">with AI-Powered Quizzes</div>
         <p className="paragraph">Practice with thousands of questions, get AI-generated quizzes,and excel in <span>IOE,Lok sewa </span>and other competitive exams.</p>
         <button className="btn">Start Your Journey<FaArrowCircleRight/> </button>
         </div>
         <div className="student">
          
            <img src="/images/herono.1.png" alt="student" className="bannerimage" />
         </div>
         </div>
         <div className="enroll">
            <Enroll />
         </div>
 
        </div>
         
        
    </main>
  {/* end main section  */}

    {/* // about section */}
    <div className="container">
        <div className="section-about">
       <h1 className="section-heading">Why Choose QuizMaster? </h1>
   
         <p className="paragraph">Our platform combines cutting-edge AI with proven learning methodologies to help you succeed.</p>
        <div className="information">
          <AboutCard />
        </div>
         </div>
    </div>
    </>
}