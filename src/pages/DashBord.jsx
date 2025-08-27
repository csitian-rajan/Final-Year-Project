import { useState } from "react";
import { DashTopic } from "../components/DashTopic";
import { SelectTopic } from "./SelectTopic";
import { DashCard } from "../components/DashCard";

export const DashBord = () => {
  const name = "Rajan";

  const [selectedTopic, setSelectedTopic] = useState(null);

  // when topic is clicked
  const handleTopicSelect = (id, topicName) => {
    console.log("id:",id, "name:",topicName);
    setSelectedTopic({ id, name: topicName });

  };

  // close popup
  const closePopup = () => {
    setSelectedTopic(null);
  };

  return (
    <main>
      <div className="dashbord-review">
      <div className="container">
        <div className="heading"></div>
        <h1 className="dashbord-heading">Welcome back, {name}!</h1>
        <p className="section-common-subheading">
          Ready to continue your learning journey?
        </p>
        <DashCard />
        </div>
        </div>
           <div className="section-topic">
         <div className="container">
                <div className="section-about">
               <h1 className="section-heading">Choose Your Challenge </h1>
           
                 <p className="paragraph">Select a topic to start your quiz journey</p>
                <div className="information">
                   <DashTopic onTopicSelect={handleTopicSelect}  />
                </div>
                 </div>
            </div>
            </div>
      

            
        <div className="section-topic">
          <div className="container">
          <h1 className="section-heading">Generate Custom Questions</h1>
          <DashTopic onTopicSelect={handleTopicSelect}  />
        </div>
       

        {/* ✅ Popup modal */}
         <SelectTopic topic={selectedTopic} onClose={closePopup} />
     </div>
    </main>
  );
};
