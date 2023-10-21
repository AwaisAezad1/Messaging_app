import React, { useState } from 'react';
import styles from './Messegeslist.module.css';
import Navbar from '../components/Navbar';

function Messegeslist() {
  // Define a list of chat participants
  const chatParticipants = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Alice Johnson" },
    { id: 3, name: "Bob Smith" },
    // Add more participants as needed
  ];

  // Define a state to keep track of the selected chat participant
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className={styles.Messagemain}>
      <Navbar />
      <div className={styles.search_part}>
        <img
          className={styles.search}
          width="20"
          height="20"
          src="https://img.icons8.com/888888/ios-glyphs/30/search--v1.png"
          alt="search--v1"
        />
        <input type='text' placeholder='Search or start a new chat' />
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/888888/ios/50/filter--v1.png"
          alt="filter--v1"
        />
      </div>

      <div className={styles.msgpeople}>
        {chatParticipants.map((participant) => (
          <div
            key={participant.id}
            className={`${styles.chatItem} ${selectedChat === participant.id ? styles.selectedChat : ''}`}
            onClick={() => setSelectedChat(participant.id)}
          >
            <span><p>{participant.name}</p></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messegeslist;
