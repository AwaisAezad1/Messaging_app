import React, { useState, useEffect } from "react";
import color from "../assets/constants/color.json";
import styles from "./Messegesdisplay.module.css";
import people from "../assets/images/people.png";
import send from "../assets/images/sendmsg.png";
import { useData } from "../context/DataProvider";

function Messegesdisplay() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState(null);
  const { chats, setSelectedChat, selectedChat } = useData();

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      // setOutgoingMessages([...outgoingMessages, message]);
      setMessage("");
    }
  };

  useEffect(() => {
    if (selectedChat !== "") {
      let tempChat = chats.filter((c) => c._id == selectedChat);
      setChat(tempChat[0]);
    }
  }, [chats, selectedChat]);

  return !chat ? (
    <div>No Chat Selected</div>
  ) : (
    <div className={styles.displaymain}>
      <div className={styles.displaybox1}>
        <div className={styles.top}>
          <div className={styles.peopletext}>
            <img width="40" height="40" src={people} alt="" />
            <h1>{chat.memberIds[0].fullName}</h1>
          </div>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/ios/50/video-call.png"
            alt="video-call"
          />
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/888888/ios-glyphs/30/search--v1.png"
            alt="search--v1"
          />
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/ffffff/ios-glyphs/25/menu-2.png"
            alt="menu-2"
          />
        </div>

        <div id="message_body" className={styles.message_body}>
          <div className={styles.messageContainer}>
            <div className={styles.incomingMessages}>
              {chat.messages.map((msg, index) => (
                <div
                  key={index}
                  className={styles.message}
                  style={
                    msg.senderId == "you"
                      ? {
                          background: color.ingoingchat,
                          alignSelf: "flex-start",
                        }
                      : {
                          background: color.outgoingchat,
                          alignSelf: "flex-end",
                        }
                  }
                >
                  <p>{msg.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.displaybox2}>
        <img
          className={styles.emoji}
          width="24"
          height="24"
          src="https://img.icons8.com/ffffff/ios-glyphs/30/happy--v1.png"
          alt="happy--v1"
        />
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/888888/android/24/plus.png"
          alt="plus"
        />
        <input
          type="text"
          placeholder="Type your message"
          value={message}
          onChange={handleInputChange}
        />
        {message.trim() !== "" ? (
          <img src={send} alt="send" onClick={handleSendMessage} />
        ) : (
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/ffffff/material-rounded/24/microphone.png"
            alt="microphone"
          />
        )}
      </div>
    </div>
  );
}

export default Messegesdisplay;
