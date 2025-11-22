"use client";
import React from "react";
import { Search, AlertCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const SearchResultPage = ({ keyword }) => {
    const [results, setResults] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const decodedKeyword = decodeURIComponent(keyword);
    // Helper function to highlight the keyword inside HTML string
    const highlightText = (htmlContent, query) => {
        if (!query || !htmlContent) return htmlContent || "";

        // Create a Regular Expression with 'gi' (Global, Case-insensitive)
        const regex = new RegExp(`(${query})`, "gi");

        // Replace the match with a highlighted span
        // We use $1 to keep the original case of the found word
        return htmlContent.replace(
            regex,
            '<mark class="bg-yellow-300 text-gray-900 font-semibold px-0.5 rounded">$1</mark>'
        );
    };

    const fetchResults = async () => {
        setLoading(true);
        setError(null);
        try {

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_API}/search-results?keyword=${decodedKeyword}`
            );

            if (!response.ok) throw new Error("Network response was not ok");

            const data = await response.json();
            setResults(data.results || []);
        } catch (err) {
            setError("Failed to fetch search results. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        if (decodedKeyword) {
            fetchResults(decodedKeyword);
        }
    }, [decodedKeyword]);

    // --- RENDER HELPERS ---

    // 1. Loading State
    if (loading) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mb-8"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                        <div key={n} className="h-64 bg-gray-100 rounded-xl animate-pulse"></div>
                    ))}
                </div>
            </div>
        );
    }

    // 2. Error State
    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
                <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">Something went wrong</h3>
                <p className="text-gray-500 mt-1">{error}</p>
                <button
                    onClick={() => fetchResults(keyword)}
                    className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                    Try Again
                </button>
            </div>
        );
    }

    // 3. Empty State
    if (!results || results.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
                <div className="bg-gray-100 p-4 rounded-full mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">No results found</h3>
                <p className="text-gray-500 mt-1">
                    We couldn't find anything matching <span className="font-bold">"{decodedKeyword}"</span>.
                </p>
            </div>
        );
    }

    // 4. Success State (Results Grid)
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Search Results</h1>
                    <p className="text-gray-500 mt-2 flex items-center gap-2">
                        Found {results.length} results for
                        <span className="bg-emerald-100 text-emerald-800 px-3 py-0.5 rounded-full text-sm font-medium">
                            {decodedKeyword}
                        </span>
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {results.map((item, index) => (
                        <div
                            key={item.id || index}
                            className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
                        >
                            {/* Image */}
                            {item.image && (
                                <div className="h-48 w-full overflow-hidden bg-gray-100">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            )}

                            {/* Card Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-start justify-between mb-2">
                                    <span className="text-xs font-semibold tracking-wide text-emerald-500 uppercase">
                                        {item.category || "Result"}
                                    </span>
                                </div>

                                <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                    {item.title || "Untitled Result"}
                                </h2>

                                {/* HTML Content with Highlight 
                   dangerouslySetInnerHTML renders the HTML tags.
                   highlightText adds the <mark> tag around keywords.
                */}
                                <div
                                    className="text-gray-600 text-sm line-clamp-3 flex-grow"
                                    dangerouslySetInnerHTML={{
                                        __html: highlightText(item.content, keyword)
                                    }}
                                />

                                <div className="mt-6 pt-4 border-t border-gray-100">
                                    <Link
                                        href={`/blog/${item.slug || ""}`}
                                        className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-800"
                                    >
                                        View Details <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};