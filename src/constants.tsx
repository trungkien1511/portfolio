import {
  Code,
  Database,
  Server,
  Layout,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Globe,
  Layers,
  Cpu,
} from "lucide-react";
import {
  Project,
  SkillCategory,
  SocialLink,
  FundamentalConcept,
} from "../types";

export const PROFILE = {
  name: "Phạm Huỳnh Trung Kiên",
  role: "Fresher Full-Stack Developer",
  shortBio:
    "Đam mê xây dựng các ứng dụng web hiệu suất cao. Luôn sẵn sàng học hỏi công nghệ mới và đóng góp vào các dự án thực tế.",
  email: "phamhtrungkien1511@gmail.com",
  location: "Đà Nẵng, Việt Nam",
  avatarUrl: "https://picsum.photos/400/400?grayscale", // Placeholder professional look
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/username",
    icon: Github,
    label: "github.com/username",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/username",
    icon: Linkedin,
    label: "linkedin.com/in/username",
  },
  {
    platform: "Email",
    url: `mailto:${PROFILE.email}`,
    icon: Mail,
    label: PROFILE.email,
  },
];

export const ABOUT_TEXT = {
  intro:
    "Xin chào! Tôi là một lập trình viên Full-Stack mới tốt nghiệp với niềm đam mê mãnh liệt trong việc tạo ra các giải pháp phần mềm toàn diện. Với nền tảng vững chắc về Khoa học máy tính và tinh thần 'Can-do', tôi không ngại đối mặt với các thách thức kỹ thuật mới.",
  objective:
    "Mong muốn ứng tuyển vị trí Fresher/Junior Full-Stack Developer tại môi trường chuyên nghiệp. Mục tiêu của tôi là áp dụng kiến thức về Java Spring Boot và ReactJS để phát triển sản phẩm thực tế, đồng thời trau dồi kỹ năng System Design và Performance Optimization.",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    items: [
      "HTML5 / CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
    icon: Layout,
    color: "text-blue-600",
  },
  {
    title: "Backend Development",
    items: ["Java Core", "Spring Boot", "Python", "FastAPI", "RESTful APIs"],
    icon: Server,
    color: "text-green-600",
  },
  {
    title: "Database",
    items: [
      "PostgreSQL",
      "SQL Server",
      "MySQL",
      "Database Design",
      "SQL Query Optimization",
    ],
    icon: Database,
    color: "text-amber-600",
  },
  {
    title: "Tools & DevOps",
    items: [
      "Git / GitHub",
      "Postman",
      "VS Code",
      "IntelliJ IDEA",
      "Docker (Basic)",
    ],
    icon: Terminal,
    color: "text-slate-600",
  },
];

export const FUNDAMENTALS: FundamentalConcept[] = [
  {
    title: "RESTful API",
    description:
      "Hiểu rõ các phương thức HTTP, Status Codes và quy chuẩn thiết kế API chuẩn mực.",
  },
  {
    title: "Client-Server Model",
    description:
      "Nắm vững luồng dữ liệu (Request/Response) giữa trình duyệt và máy chủ.",
  },
  {
    title: "MVC Architecture",
    description:
      "Áp dụng mô hình Model-View-Controller để tổ chức code backend rõ ràng, dễ bảo trì.",
  },
  {
    title: "Authentication",
    description:
      "Cơ chế xác thực cơ bản với JWT (JSON Web Token) và Session-based auth.",
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Web Shop",
    description:
      "Website bán hàng trực tuyến với đầy đủ tính năng giỏ hàng và thanh toán.",
    techStack: ["React.js", "Spring Boot", "PostgreSQL", "Tailwind"],
    role: "Full-Stack Developer (Cá nhân)",
    learnings:
      "Học cách thiết kế REST API chuẩn, quản lý State với Context API và xử lý quan hệ database Many-to-Many.",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Ứng dụng quản lý công việc cá nhân, hỗ trợ kéo thả (Kanban style).",
    techStack: ["React.js", "TypeScript", "FastAPI", "MongoDB"],
    role: "Frontend & API Integration",
    learnings:
      "Thực hành TypeScript strict typing, tối ưu hóa re-render trong React và tích hợp API bất đồng bộ.",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Blog Platform API",
    description:
      "Hệ thống Backend cho nền tảng blog với tính năng phân quyền (Admin/User).",
    techStack: ["Java", "Spring Security", "MySQL", "JWT"],
    role: "Backend Developer",
    learnings:
      "Tìm hiểu sâu về Spring Security Filter Chain, mã hóa mật khẩu và Authentication/Authorization.",
    githubUrl: "#",
  },
];
