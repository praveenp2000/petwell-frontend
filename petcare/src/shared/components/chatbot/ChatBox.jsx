"use client";
import { useState } from "react";
import { Box, Chip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import petChatData from './data.js'; // adjust path if needed

const ChatBox = (_props) => {
    const [chat, setChat] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentOptions, setCurrentOptions] = useState(Object.keys(petChatData.options)); // initial: ["cat", "dog"]
    const [currentContext, setCurrentContext] = useState(null); // "cat" or "dog"

    const handleOptionClick = (option) => {
        if (!currentContext) {
            // User selected pet type
            setChat(prev => [...prev, { sender: "user", text: option }]);
            setCurrentContext(option);
            setCurrentOptions(Object.keys(petChatData.options[option].questions));
        } else {
            // User selected a question
            const answer = petChatData.options[currentContext].questions[option];
            setChat(prev => [
                ...prev,
                { sender: "user", text: option },
                { sender: "bot", text: answer }
            ]);
        }
    };


    return (
        <div className="fixed bottom-5 right-5 w-80 p-4 bg-white shadow-lg rounded-lg">
            <div className="h-64 overflow-y-auto border-b mb-2 p-2">
                <div className="flex justify-between">
                    <div className="font-[Poppins] text-xl font-bold pb-10">Chat with our Bot</div>
                    <Box sx={{ display: 'flex', justifyContent: 'end', cursor: 'pointer' }}>
                        <CloseIcon onClick={() => _props.closeChatBot()} />
                    </Box>
                </div>

                {chat.map((msg, index) => (
                    <div key={index} className={msg.sender === "user" ? "text-right text-gray-800 font-[Poppins] text-[15px]" : "text-[15px] font-[Poppins] text-left text-black"}>
                        <p className={msg.sender === "user" ? "p-2 rounded bg-green-100 inline-block" : "p-2 rounded bg-blue-100 inline-block"}>{msg.text}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
                {currentOptions.map((option, index) => (
                    <Chip
                        key={index}
                        label={option}
                        onClick={() => handleOptionClick(option)}
                        color="primary"
                        clickable
                        sx={{ margin: "2px" }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ChatBox;
