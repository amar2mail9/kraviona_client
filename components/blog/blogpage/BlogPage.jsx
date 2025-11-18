"use cleint"
import React from "react"
import { SearchBanner } from "./Search"
import { BlogLandingPage } from "../blogLandingPage/BlogLandingPage"
export const BlogPage = () => {
    return <div className="bg-gray-900">
        <SearchBanner />
        <BlogLandingPage />
    </div>
} 