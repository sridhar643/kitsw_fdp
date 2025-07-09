import React from 'react';
import './ReactTopics.css';  // Import external CSS

function ReactTopics() {
  const topics = [
    "Events",
    "Conditionals",
    "Lists",
    "Hooks useState",
    "Hooks useEffect"
  ];

  return (
    <div className="container">
      {topics.map((topic, index) => (
        <div key={index} className="topic-bubble">
          {topic}
        </div>
      ))}
    </div>
  );
}

export default ReactTopics;
