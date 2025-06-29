type Hero = {
    greeting: string;
    title: string;
    desc: string;
    buttons: {
      text: string;
      url: string;
    }[];
};

type Jobs = {
    company: string,
    role: string,
    duration: string,
    location: string,
    responsibilities: string[],
    stack: string[]
}

type Projects = {
    title: string,
    description: string,
    tech: string[],
    image: string,
    liveLink: string,
    githubLink: string
}

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
    title: 'Building responsive, high-performance web applications from aesthetic, mobile-first designs.',
    desc: 'I\'m a frontend developer specializing in building elegant, responsive web applications. Turning pixel-perfect UI designs into high-performance, accessible, and user-friendly digital experiences. Let\'s collaborate to create modern websites and apps that look great and work seamlessly across all devices.',
    buttons: [
        {
            text: 'Hire Me',
            url: '#contact'
        },
        {
            text: 'View Projects',
            url: '#projects'
        }
    ]
};

const jobs: Jobs[] = [
    {
      company: 'Hostzop Cloud Services',
      role: 'Frontend Developer',
      duration: 'Jan 2023 – Present',
      location: 'Indore, India',
      responsibilities: [
        'Built responsive UIs with React and Tailwind CSS',
        'Implemented reusable components and optimized bundle size',
        'Collaborated with backend team on REST APIs and deployment'
      ],
      stack: ['PHP', 'Tailwind CSS', 'Typescript', 'Next.js', 'Git', 'CI/CD']
    },
    {
      company: 'Inntaglio',
      role: 'Junior Software Developer',
      duration: 'July 2023 – Jan 2025',
      location: 'Indore, India',
      responsibilities: [
        'I’m a frontend developer turning ideas into elegant, responsive web apps. With expertise in HTML, CSS, JavaScript, React, and Next.js, I bring pixel-perfect designs to life with performance and accessibility in mind. Let’s collaborate and build user-friendly digital experiences that look as good as they work.',
        'Implemented industry-standard development practices, including improving code efficiency, maintainability, and scalability',
      ],
      stack: ['HTML', 'CSS', 'Bootstrap 5', 'JavaScript', 'Reactjs', 'Git', 'GCP']
    }
];

const skills = {
    "Frontend": [
      "HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap 5"
    ],
    "Backend & Devops": [
      "PHP", "Nodejs", "REST APIs", "CI/CD", "GCP", "Docker"
    ],
    "Tools": [
      "Git", "Asana", "Jira", "Netlify", "Postman"
    ]
};

const projects: Projects[] = [
  {
    title: 'EventGo – Event Management in easy way',
    description: 'A privacy-first job portal for candidates, companies, and admins with real-time updates, role-based dashboards, and transparent hiring workflows.',
    tech: ['Next.js', 'Tailwind CSS', 'Firebase', 'React Hook Form'],
    image: 'https://placehold.co/500x400',
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'Hostzop.com',
    description: 'A minimal blogging platform built with Next.js and Firebase, focused on speed, readability, and easy content publishing through markdown.',
    tech: ['HTML', 'CSS', 'Bootstrap 4', 'PHP'],
    image: 'https://placehold.co/500x400',
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'Web Hosting Bingo',
    description: 'A curated library of ready-to-use responsive UI components and layouts for developers, built with Tailwind and deployed on Vercel.',
    tech: ['HTML', 'CSS', 'Tailwind CSS', 'Typescript', 'Nextjs'],
    image: 'https://placehold.co/500x400',
    liveLink: '#',
    githubLink: '#'
  }
];

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

export default { heroSection, jobs, skills, projects , blogs };