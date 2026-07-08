import Education from '@/components/Education';
import MainInfo from '@/components/MainInfo';
import SideProjects from '@/components/SideProjects';
import TechnologiesTags from '@/components/TechnologiesTags';
import WorkExperience from '@/components/WorkExperience';

export default function HomePage() {
  return (
    <main className='mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
      <div className='flex flex-col' style={{ gap: 'var(--space-section)' }}>
        <MainInfo />
        <WorkExperience />
        <SideProjects />
        <TechnologiesTags />
        <Education />
      </div>
    </main>
  );
}
