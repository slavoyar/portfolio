import { useTranslations } from 'next-intl';

const technologies = [
  'TypeScript',
  'JavaScript',
  'React',
  'Next.js',
  'Vue 2/3',
  'Pinia',
  'Vuex',
  'Zustand',
  'MobX',
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
  'FSD',
  'Legacy Modernization',
];

export default function TechnologiesTags() {
  const t = useTranslations();

  return (
    <section className='section-block' aria-labelledby='technologies-heading'>
      <h2 id='technologies-heading' className='section-heading'>
        {t('technologies')}
      </h2>

      <ul className='grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted sm:grid-cols-3 lg:grid-cols-4'>
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </section>
  );
}
