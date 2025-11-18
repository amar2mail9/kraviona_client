

// import { PreviewBlog } from "@/components/singleblog/PreviewBlog";
import { SingleBlog } from "@/components/singleblog/SingleBlog";
import React from "react";
const page = async ({ params }) => {
    const { slug } = await params


    return <div>
        <SingleBlog slug={slug} />
    </div>
}

export default page 