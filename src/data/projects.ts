import { Project } from "../models"

export const projects: Project[] = [
  {
    id: 1,
    name: "Driwwwle",
    image: "https://imgur.com/kbGs6zH.png",
    description: "A platform for web developers to showcase their projects",
    tags: ["next", "node", "mongodb", "tailwind", "react-query"],
    source_code: "https://github.com/itsnitinr/driwwwle-v2",
    demo: "https://driwwwle.com/",
  },
  {
    id: 2,
    name: "PCB Cupid",
    image: "https://imgur.com/tAZotn3.png",
    description: "E-commerce website for a PCB manufacturing company",
    tags: ["react", "node", "mongodb", "redux", "razorpay", "material-ui"],
    demo: "https://www.pcbcupid.com/",
  },
  {
    id: 3,
    name: "HealthyWays",
    image: "https://imgur.com/8FFqaX8.png",
    description: "A food ordering platform for healthy and home-cooked meals",
    tags: ["react", "node", "mongodb", "redux", "razorpay", "material-ui"],
    source_code: "https://github.com/itsnitinr/healthyways",
    demo: "https://healthyways.herokuapp.com/",
  },
  {
    id: 4,
    name: "VSCode Portfolio",
    image: "https://imgur.com/mKkz0iz.png",
    description:
      "A themeable and developer-centric portfolio based on the VSCode",
    tags: ["next", "css-modules"],
    source_code: "https://github.com/itsnitinr/vscode-portfolio",
    demo: "http://vscode-portfolio.vercel.app/",
  },
]