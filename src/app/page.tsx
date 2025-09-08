import { Suspense } from 'react'
import Search from "@/components/search";
import SearchView from '@/components/search/search-view'
import ProjectList from './components/project-list'
import TagSelect from './components/tag-select'
import SiteTitle from './components/site-title'

import { findProjects } from '@/app/services/project-service'

export default async function Home() {
  const projects = await findProjects(0, 10000)

  return (
    <>
      <SiteTitle />

      <section className="flex flex-col items-center justify-center mt-10 mb-10 md:mt-15 md:mb-15">
        <Suspense fallback={<SearchView />}>
          <Search />
        </Suspense>
      </section>

      <div className="justify-end my-5 md:flex">
        <TagSelect />
      </div>

      <ProjectList list={projects} />
    </>
  );
}
