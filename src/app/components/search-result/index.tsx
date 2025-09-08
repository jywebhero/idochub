"use client";

import React from 'react'
import SearchResultView from './search-result-view';
import useSearchResult from './use-search-result';

const SearchResult = () => {
  const { loading, projects } = useSearchResult()

  return (
    <SearchResultView loading={loading} list={projects} />
  )
}

export default React.memo(SearchResult)