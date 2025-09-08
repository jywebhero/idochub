import React from 'react'
import { Search as SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export type SearchViewProps = {
  searchQuery?: string | number | readonly string[] | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchView: React.FC<SearchViewProps> = ({
  searchQuery,
  onChange,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative flex items-center space-x-2">
        <Input
          type="search"
          value={searchQuery}
          placeholder="输入项目名称或标签"
          className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          aria-label="搜索"
          onChange={onChange}
        />
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400" />
        <Button type="submit" variant="default" size="default" className="whitespace-nowrap">
          搜索
        </Button>
      </div>
    </form>
  )
}

export default React.memo(SearchView)