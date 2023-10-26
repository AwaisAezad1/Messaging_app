import React from "react";
import styles from "./Messegeslist.module.css";
import Navbar from "../components/Navbar";
import { useData } from "../context/DataProvider";
import color from "../assets/constants/color.json";

function Messegeslist() {
  const { chats, setSelectedChat, selectedChat } = useData();

  return (
    <div
      className={styles.Messagemain}
      style={{ background: color.messagelist_background }}
    >
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
        {chats.map((participant) => {
          const lastMessage =
            participant.messages.length > 0
              ? participant.messages[participant.messages.length - 1]
              : null;

          return (
            <div
              id={participant._id}
              key={participant._id}
              className={`${styles.chatItem} ${
                selectedChat === participant._id ? styles.selectedChat : ""
              }`}
              onClick={() => setSelectedChat(participant._id)}
            >
              <img
                src={
                  "https://media.licdn.com/dms/image/D4E03AQFw7Z_PubcnnA/profile-displayphoto-shrink_100_100/0/1677415472848?e=1703721600&v=beta&t=PVQkBuDVesusHxRWRkJkIe3dqAG6bwF-amDFWEAZNmk"
                }
                alt="Profile Picture"
              />
              <h2>
                <div className={styles.messageField}>
                  <div className={styles.nameTimeBar}>
                    <h1>{participant.user.fullName}</h1>
                    <h1 className={styles.time}>
                      <div key={participant.creationDate}>
                        {new Date(participant.creationDate).toLocaleTimeString(
                          [],
                          {
                            timeStyle: "short",
                          }
                        )}
                      </div>
                    </h1>
                  </div>
                  <p>
                    {participant.messages.length > 0
                      ? participant.messages[participant.messages.length - 1]
                          .text
                      : "No messages yet..."}
                  </p>
                </div>
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Messegeslist;
