"use client"
import React, { useState } from "react";
import {
    User,
    Package,
    MapPin,
    CreditCard,
    LogOut,
    Settings,
    ChevronRight
} from "lucide-react";

export const MyAccount = () => {
    const [activeTab, setActiveTab] = useState("profile");

    // Mock User Data (Replace with real data from your backend/context)
    const userData = {
        name: "Amar Kumar",
        email: "amar.kumar@example.com",
        phone: "+91 98765 43210",
        avatar: "https://ui-avatars.com/api/?name=Amar+Kumar&background=0D8ABC&color=fff"
    };

    // Mock Orders Data
    const orders = [
        { id: "#ORD-7782", date: "Nov 24, 2025", total: "₹2,499", status: "Delivered", color: "text-green-600 bg-green-50" },
        { id: "#ORD-7783", date: "Nov 20, 2025", total: "₹899", status: "In Transit", color: "text-blue-600 bg-blue-50" },
        { id: "#ORD-7784", date: "Nov 15, 2025", total: "₹4,200", status: "Processing", color: "text-yellow-600 bg-yellow-50" },
    ];

    // Helper to render content based on active tab
    const renderContent = () => {
        switch (activeTab) {
            case "profile":
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        defaultValue={userData.name}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        defaultValue={userData.email}
                                        disabled
                                        className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 text-gray-500 shadow-sm sm:text-sm p-2 border cursor-not-allowed"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input
                                        type="tel"
                                        defaultValue={userData.phone}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">Save Changes</button>
                            </div>
                        </div>
                    </div>
                );

            case "orders":
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-800">Order History</h2>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {orders.map((order) => (
                                        <tr key={order.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.color}`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.total}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button className="text-blue-600 hover:text-blue-900">View</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );

            case "address":
                return (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-800">Saved Addresses</h2>
                            <button className="text-sm bg-gray-800 text-white px-4 py-2 rounded hover:bg-black transition">+ Add New</button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Address Card 1 */}
                            <div className="border border-gray-200 rounded-lg p-4 shadow-sm relative hover:border-blue-400 transition cursor-pointer">
                                <div className="absolute top-4 right-4 text-blue-600">
                                    <MapPin size={20} />
                                </div>
                                <h3 className="font-semibold text-gray-800">Home</h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    123, Tech Street, Sector 62<br />
                                    Noida, Uttar Pradesh - 201301
                                </p>
                                <div className="mt-4 flex gap-4 text-sm font-medium">
                                    <button className="text-blue-600 hover:underline">Edit</button>
                                    <button className="text-red-500 hover:underline">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            default:
                return <div>Select a tab</div>;
        }
    };

    return (
        <section className="bg-gray-50 min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
                    <p className="text-gray-500 mt-1">Manage your profile, orders, and settings.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Navigation */}
                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">

                            {/* User Mini Profile in Sidebar */}
                            <div className="p-6 border-b border-gray-200 flex items-center gap-4">
                                <img src={userData.avatar} alt="Profile" className="w-12 h-12 rounded-full" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">{userData.name}</h3>
                                    <p className="text-xs text-gray-500 truncate w-32">{userData.email}</p>
                                </div>
                            </div>

                            {/* Navigation Links */}
                            <nav className="p-2 space-y-1">
                                {[
                                    { id: "profile", label: "Profile Info", icon: User },
                                    { id: "orders", label: "My Orders", icon: Package },
                                    { id: "address", label: "Addresses", icon: MapPin },
                                    { id: "settings", label: "Settings", icon: Settings },
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveTab(item.id)}
                                        className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-md transition-colors ${activeTab === item.id
                                            ? "bg-blue-50 text-blue-700"
                                            : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <item.icon size={18} />
                                            {item.label}
                                        </div>
                                        {activeTab === item.id && <ChevronRight size={16} />}
                                    </button>
                                ))}

                                <hr className="my-2 border-gray-100" />

                                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 rounded-md hover:bg-red-50 transition-colors">
                                    <LogOut size={18} />
                                    Sign Out
                                </button>
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1 min-h-[500px]">
                        {renderContent()}
                    </main>
                </div>
            </div>
        </section>
    );
};