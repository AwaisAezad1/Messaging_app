import React, { useState, useEffect } from "react";
import color from "../assets/constants/color.json";
import backgroundImage from "../assets/images/images.json";
import styles from "./Messegesdisplay.module.css";
import logo from "../assets/images/logo.png";
import { useData } from "../context/DataProvider";

function Messegesdisplay() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState(null);
  const { chats, selectedChat } = useData();

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      const newMessage = {
        text: message,
        senderId: "you", // Assuming "you" is the sender of the message
      };

      const updatedChat = {
        ...chat,
        messages: [...chat.messages, newMessage],
      };

      
      setChat(updatedChat);

      
      setMessage("");
    }
  };

  useEffect(() => {
    if (selectedChat !== "") {
      let tempChat = chats.filter((c) => c._id === selectedChat);
      setChat(tempChat[0]);
    }
  }, [chats, selectedChat]);

  return !chat ? (
    <div className={styles.nochat_main}>
      <img src={logo} alt="logo" />
      <h1>Download Vet-Guard for Mobile</h1>
      <h2>Make calls, share your screen and get a faster experience when you download the Windows app.</h2>
      <button>Get the App</button>
    </div>
  ) : (
    <div className={styles.displaymain}>
      <div className={styles.displaybox1} style={{background:color.message_display_navbarandfooter}}>
        <div className={styles.top}>
          <div className={styles.peopletext}>
            <img src={chat.memberIds[0].profilePictureUrl} alt="Profile Picture" />
            <h1>{chat.memberIds[0].fullName}</h1>
          </div>
          <div className={styles.topLinks}>
          <img 
            width="24"
            height="24"
            src="https://img.icons8.com/ffffff/ios/50/video-call.png"
            alt="video-call"
          />
          <img className={styles.link}
            width="24"
            height="24"
            src="https://img.icons8.com/ffffff/ios-glyphs/30/search--v1.png"
            alt="search--v1"
          />
          <img className={styles.link}
            width="24"
            height="24"
            src="https://img.icons8.com/ffffff/ios-glyphs/25/menu-2.png"
            alt="menu-2"
          />
          </div>
        </div>

        <div id="message_body" className={styles.message_body} style={{backgroundImage: `url(${backgroundImage.message_display_background})`}}>
          <div className={styles.messageContainer}>
            <div className={styles.incomingMessages}>
              {chat.messages.map((msg, index) => (
                <div
                  key={index}
                  className={styles.message}
                  style={
                    msg.senderId === "you"
                      ? {
                          background: color.outgoingchat,
                          alignSelf: "flex-end",
                        }
                      : {
                          background: color.ingoingchat,
                          alignSelf: "flex-start",
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
      <div className={styles.displaybox2} style={{background:color.message_display_navbarandfooter}}>
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
          src="https://img.icons8.com/ffffff/android/24/plus.png"
          alt="plus"
        />
        <input
          type="text"
          placeholder="Type your message"
          value={message}
          onChange={handleInputChange}
        />
        {message.trim() !== "" ? (
          <img width="24" height="24" src="https://img.icons8.com/ffffff/fluency-systems-regular/48/sent--v1.png" alt="sent--v1" onClick={handleSendMessage} /> 
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
