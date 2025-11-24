import SingleServiceUI from "@/components/Services/SingleServices";
import { notFound } from "next/navigation";


// 1. Fetch data function
async function getServiceData(slug) {
    try {
        // Ensure NEXT_PUBLIC_BACKEND_API doesn't have a trailing slash in .env
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/service/${slug}`, {
            cache: "no-store", // Ensures fresh data
        });

        if (!res.ok) return null;
        return res.json();
    } catch (error) {
        console.error("Failed to fetch service:", error);
        return null;
    }
}

// 2. Generate Metadata for SEO
export async function generateMetadata({ params }) {
    // Await params for Next.js 15 compatibility
    const { slug } = await params;

    const data = await getServiceData(slug);
    if (!data) return { title: "Service Not Found" };

    return {
        title: data.metaTitle || data.serviceName,
        description: data.metaDescription,
    };
}

// 3. The Main Page Component
export default async function ServicePage({ params }) {
    // Await params for Next.js 15 compatibility
    const { slug } = await params;

    const service = await getServiceData(slug);

    if (!service) {
        notFound(); // Redirects to 404 page if slug doesn't exist in DB
    }

    return <SingleServiceUI service={service} />;
}