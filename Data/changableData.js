export const menuList = [

  {
    name: "Home",
    link: "/",
    button: false
  },
  {
    name: "Services",
    link: "/services",
    button: false
  },

  {
    name: "Blog",
    link: '/blog',
    button: false
  }, {
    name: "About Us",
    link: "/about-us",
    button: false
  },

  {
    name: "Contact",
    link: "/contact-us",
    button: false
  },





]



export const projects = [
  {
    views: 25,
    slug: "polytechub-blog-portfolio",
    projectName: "Polytechub - Blog & Portfolio",
    domain: "Full Stack / Web Application",
    techUsed: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    description:
      "Polytechub is Amar Kumar’s personal blog and portfolio platform built on the MERN stack. It features dynamic blog posting, authentication, and a custom dashboard with rich text editing.",
    link: "https://polytechub.vercel.app",
    repo: "https://github.com/amar2mail9/polytechub",
    demo: "https://polytechub.vercel.app",
    screenshots: [
      "/images/polytechub/home.jpg",
      "/images/polytechub/blog.jpg",
      "/images/polytechub/dashboard.jpg"
    ],
    createdAt: "2025-02-01",
    role: "Full Stack Developer",
    status: "Live",
    features: [
      "Full CRUD blog management",
      "Rich text editor for creating blog posts",
      "JWT authentication with role-based access",
      "Responsive portfolio section",
      "SEO-friendly dynamic routes"
    ],
    tags: ["mern", "blog", "portfolio", "fullstack"],
    license: "MIT",
    contact: {
      owner: "Amar Kumar",
      email: "amar47kumar47@gmail.com"
    },
    notes: "Primary domain for Amar’s projects and blog content."
  },

  {
    slug: "ds-masala",
    projectName: "DS Masala - Rich Text Editor",
    domain: "Frontend / Web App",
    techUsed: ["React", "Draft.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    description:
      "DS Masala is a fully-featured rich text editor inspired by TinyMCE, supporting advanced formatting, media embedding, and HTML view mode.",
    link: "https://ds-masala.vercel.app",
    repo: "https://github.com/amar2mail9/custom-rich-text-editor",
    demo: "https://ds-masala.vercel.app",
    screenshots: ["/images/rte/editor.png"],
    createdAt: "2025-06-21",
    role: "Sole Developer",
    status: "In Progress",
    features: [
      "Bold, Italic, Underline, Superscript, Subscript",
      "Headings H1–H6, font sizes, and text colors",
      "Image/video embedding with upload feature",
      "Tables, code blocks, and math formula support",
      "HTML source view and export as JSON or HTML"
    ],
    tags: ["editor", "react", "frontend", "wysiwyg"],
    license: "GPL-3.0",
    views: 20,
    contact: {
      owner: "Amar Kumar",
      email: "amar47kumar47@gmail.com"
    },
    notes: "Backend API handles media upload and stores URLs in MongoDB."
  },

  {
    slug: "amartsblog",
    projectName: "Amar’s Blog - Developer Articles",
    domain: "Frontend / Blog Platform",
    techUsed: ["React", "Tailwind CSS", "Markdown", "Netlify"],
    description:
      "Amar’s Blog is a clean and responsive developer blog where Amar shares tutorials, coding tips, and personal projects.",
    link: "https://amartsblog.netlify.app/",
    repo: "https://github.com/amar2mail9/amartsblog",
    demo: "https://amartsblog.netlify.app/",
    screenshots: ["/images/amartsblog/home.jpg", "/images/amartsblog/post.jpg"],
    createdAt: "2025-03-01",
    role: "Frontend Developer",
    status: "Live",
    features: [
      "Markdown-based blog posts",
      "Fully responsive and mobile-friendly design",
      "Fast deployment via Netlify",
      "SEO-optimized pages",
      "Simple and elegant reading experience"
    ],
    tags: ["react", "blog", "frontend", "portfolio"],
    license: "MIT",
    contact: {
      owner: "Amar Kumar",
      email: "amar47kumar47@gmail.com"
    },
    notes: "Lightweight and optimized for personal blogging."
    ,
    views: 10
  }
];


export const blogs = [
  {
    id: "b001",
    user_id: "u001",
    title: "Exploring the Future of Artificial Intelligence in 2025",
    subtitle: "How AI is Transforming Industries and Human Life",
    summary:
      "Artificial Intelligence (AI) continues to reshape industries through automation, predictive analytics, and ethical innovation. Discover where AI is heading in 2025.",
    category: "Technology",
    featured_image:
      "https://cdn.britannica.com/47/246247-050-F1021DE9/AI-text-to-image-photo-robot-with-computer.jpg",
    main_content: `
      <h1>The Rise of AI</h1>
      <p>Artificial Intelligence has become a part of daily life, from smart homes to automated healthcare systems.</p>
      <h2>Key Areas of Growth</h2>
      <ul>
        <li>Healthcare automation</li>
        <li>AI in education and personalized learning</li>
        <li>Autonomous transportation</li>
      </ul>
      <blockquote>“AI will not replace humans, but humans using AI will replace those who don’t.”</blockquote>
      <p>The next decade will see deeper AI integration into every sector, balancing innovation with ethics.</p>
    `,
    seo: {
      title: "Exploring Artificial Intelligence in 2025 | Tech Insights",
      description:
        "A complete guide to Artificial Intelligence trends, applications, and ethics for 2025.",
      keywords: ["AI 2025", "Artificial Intelligence", "Machine Learning"],
      canonical_url: "https://polytechub.vercel.app/blog/future-of-ai-2025",
      robots: "index, follow",
    },
    created_at: "2025-10-28T10:00:00Z",
    updated_at: "2025-10-30T12:00:00Z",
    user: {
      id: "u001",
      first_name: "Amar",
      last_name: "Kumar",
      username: "amar_dev",
      role: "MERN Stack Developer",
      profile_pic:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&fit=max&w=400&q=80",
      email: "amar.kumar@example.com",
    },
    comments: [
      {
        id: "c001",
        user_name: "Sneha Gupta",
        text: "Amazing insights into the AI future!",
        created_at: "2025-10-29T09:40:00Z",
      },
    ],
    tags: ["AI", "Technology", "Future"],
    views: 10
  },
  {
    views: 8,
    id: "b002",
    user_id: "u001",
    title: "MERN Stack Development: Complete Beginner’s Guide 2025",
    subtitle: "Learn MongoDB, Express, React, and Node.js from Scratch",
    summary:
      "Master full-stack web development using the MERN stack — the most powerful combination for modern apps.",
    category: "Web Development",
    featured_image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    main_content: `
      <h1>Building Modern Apps with MERN</h1>
      <p>The MERN stack — MongoDB, Express, React, and Node.js — enables developers to build dynamic full-stack web applications.</p>
      <h2>Advantages of MERN</h2>
      <ul>
        <li>Single language for frontend and backend (JavaScript)</li>
        <li>Scalability and flexibility</li>
        <li>Strong developer community</li>
      </ul>
      <p>By 2025, MERN remains one of the most in-demand stacks for developers.</p>
    `,
    seo: {
      title: "MERN Stack Development Guide 2025 | Full-Stack Web Tutorial",
      description:
        "Step-by-step guide to mastering MERN stack — MongoDB, Express, React, and Node.js.",
      keywords: ["MERN", "Full Stack", "React", "Node.js", "MongoDB"],
      canonical_url: "https://polytechub.vercel.app/blog/mern-guide-2025",
      robots: "index, follow",
    },
    created_at: "2025-10-25T08:30:00Z",
    updated_at: "2025-10-28T11:00:00Z",
    user: {
      id: "u001",
      first_name: "Amar",
      last_name: "Kumar",
      username: "amar_dev",
      role: "MERN Stack Developer",
      profile_pic:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&fit=max&w=400&q=80",
      email: "amar.kumar@example.com",
    },
    comments: [
      {
        id: "c002",
        user_name: "Ravi Verma",
        text: "Loved the clear explanation on backend setup!",
        created_at: "2025-10-26T10:00:00Z",
      },
    ],
    tags: ["MERN", "Web Development", "JavaScript"],
  },
  {
    views: 20,
    id: "b003",
    user_id: "u001",
    title: "Next.js SEO Optimization: Boost Your Website Ranking",
    subtitle: "Complete SEO Setup for Next.js Projects",
    summary:
      "Learn how to add meta tags, generate sitemaps, and use dynamic SEO in Next.js to rank higher on Google.",
    category: "SEO",
    featured_image:
      "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&w=1200&q=80",
    main_content: `
      <h1>Optimizing Next.js for SEO</h1>
      <p>Next.js offers built-in features for server-side rendering (SSR), which helps search engines crawl your pages easily.</p>
      <h2>Key SEO Steps</h2>
      <ul>
        <li>Use dynamic meta tags with next/head</li>
        <li>Generate sitemap.xml and robots.txt</li>
        <li>Implement Open Graph for social sharing</li>
      </ul>
      <p>Proper SEO setup ensures faster indexing and better visibility for your Next.js website.</p>
    `,
    seo: {
      title: "Next.js SEO Optimization | Rank #1 on Google",
      description:
        "Optimize your Next.js site with metadata, sitemap, and dynamic SEO to boost Google ranking.",
      keywords: ["Next.js SEO", "Sitemap", "Google Ranking", "Web Optimization"],
      canonical_url: "https://polytechub.vercel.app/blog/nextjs-seo-optimization",
      robots: "index, follow",
    },
    created_at: "2025-10-20T07:20:00Z",
    updated_at: "2025-10-29T09:15:00Z",
    user: {
      id: "u001",
      first_name: "Amar",
      last_name: "Kumar",
      username: "amar_dev",
      role: "MERN Stack Developer",
      profile_pic:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&fit=max&w=400&q=80",
      email: "amar.kumar@example.com",
    },
    comments: [
      {
        id: "c003",
        user_name: "Priya Singh",
        text: "This helped me fix my sitemap issue, thank you!",
        created_at: "2025-10-22T11:50:00Z",
      },
    ],
    tags: ["Next.js", "SEO", "Optimization"],
  },
  {
    views: 250,
    id: "b004",
    user_id: "u001",
    title: "Building a Personal Portfolio Using React in 2025",
    subtitle: "Create a Modern Developer Portfolio with React and Tailwind CSS",
    summary:
      "A step-by-step guide to building a responsive, fast, and SEO-friendly portfolio website using React, Tailwind CSS, and Vercel.",
    category: "Frontend Development",
    featured_image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    main_content: `
      <h1>Create Your Portfolio</h1>
      <p>Your portfolio represents your professional identity as a developer. Building it with React offers flexibility and speed.</p>
      <h2>Steps to Build</h2>
      <ul>
        <li>Design layout using Figma</li>
        <li>Develop using React + Tailwind CSS</li>
        <li>Deploy easily on Vercel</li>
      </ul>
      <p>Make sure to add SEO tags, performance optimizations, and analytics for tracking visitors.</p>
    `,
    seo: {
      title: "Build a React Portfolio | Developer Guide 2025",
      description:
        "Learn to create a modern portfolio with React and Tailwind CSS and deploy it on Vercel in 2025.",
      keywords: ["React Portfolio", "Tailwind CSS", "Frontend Development"],
      canonical_url: "https://polytechub.vercel.app/blog/react-portfolio-guide",
      robots: "index, follow",
    },
    created_at: "2025-10-18T06:10:00Z",
    updated_at: "2025-10-28T08:30:00Z",
    user: {
      id: "u001",
      first_name: "Amar",
      last_name: "Kumar",
      username: "amar_dev",
      role: "MERN Stack Developer",
      profile_pic:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&fit=max&w=400&q=80",
      email: "amar.kumar@example.com",
    },
    comments: [
      {
        id: "c004",
        user_name: "Rahul Sharma",
        text: "I followed this and successfully launched my own portfolio!",
        created_at: "2025-10-19T14:25:00Z",
      },
    ],
    tags: ["React", "Tailwind", "Portfolio", "Frontend"],
  },
];
