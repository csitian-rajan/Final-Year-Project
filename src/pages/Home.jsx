import { FaArrowCircleLeft, FaArrowCircleRight, FaLongArrowAltRight } from "react-icons/fa";
import { Enroll } from "../components/Enroll";
import { AboutCard } from "../components/AboutCard";
import { useNavigate } from "react-router-dom";

export const Home =()=>{
 
  
    return <>
    <main className="hero-section main">
        <div className="container">
            <div className="grid  grid-two--cols">
            <div className="headings">
         <h1 className="section-heading">Master Your Competitive Exams </h1>
         <div className="section-sub-heading">with AI-Powered Quizzes</div>
         <p className="paragraph">Practice with thousands of questions, get AI-generated quizzes,and excel in <span>IOE,Lok sewa </span>and other competitive exams.</p>
         <button className="btn">Start Your Journey  <FaArrowCircleRight/> </button>
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
    <div className="section-topic">
    <div className="container">
        <div className="section-about">
       <h1 className="section-heading">Why Choose QuizMaster? </h1>
   
         <p className="paragraph">Our platform combines cutting-edge AI with proven learning methodologies to help you succeed.</p>
        <div className="information">
          <AboutCard />
        </div>
         </div>
    </div>
    </div>
      <div className="section-topic  h-170 flex  ">
    <div className="container ">
        <div className="section-about  ">
          <div className="section-about-color">
                    
         <p className="paragraph journey">Your Learning Journey Begins here </p>
         <h1 className="section-heading">Ready to Ace Your Exams? </h1>
   
         <p className="paragraph">Join thousands of students who have improved their scores with our Quiz learning approach.</p>
        <div className="information">
           <button className="btn h-20 w-80 flex justify-center items-center ">Start Your Journey<FaArrowCircleRight className="relative left-65 bottom-8"/> </button>
        </div>
        </div>
         </div>
    </div>
    </div>
    
    </>
}