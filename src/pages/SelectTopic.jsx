export const SelectTopic=({topic,onClose})=>{

    if(!topic) return null;
    return(
    <>
    <div className="container">
          <div className="popup-overlay">
            <div className="popup-content">
               <div className="generate-Quiz">
              <h2>generate Quiz</h2>
              <h3>Choose Quiz</h3>
               <div className="Select-Topic"></div>
               <div className="Paste-Text"></div>
              <p>
                <strong>ID:</strong> {topic.id}
              </p>
              <p>
                <strong>Name:</strong> {topic.name}
              </p>
              <button onClick={onClose}>Close</button>
              </div>
            </div>
          </div>
          </div>
    </>
    );
}