"use client"
import React from "react";
import { PopularBlog } from "./Popular";
import RecentBlogs from "./Recents";
import FeaturedPost from "./FeturedPost";
import BlogCategories from "./BlogCategories";


export const BlogLandingPage = () => {





    return <section>
        {/* <FeaturedPost /> */}
        <PopularBlog />
        <hr className="text-gray-600" />
        <RecentBlogs />
        <hr className="text-gray-600" />
        <BlogCategories />
    </section>
}

