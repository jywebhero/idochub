'use client'

import { useState, useEffect } from 'react';
import { useMemoizedFn } from 'ahooks'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import SearchView from './search-view'

export const Search = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const keyword = searchParams.get('keyword') || ''
  
  const [searchQuery, setSearchQuery] = useState<string | number | readonly string[] | undefined>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!!searchQuery) {
      router.push(`/search?keyword=${searchQuery}`)
    }else {
      router.push('/')
    }
  };

  const onChange = useMemoizedFn((e) => {
    const newValue = e.target.value;
    const previousValue = searchQuery;

    setSearchQuery(e.target.value)

    // 检测是否是清除操作（从有值变为空值）
    if (previousValue && !newValue) {
      // 处理清除事件
      handleClear();
    }
  })

  const handleClear = useMemoizedFn(() => {
    if (pathname === '/search') {
      router.push('/');
    }
  });

  useEffect(() => {
    setSearchQuery(keyword)
  }, [keyword])

  return (
    <SearchView 
      searchQuery={searchQuery}
      onChange={onChange}
      handleSubmit={handleSubmit} 
    />
  );
};
