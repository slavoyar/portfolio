export const JOB_IDS = ['metran', 'infowise', 'baltInfoCom', 'metran0'] as const;
export type JobId = (typeof JOB_IDS)[number];

export const PROJECT_IDS = ['chinese-laoshi', 'lulight'] as const;
export type ProjectId = (typeof PROJECT_IDS)[number];

export const SKILL_GROUP_IDS = ['frontend', 'backend', 'platform'] as const;
export type SkillGroupId = (typeof SKILL_GROUP_IDS)[number];

/** Grouped for scan — flat list kept for resume. */
export const SKILL_GROUPS: readonly { id: SkillGroupId; items: readonly string[] }[] = [
  {
    id: 'frontend',
    items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Vue 2/3', 'Pinia', 'Vuex', 'Zustand', 'MobX', 'FSD'],
  },
  {
    id: 'backend',
    items: [
      'Node.js',
      'NestJS',
      'Express',
      'REST',
      'WebSockets',
      'BFF',
      'Microservices',
      'RPC',
      'PostgreSQL',
      'MongoDB',
    ],
  },
  {
    id: 'platform',
    items: [
      'Nx',
      'Monorepos',
      'Vite',
      'Webpack',
      'ESLint',
      'Keycloak',
      'RBAC',
      'OIDC',
      'Docker',
      'CI/CD',
      'Vitest',
      'Jest',
      'Legacy Modernization',
    ],
  },
] as const;

export const TECHNOLOGIES = SKILL_GROUPS.flatMap((group) => group.items);

/** Two Sector-wall variants: base type vs pixel display type. */
export const VIEW_IDS = ['sector', 'sector-pixel'] as const;
export type ViewId = (typeof VIEW_IDS)[number];

export const DEFAULT_VIEW: ViewId = 'sector';

export function isViewId(value: string | undefined | null): value is ViewId {
  return VIEW_IDS.includes(value as ViewId);
}

export type SectorVariant = 'base' | 'pixel';

export function viewToSectorVariant(view: ViewId): SectorVariant {
  return view === 'sector-pixel' ? 'pixel' : 'base';
}

/** Education before skills. */
export const CHAPTER_IDS = [
  'intro',
  'metran',
  'infowise',
  'baltInfoCom',
  'metran0',
  'projects',
  'education',
  'skills',
] as const;
export type ChapterId = (typeof CHAPTER_IDS)[number];

/** Stable per-chapter field layouts — distinct, not re-rolled each visit. */
export const CHAPTER_FIELDS: Record<ChapterId, { pattern: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7; wash: string }> = {
  intro: { pattern: 0, wash: 'color-mix(in oklab, #d2ff00 14%, transparent)' },
  metran: { pattern: 1, wash: 'color-mix(in oklab, #7cffb2 12%, transparent)' },
  infowise: { pattern: 2, wash: 'color-mix(in oklab, #9ad0ff 12%, transparent)' },
  baltInfoCom: { pattern: 3, wash: 'color-mix(in oklab, #ffd36a 11%, transparent)' },
  metran0: { pattern: 4, wash: 'color-mix(in oklab, #c4ff6a 12%, transparent)' },
  projects: { pattern: 5, wash: 'color-mix(in oklab, #ff9ec8 10%, transparent)' },
  education: { pattern: 6, wash: 'color-mix(in oklab, #b8a6ff 11%, transparent)' },
  skills: { pattern: 7, wash: 'color-mix(in oklab, #6affd2 12%, transparent)' },
};

export const PROJECT_PALETTES = {
  'chinese-laoshi': { bg: '#1a3a2f', ink: '#7dffb3', mark: '中' },
  lulight: { bg: '#3a1a28', ink: '#ffb0c8', mark: 'L' },
} as const;

export const JOB_TAGS: Record<(typeof JOB_IDS)[number], readonly string[]> = {
  metran: ['Nx', 'TypeScript', 'NestJS', 'WebSockets', 'Keycloak'],
  infowise: ['React', 'FSD', 'MobX', 'Vitest', 'TypeScript'],
  baltInfoCom: ['Vue', 'TypeScript', 'Vuex', 'Legacy Modernization'],
  metran0: ['Vue', 'TypeScript', 'IoT'],
};

export function yearFromPeriod(period: string) {
  return period.match(/\d{4}/)?.[0] ?? period;
}
