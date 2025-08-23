import { useState } from "react";
import { DashTopic } from "../components/DashTopic";
import { SelectTopic } from "./SelectTopic";

export const DashBord = () => {
  const name = "Rajan";

  const [selectedTopic, setSelectedTopic] = useState(null);

  // when topic is clicked
  const handleTopicSelect = (id, topicName) => {
    console.log("id:",id, "name:",topicName)
    setSelectedTopic({ id, name: topicName });
  };

  // close popup
  const closePopup = () => {
    setSelectedTopic(null);
  };

  return (
    <main>
      <div className="container">
        <h1 className="dashbord-heading">Welcome back, {name}!</h1>
        <p className="section-common-subheading">
          Ready to continue your learning journey?
        </p>

        <div className="section-topic">
          <DashTopic onTopicSelect={handleTopicSelect} />
        </div>

        {/* ✅ Popup modal */}
         <SelectTopic topic={selectedTopic} onClose={closePopup} />
      </div>
    </main>
  );
};
