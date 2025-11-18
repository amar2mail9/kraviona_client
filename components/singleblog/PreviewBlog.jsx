import React from "react";

export const PreviewBlog = () => {
    return (
        <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md leading-relaxed">
            <h1 className="text-3xl font-bold mb-4">What Is AI? (Artificial Intelligence Explained Simply)</h1>

            <p className="mb-4">
                Artificial Intelligence, or AI, is one of the most revolutionary technologies of our time.
                It refers to the ability of machines to perform tasks that normally require human intelligence.
                From smartphones to self-driving cars and even advanced tools like ChatGPT, AI has become a major
                part of our daily lives without us even noticing.
            </p>

            {/* Understanding AI */}
            <h2 className="text-2xl font-semibold mt-6 mb-2">Understanding AI in Simple Words</h2>
            <p className="mb-4">
                In simple terms, <strong>AI is a technology that allows computers to think, learn,
                    and make decisions like humans</strong> — but often faster and more accurately.
                Unlike traditional programs that follow fixed rules, AI systems can learn from experience and improve automatically.
            </p>

            <p className="mb-4">
                Example: Your movie recommendations on Netflix keep getting better because
                AI learns your watching habits.
            </p>

            {/* How AI Works */}
            <h2 className="text-2xl font-semibold mt-6 mb-2">How AI Works?</h2>
            <p className="mb-2">
                AI works using a combination of:
            </p>

            <ul className="list-disc ml-6 space-y-2 mb-4">
                <li><strong>Data:</strong> AI needs large amounts of data to learn patterns.</li>
                <li><strong>Algorithms:</strong> Step-by-step mathematical instructions that help AI understand data.</li>
                <li><strong>Machine Learning (ML):</strong> A subset of AI where the machine learns from data automatically.</li>
                <li><strong>Neural Networks & Deep Learning:</strong> Advanced systems inspired by the human brain.</li>
            </ul>

            {/* Types of AI */}
            <h2 className="text-2xl font-semibold mt-6 mb-2">Different Types of AI</h2>

            <h3 className="text-xl font-semibold mt-4">1. Narrow AI (Weak AI)</h3>
            <p className="mb-3">Designed for a specific task. Examples: Siri, Alexa, Google Maps, ChatGPT, Face Unlock.</p>

            <h3 className="text-xl font-semibold">2. General AI (Strong AI)</h3>
            <p className="mb-3">Machines that can think like humans. Still theoretical and not yet built.</p>

            <h3 className="text-xl font-semibold">3. Super AI</h3>
            <p className="mb-3">AI smarter than humans in every field. Only a concept for the future.</p>

            {/* Applications */}
            <h2 className="text-2xl font-semibold mt-6 mb-2">Real-Life Applications of AI</h2>
            <ul className="list-disc ml-6 space-y-2 mb-4">
                <li>Healthcare → disease detection, robotic surgeries</li>
                <li>Education → personalized learning</li>
                <li>Finance → fraud detection, stock analysis</li>
                <li>E-commerce → product recommendations</li>
                <li>Transportation → self-driving cars</li>
                <li>Security → face and voice recognition</li>
            </ul>

            {/* Importance */}
            <h2 className="text-2xl font-semibold mt-6 mb-2">Why Is AI Important?</h2>
            <ul className="list-disc ml-6 space-y-2 mb-4">
                <li>Speeds up complex tasks</li>
                <li>Reduces human errors</li>
                <li>Automates repetitive work</li>
                <li>Makes predictions</li>
                <li>Saves time and effort</li>
                <li>Improves accuracy</li>
            </ul>

            {/* Future */}
            <h2 className="text-2xl font-semibold mt-6 mb-2">Future of AI</h2>
            <p className="mb-4">
                The future of AI is extremely promising. We can expect smarter robots, AI-powered vehicles,
                advanced assistants, and more natural conversations with machines. But at the same time,
                it raises questions about privacy, ethics, and job changes which must be managed responsibly.
            </p>

            {/* Conclusion */}
            <h2 className="text-2xl font-semibold mt-6 mb-2">Conclusion</h2>
            <p className="mb-2">
                AI is not just a futuristic idea — it is already shaping our present. From daily mobile apps to
                scientific research, AI is helping humans achieve more.
            </p>

            <p>
                As technology grows, AI will continue to transform industries and make life smarter,
                faster, and more connected.
            </p>
        </div>
    );
};
