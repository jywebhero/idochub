import { Suspense } from 'react'
import Search from "@/components/search";
import SearchView from '@/components/search/search-view'
import SearchResult from "../components/search-result";
import SiteTitle from '../components/site-title'

export default async function SearchPage() {

  return (
    <>
      <SiteTitle />

      <section className="flex flex-col items-center justify-center my-15">
        <Suspense fallback={<SearchView />}>
          <Search />
        </Suspense>
      </section>

      <Suspense fallback={<div />}>
        <SearchResult />
      </Suspense>
    </>
  );
}
