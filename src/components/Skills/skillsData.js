import SkillsHtml from "../../asset/Img/html.png"
import SkillsCss from "../../asset/Img/css.png"
import SkillsJs from "../../asset/Img/js.png"
import SkillsTs from "../../asset/Img/typescript.svg"
import SkillsBt from "../../asset/Img/bootstrap.svg"
import SkillsReact from "../../asset/Img/R.png"
import SkillsRedux from "../../asset/Img/re.png"
import SkillsTw from "../../asset/Img/ta.png"
import SkillsNext from "../../asset/Img/nextjs.svg"
import SkillsNode from "../../asset/Img/nodejs-1-logo-png-transparent.png"
import SkillsEx from "../../asset/Img/express-js.png"
import SkillsDB from "../../asset/Img/2945120.webp"
import SkillsSql from "../../asset/Img/sql.svg"
import SkillsFirebase from "../../asset/Img/firebase.svg"
import SkillsPhp from "../../asset/Img/php.svg"
import SkillsSupabase from "../../asset/Img/supabase.svg"
import SkillsPrisma from "../../asset/Img/prisma.svg"
import SkillsDocker from "../../asset/Img/docker.svg"
import SkillsGit from "../../asset/Img/git.svg"
import SkillsDbeaver from "../../asset/Img/dbeaver.svg"
import SkillsVercel from "../../asset/Img/vercel.svg"
import SkillsCursor from "../../asset/Img/cursor.svg"
import SkillsPostman from "../../asset/Img/postman.svg"

export const skillGroups = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "HTML", logo: SkillsHtml },
      { name: "CSS", logo: SkillsCss },
      { name: "JavaScript", logo: SkillsJs },
      { name: "TypeScript", logo: SkillsTs },
      { name: "Bootstrap", logo: SkillsBt },
      { name: "React", logo: SkillsReact },
      { name: "Redux", logo: SkillsRedux },
      { name: "Tailwind CSS", logo: SkillsTw },
      { name: "Next.js", logo: SkillsNext },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node", logo: SkillsNode },
      { name: "Express", logo: SkillsEx },
      { name: "MongoDB", logo: SkillsDB },
      { name: "SQL", logo: SkillsSql },
      { name: "Firebase", logo: SkillsFirebase },
      { name: "PHP", logo: SkillsPhp },
      { name: "Supabase", logo: SkillsSupabase },
      { name: "Prisma", logo: SkillsPrisma },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "Docker", logo: SkillsDocker },
      { name: "Git", logo: SkillsGit },
      { name: "DBeaver", logo: SkillsDbeaver },
      { name: "Vercel", logo: SkillsVercel },
      { name: "Cursor", logo: SkillsCursor },
      { name: "Postman", logo: SkillsPostman },
    ],
  },
]

export const filterOptions = [
  { id: "all", label: "Todas" },
  ...skillGroups.map(({ id, label }) => ({ id, label })),
]

export const totalSkills = skillGroups.reduce(
  (sum, group) => sum + group.skills.length,
  0
)
