"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MessageCircle, User, Loader2, Clock } from "lucide-react";

const CommentsOnBlog = ({ blogId }) => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    // 🔹 Fetch all comments
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
                fetchComments();
            }
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchComments();
    }, []);

    // Helper to format date nicely
    const formatDate = (dateString) => {
        const options = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <section className="w-full max-w-4xl mx-auto mt-12 px-4 md:px-6 pb-20">

            {/* Header */}
            <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
                <div className="p-2 bg-emerald-50 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                    Discussion <span className="text-slate-400 text-lg font-normal">({comments.length})</span>
                </h2>
            </div>

            {/* Input Area - Responsive Wrapper */}
            <div className={`
        relative bg-white rounded-2xl border shadow-sm p-4 mb-10 transition-all duration-300
        ${isFocused ? 'border-emerald-400 shadow-emerald-100 ring-4 ring-emerald-50' : 'border-slate-200'}
      `}>
                <div className="flex gap-4">
                    {/* Current User Avatar (Static for now) */}
                    <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 border border-slate-200">
                        <User className="w-5 h-5 text-slate-400" />
                    </div>

                    <div className="flex-1">
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            placeholder="Share your thoughts on this article..."
                            className="w-full bg-transparent outline-none text-slate-700 placeholder-slate-400 min-h-[80px] resize-y text-base"
                        />

                        <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-100">
                            <p className="text-xs text-slate-400 hidden sm:block">
                                Be kind and constructive.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={addComment}
                                disabled={loading || !comment.trim()}
                                className={`
                  flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all
                  ${!comment.trim()
                                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                                        : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md hover:shadow-lg'}
                `}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        <span>Posting...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Post Comment</span>
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Comments List - Responsive Stack */}
            <div className="space-y-6">
                <AnimatePresence>
                    {comments.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200"
                        >
                            <MessageCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                            <p className="text-slate-500 font-medium">No comments yet.</p>
                            <p className="text-sm text-slate-400">Start the conversation!</p>
                        </motion.div>
                    ) : (
                        comments.map((c, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="flex gap-4 group"
                            >
                                {/* Commenter Avatar */}
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300 flex items-center justify-center shadow-sm">
                                        <span className="text-slate-500 font-bold text-sm">
                                            {/* Initials or generic icon */}
                                            <User className="w-5 h-5" />
                                        </span>
                                    </div>
                                </div>

                                {/* Comment Content */}
                                <div className="flex-1 space-y-1">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-bold text-slate-800 text-sm md:text-base">
                                            Guest User
                                            {/* If you have user names in API, replace 'Guest User' */}
                                        </h4>
                                        <span className="flex items-center text-xs text-slate-400 gap-1 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                                            <Clock className="w-3 h-3" />
                                            {formatDate(c.createdAt)}
                                        </span>
                                    </div>

                                    <div className="bg-slate-50/50 p-4 rounded-r-2xl rounded-bl-2xl border border-slate-100 hover:border-emerald-100 transition-colors">
                                        <p className="text-slate-600 text-sm md:text-base leading-relaxed whitespace-pre-wrap break-words">
                                            {c.comment}
                                        </p>
                                    </div>

                                    {/* Optional: Reply/Like actions for future */}
                                    <div className="flex gap-4 pt-1 pl-2">
                                        <button className="text-xs text-slate-400 hover:text-emerald-600 font-medium transition-colors">Reply</button>
                                        <button className="text-xs text-slate-400 hover:text-emerald-600 font-medium transition-colors">Like</button>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default CommentsOnBlog;