import { NextSeo } from 'next-seo';
import { AboutSection } from '@/components';
import { MainLayout } from '@/components/MainLayout';

export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <NextSeo
        title="Jason Barba"
        description={`Jason Joseph Barba is a software engineer mainly focuses on the web frontend development side of things to help build web-based software solutions and services.
        He spent over ${currentYear - 2017} years working with various tech startups, mid-stage organizations and even some larger ones. He likes to work on projects
        that make our lives a bit better and easier.`}
        themeColor="dark"
      />
      <MainLayout>
        <AboutSection currentYear={currentYear}/>
      </MainLayout>
    </>
  );
}
