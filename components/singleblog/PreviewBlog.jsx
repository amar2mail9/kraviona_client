import React from "react";
import Image from "next/image"; // Assuming you are using Next.js Image component

export const PreviewBlog = ({ blog, isLoading }) => {

    if (isLoading) {
        return (
            <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
                <div className="h-64 bg-gray-200 rounded w-full mt-6"></div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md text-center">
                <h2 className="text-2xl font-semibold mb-4">Blog not found</h2>
                <p>We couldn't find the post you are looking for.</p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md leading-relaxed">

            {/* Category & Date */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md font-medium">
                    {blog.category}
                </span>
                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
            </div>

            {/* Dynamic Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {blog.title}
            </h1>

            {/* Author Info */}
            <div className="flex items-center gap-3 mb-8 border-b pb-6">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold text-white">
                    {/* Fallback avatar using first letter of name */}
                    {blog.author?.name?.charAt(0) || "A"}
                </div>
                <div>
                    <p className="text-sm font-semibold text-gray-900">{blog.author?.name}</p>
                    <p className="text-xs text-gray-500">{blog.author?.email}</p>
                </div>
            </div>

            {/* Featured Image */}
            {blog.featuredImage && (
                <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
                    <img
                        src={blog.featuredImage}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* DYNAMIC CONTENT RENDERING */}
            {/* WARNING: Ensure your blog.content is sanitized (using something like DOMPurify) 
                on the backend before saving to prevent XSS attacks.
            */}
            <div
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
                <div className="mt-10 pt-6 border-t">
                    <h3 className="text-sm font-bold text-gray-700 mb-3">Tags:</h3>
                    <div className="flex flex-wrap gap-2">
                        {blog.tags.map((tag, index) => (
                            <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};