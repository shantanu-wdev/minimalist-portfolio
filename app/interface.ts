type Hero = {
    greeting: string;
    title: string;
    desc: string;
    buttons: {
      text: string;
      url: string;
    }[];
};

type Blog = {
    title: string;
    summary: string;
    date: string;
    tags: string[];
    link: string;
    slug: string;
};  

const heroSection: Hero = {
    greeting: 'Hi, I\'m Shantanu',
    title: 'Turning elegant, aesthetic designs into fully responsive and visually stunning web applications.',
    desc: 'I’m a frontend developer turning ideas into elegant, responsive web apps. I bring pixel-perfect designs to life with performance and accessibility in mind. Let’s collaborate and build user-friendly digital experiences that look as good as they work.',
    buttons: [
        {
            text: 'Hire Me',
            url: '#'
        },
        {
            text: 'View Projects',
            url: '#'
        }
    ]
};

const blogs: Blog[] = [
    {
        title: "Optimizing React Apps with Code Splitting",
        summary:
            "Improve load times and performance by understanding dynamic imports and lazy loading in React and Next.js.",
        date: "June 12, 2025",
        tags: ["React", "Performance", "Next.js"],
        link: '#',
        slug: "react-code-splitting",
    },
    {
        title: "Why Tailwind is a Game Changer for Frontend Devs",
        summary:
            "Tailwind speeds up your workflow, keeps code DRY, and scales beautifully. Here's how to get the most out of it.",
        date: "May 28, 2025",
        tags: ["Tailwind", "CSS", "Design"],
        link: '#',
        slug: "tailwind-benefits",
    },
    {
        title: "Mastering Git in Real-World Projects",
        summary:
            "Level up your version control with advanced Git workflows, rebase, cherry-pick, and stash — explained simply.",
        date: "May 15, 2025",
        tags: ["Git", "Workflows", "DevOps"],
        link: '#',
        slug: "git-real-world",
    },
];

export default { heroSection, blogs };