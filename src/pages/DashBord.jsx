
import { DashCard } from "../components/DashCard"
import { DashTopic } from "../components/DashTopic"
export const DashBord=()=>{
 const name ="Rajan"
    return <main>
    <div className="container">
    <h1 className="dashbord-heading">Welcome back,{name}!</h1>
    <p className="section-common-subheading">Ready to continue your learning journey?</p>
    <div className="performance">
            
           < DashCard />
        </div>
        <div className="section-topic">
            <DashTopic />
    </div>
    </div>
    </main>
}