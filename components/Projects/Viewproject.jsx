"use client"
import { projects } from "@/Data/changableData";

import { useParams } from "next/navigation";
import React from "react";

export const Viewproject = () => {

    const { slug } = useParams()

    const project = projects.find((item) => item.slug = slug)
    console.log(project);




    return <embed
        src={project.link}
        type="text/html"
        className="w-full h-screen border-none"
    />


}