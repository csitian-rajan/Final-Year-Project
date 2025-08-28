import enrollStudents from "../api/enroll.json";
import "../components/enroll.css";

export const Enroll=()=>{
    
    return (<section section className="enroll-students">
        <div className="gradient-card  grid grid-three--cols">
          
            {
                enrollStudents.map((enroll)=>{
                    const {id,students,work}=enroll;
                    return  <div className="card" key={id}>
                <h1 className="section-heading">{students}</h1>
                <p className="paragraph">{work}</p>
            </div>
                })
            }
        
        </div>
    </section>
)}