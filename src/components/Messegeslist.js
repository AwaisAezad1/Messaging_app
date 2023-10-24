import React, { useState } from "react";
import styles from "./Messegeslist.module.css";
import Navbar from "../components/Navbar";
import { useData } from "../context/DataProvider";
import color from '../assets/constants/color.json'
function Messegeslist() {
  // Define a list of chat participants
  const { chats, setSelectedChat, selectedChat } = useData();

  // Define a state to keep track of the selected chat participant

  return (
    <div className={styles.Messagemain} style={{background:color.messagelist_background}}>
      <Navbar />
      <div className={styles.search_part}>
        <img
          className={styles.search}
          width="20"
          height="20"
          src="https://img.icons8.com/888888/ios-glyphs/30/search--v1.png"
          alt="search--v1"
        />
        <input type="text" placeholder="Search or start a new chat" />
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/888888/ios/50/filter--v1.png"
          alt="filter--v1"
        />
      </div>

      <div className={styles.msgpeople}>
        {chats.map((participant) => (
          <div
            id={participant._id}
            key={participant._id}
            className={`${styles.chatItem} ${
              selectedChat == participant._id ? styles.selectedChat : ""
            }`}
            onClick={() => setSelectedChat(participant._id)}
          >
            <img src={participant.memberIds[0].profilePictureUrl} alt="Profile Picture" />
            <h2><h1>{participant.memberIds[0].fullName}</h1>
            <p>{participant.messages.length > 0 ? participant.messages[participant.messages.length - 1].text : ''}</p>
            </h2>
                    

          </div>
        ))}
      </div>
    </div>
  );
}

export default Messegeslist;
