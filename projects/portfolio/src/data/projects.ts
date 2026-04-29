import Project_Strash from "../assets/project-strash.png";
import Project_Bookshelf from "../assets/project-bookshelf.png";
import Project_Newjeans from "../assets/project-newjeans169.png";
import Project_Noted from "../assets/project-noted.png";
import Project_Mobile_TanaminAI from "../assets/project-mobile-tanaminai.png";
import Project_Mobile_Story from "../assets/project-mobile-story.png";
import Project_Mobile_Asclepius from "../assets/project-mobile-asclepius.png";
import Project_Mobile_GithubApp from "../assets/project-mobile-githubapp.png";
import Project_Mobile_UTS from "../assets/project-mobile-uts.png";

export type Project = {
  title: string;
  subtitle: string;
  image: string;
  desc: string;
  demo?: string;
  source: string;
  type: string;
};

export const projects: Project[] = [
  {
    title: "Strash",
    subtitle: "AI-powered waste classification website",
    image: Project_Strash,
    desc: "Strash is a web-based application that helps users classify waste using image recognition. Users can upload images and receive instant predictions along with guidance on proper waste sorting. This project focuses on integrating machine learning models into a responsive web interface.",
    demo: "https://ekastyabudi.github.io/Strash/",
    source: "https://github.com/rashifaminurrohim/strash-ui.git",
    type: "website",
  },
  {
    title: "Bookshelf",
    subtitle: "Personal book management app",
    image: Project_Bookshelf,
    desc: "Bookshelf is a web application that allows users to manage their book collection. Users can add, search, mark as completed, and delete books. The app emphasizes state management and DOM manipulation using JavaScript.",
    demo: "",
    source:
      "https://github.com/rashifaminurrohim/DBS-Coding-Camp/tree/6bc20071e40ae756bb6dcb85fdb3c4f870d4d0fd/Web-FrontEnd-for-Beginners/bookshelf-app-starter-project",
    type: "website",
  },
  {
    title: "Noted.",
    subtitle: "Notes app with archive feature",
    image: Project_Noted,
    desc: "Noted is a note-taking application built with a modern UI approach using Web Components. It supports creating, archiving, and managing notes efficiently, with a focus on modular architecture and clean styling using CSS Grid.",
    demo: "",
    source:
      "https://github.com/rashifaminurrohim/DBS-Coding-Camp/tree/main/FrontEnd-Web-Development-Fundamentals/submission/submission-final",
    type: "website",
  },
  {
    title: "Wiki Newjeans",
    subtitle: "Fan-based informational website",
    image: Project_Newjeans,
    desc: "This project is a fan-based website that provides structured information about the K-pop group NewJeans. It focuses on layout design, content organization, and responsive UI to present media-rich content in a clean and engaging way.",
    demo: "",
    source:
      "https://github.com/rashifaminurrohim/DBS-Coding-Camp/tree/main/Web-Programming-Basics/submission-wiki-fandom",
    type: "website",
  },
  {
    title: "Tanamin.AI",
    subtitle: "Soil-based plant recommendation app",
    image: Project_Mobile_TanaminAI,
    desc: "Tanamin.AI is a mobile application that predicts suitable plants based on soil conditions. By analyzing soil data, the app provides recommendations to help users choose the most appropriate crops. This project highlights the integration of machine learning with mobile development.",
    demo: "",
    source: "https://github.com/TanaminAI/Tanamin.AI-App.git",
    type: "mobile",
  },
  {
    title: "StoryApp",
    subtitle: "Story sharing app with map integration",
    image: Project_Mobile_Story,
    desc: "StoryApp is an Android application that allows users to share stories with images and location data. It includes authentication, API integration, and interactive maps, showcasing modern Android development practices.",
    demo: "",
    source: "",
    type: "mobile",
  },
  {
    title: "Asclepius",
    subtitle: "Cancer image classification app",
    image: Project_Mobile_Asclepius,
    desc: "Asclepius is an Android application designed to classify cancer-related medical images using machine learning. The app focuses on providing accurate predictions while maintaining a simple and user-friendly interface.",
    demo: "",
    source: "",
    type: "mobile",
  },
  {
    title: "GithubApp",
    subtitle: "GitHub user explorer app",
    image: Project_Mobile_GithubApp,
    desc: "GithubApp is an Android application that allows users to search and explore GitHub profiles. It features user details, followers/following lists, and API integration, implemented using clean architecture principles.",
    demo: "",
    source: "",
    type: "mobile",
  },
  {
    title: "Midterm Project",
    subtitle: "Flutter-based academic project",
    image: Project_Mobile_UTS,
    desc: "This project was developed using Flutter as part of a midterm assignment. It focuses on building a cross-platform mobile application while applying fundamental concepts such as UI composition, state management, and navigation.",
    demo: "",
    source: "https://github.com/rashifaminurrohim/Aplikasi_Perhitungan_Flutter",
    type: "mobile",
  },
];
