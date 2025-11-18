"use client";
import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function ChatWidget() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Floating Chat Button */}
            <button
                onClick={() => setOpen(!open)}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    zIndex: 9999,
                    background: "#0d9488",
                    padding: "15px",
                    borderRadius: "50%",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                <MessageCircle size={24} />
            </button>

            {/* Chat Widget */}
            {open && (
                <iframe
                    src="https://www.chatbase.co/chatbot-iframe/mNhvoHiJla67Lp45kFwUP"
                    style={{
                        position: "fixed",
                        bottom: "80px",
                        right: "20px",
                        width: "350px",
                        height: "500px",
                        border: "none",
                        borderRadius: "12px",
                        zIndex: 9999,
                    }}
                ></iframe>
            )}
        </>
    );
}
