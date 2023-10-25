import React, { useState, useEffect } from "react";
import color from "../assets/constants/color.json";
import backgroundImage from "../assets/images/images.json";
import styles from "./Messegesdisplay.module.css";
import logo from "../assets/images/logo.png";
import { useData } from "../context/DataProvider";
import { useUser } from "../context/UserProvider";
import { useSocket } from "../context/SocketProvider";
import { api } from "../config/Api";
import axios from "axios";

function Messegesdisplay() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const { chats, selectedChat } = useData();
  const { user } = useUser();
  const { socket } = useSocket();
  const [loading, setLoading] = useState(false);
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    socket.on("psychReceiveMessage", (data) => {
      setMessages((prev) => [...prev, data.savedMessage]);
      // const newChat = { ...chat };
      // console.log(newChat);
    });
  }, []);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      const newMessage = {
        chatId: selectedChat,
        psychiatristId: user._id,
        senderType: "Psychiatrist",
        messageText: message,
      };

      socket.emit("psychSendMessage", newMessage);
      setMessage("");
    }
  };

  useEffect(() => {
    if (selectedChat) {
      setLoading(true);
      axios
        .post(api + "/psychats/fetch-chat", { chatId: selectedChat })
        .then((response) => {
          setChat(response.data.chat);
          setMessages(response.data.chat.messages.reverse());
          socket.emit("psychJoinRoom", { chatId: selectedChat });
          setLoading(false);
        });
    }
  }, [selectedChat]);

  return !chat ? (
    <div className={styles.nochat_main}>
      <img src={logo} alt="logo" />
      <h1>Download Vet-Guard for Mobile</h1>
      <h2>
        Make calls, share your screen and get a faster experience when you
        download the Windows app.
      </h2>
      <button>Get the App</button>
    </div>
  ) : (
    <div className={styles.displaymain}>
      <div
        className={styles.displaybox1}
        style={{
          background: color.message_display_navbarandfooter,
        }}
      >
        <div className={styles.top}>
          <div className={styles.peopletext}>
            <img
              src={
                "https://media.licdn.com/dms/image/D4E03AQFw7Z_PubcnnA/profile-displayphoto-shrink_100_100/0/1677415472848?e=1703721600&v=beta&t=PVQkBuDVesusHxRWRkJkIe3dqAG6bwF-amDFWEAZNmk"
              }
              alt="Profile Picture"
            />
            <h1>{chat.user.fullName}</h1>
          </div>
          <div className={styles.topLinks}>
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/ffffff/ios/50/video-call.png"
              alt="video-call"
            />
            <img
              className={styles.link}
              width="24"
              height="24"
              src="https://img.icons8.com/ffffff/ios-glyphs/30/search--v1.png"
              alt="search--v1"
            />
            <img
              className={styles.link}
              width="24"
              height="24"
              src="https://img.icons8.com/ffffff/ios-glyphs/25/menu-2.png"
              alt="menu-2"
            />
          </div>
        </div>

        <div
          id="message_body"
          className={styles.message_body}
          style={{
            backgroundImage: `url(${backgroundImage.message_display_background})`,
          }}
        >
          <div
            className={styles.messageContainer}
            style={{ paddingBottom: "30px" }}
          >
            <div className={styles.incomingMessages}>
              {loading ? (
                <div>Loading</div>
              ) : (
                messages.map((msg, index) => (
                  <div
                    key={index}
                    className={styles.message}
                    style={
                      msg.senderType === "Psychiatrist"
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
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.displaybox2}
        style={{ background: color.message_display_navbarandfooter }}
      >
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
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/ffffff/fluency-systems-regular/48/sent--v1.png"
            alt="sent--v1"
            onClick={handleSendMessage}
          />
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
