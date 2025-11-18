"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";

const CommentsOnBlog = ({ blogId }) => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);

    // 🔹 Fetch all comments for this blog
    const fetchComments = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/comments/${blogId}`);
            const data = await res.json();
            if (data.success) {
                setComments(data.comments);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // 🔹 Add new comment
    const addComment = async () => {
        if (!comment.trim()) return;

        setLoading(true);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/comments/add`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ blogId, comment }),
            });

            const data = await res.json();

            if (data.success) {
                setComment("");
                fetchComments(); // reload comments
            } else {
                console.log("Failed to add comment");
            }
        } catch (error) {
            console.log(error);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <div className="w-full max-w-3xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md border border-gray-200">

            {/* Title */}
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
                <MessageCircle size={22} className="text-[#00cba9]" />
                Comments
            </h2>

            {/* Input Box */}
            <div className="flex gap-3 mb-6">
                <input
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    type="text"
                    placeholder="Write a comment..."
                    className="flex-1 border border-gray-300 p-3 rounded-lg outline-none bg-gray-50 focus:ring-2 focus:ring-[#00cba9]"
                />

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={addComment}
                    disabled={loading}
                    className="bg-[#00cba9] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#00b99b]"
                >
                    {loading ? "Sending..." : <Send size={18} />}
                </motion.button>
            </div>

            {/* Show All Comments */}
            <div className="space-y-4">
                {comments.length === 0 ? (
                    <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                ) : (
                    comments.map((c, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 p-3 rounded-lg bg-gray-50"
                        >
                            <p className="text-gray-800">{c.comment}</p>
                            <span className="text-xs text-gray-400">
                                {new Date(c.createdAt).toLocaleString()}
                            </span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CommentsOnBlog;
