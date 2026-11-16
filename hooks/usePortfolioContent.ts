'use client';

import { useTranslations } from 'next-intl';

import { JOB_IDS, PROJECT_IDS, SKILL_GROUPS, TECHNOLOGIES, type SkillGroupId } from '@/lib/portfolio';

export type PortfolioJob = {
  id: (typeof JOB_IDS)[number];
  name: string;
  position: string;
  period: string;
  description: string;
};

export type PortfolioProject = {
  id: (typeof PROJECT_IDS)[number];
  name: string;
  description: string;
  url: string;
  github?: string;
};

export type PortfolioContent = {
  name: string;
  role: string;
  location: string;
  description: string;
  contactNav: string;
  changeLanguage: string;
  downloadResume: string;
  workTitle: string;
  projectsTitle: string;
  viewProject: string;
  viewGithub: string;
  skillsTitle: string;
  educationTitle: string;
  jobs: PortfolioJob[];
  projects: PortfolioProject[];
  technologies: readonly string[];
  skillAside: string;
  skillGroups: readonly { id: SkillGroupId; label: string; items: readonly string[] }[];
  education: {
    degree: string;
    school: string;
    year: string;
  };
  chapters: {
    intro: string;
    work: string;
    projects: string;
    skills: string;
    education: string;
  };
  skipToContent: string;
  readingProgress: string;
  opensNewTab: string;
};

export function usePortfolioContent(): PortfolioContent {
  const t = useTranslations();

  return {
    name: t('name'),
    role: t('role'),
    location: t('location'),
    description: t('description'),
    contactNav: t('contact-nav'),
    changeLanguage: t('change-language'),
    downloadResume: t('download-resume'),
    workTitle: t('work-experience.title'),
    projectsTitle: t('projects.title'),
    viewProject: t('projects.view-project'),
    viewGithub: t('projects.view-github'),
    skillsTitle: t('technologies'),
    educationTitle: t('education.title'),
    jobs: JOB_IDS.map((id) => ({
      id,
      name: t(`work-experience.${id}.name`),
      position: t(`work-experience.${id}.position`),
      period: t(`work-experience.${id}.period`),
      description: t(`work-experience.${id}.description`),
    })),
    projects: PROJECT_IDS.map((id) => ({
      id,
      name: t(`projects.${id}.name`),
      description: t(`projects.${id}.description`),
      url: t(`projects.${id}.url`),
      github: t.has(`projects.${id}.github`) ? t(`projects.${id}.github`) : undefined,
    })),
    technologies: TECHNOLOGIES,
    skillAside: t('skill-groups.aside'),
    skillGroups: SKILL_GROUPS.map((group) => ({
      id: group.id,
      label: t(`skill-groups.${group.id}`),
      items: group.items,
    })),
    education: {
      degree: t('education.degree'),
      school: t('education.school'),
      year: t('education.year'),
    },
    chapters: {
      intro: t('chapters.intro'),
      work: t('chapters.work'),
      projects: t('chapters.projects'),
      skills: t('chapters.skills'),
      education: t('chapters.education'),
    },
    skipToContent: t('a11y.skip-to-content'),
    readingProgress: t('a11y.reading-progress'),
    opensNewTab: t('a11y.opens-new-tab'),
  };
}
