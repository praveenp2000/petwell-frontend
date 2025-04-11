"use client";
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
// import { fetch } from 'undici';

import { useState } from "react";

const ChatBox = (_props) => {
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!message.trim()) return;

        setLoading(true);
        setChat([...chat, { sender: "user", text: message }]);

        // const controller = new AbortController();
        // const timeout = setTimeout(() => controller.abort(), 12000000);

        try {
            const response = await fetch("/api/ollama-chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message }),
                // signal: controller.signal
            });

            // clearTimeout(timeout);


            const data = await response.json();
            setChat([...chat, { sender: "user", text: message }, { sender: "bot", text: data.response }]);
            setMessage("");
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-5 right-5 w-80 p-4 bg-white shadow-lg rounded-lg">
            <div className="h-64 overflow-y-auto border-b mb-2 p-2">
                <div className='flex justify-between'>
                    <div className='font-[Poppins] text-xl font-bold pb-10'>Chat with our Bot</div>
                    <Box sx={{ display: 'flex', justifyContent: 'end', cursor: 'pointer' }}>
                        <CloseIcon onClick={() => _props.closeChatBot()} />
                    </Box>
                </div>

                {chat.map((msg, index) => (
                    <div key={index} className={msg.sender === "user" ? "text-right text-gray-800  font-[Poppins] text-[15px]" : "text-[15px] font-[Poppins] text-left text-black "}>
                        <p className={msg.sender === "user" ? "p-2 rounded bg-green-100" : "p-2 rounded bg-blue-100"} >{msg.text}</p>
                    </div>
                ))}
            </div>
            <div className="flex gap-2">
                <input
                    disabled={loading}
                    type="text"
                    value={loading ? '' : message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-grow border p-2 rounded"
                    placeholder="Type a message..."
                />
                <button onClick={sendMessage} disabled={loading} className="bg-blue-500 text-white p-2 rounded">
                    {loading ? "..." : "Send"}
                </button>
            </div>
        </div>
    );
};

export default ChatBox;
