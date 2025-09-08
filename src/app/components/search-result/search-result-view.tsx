"use client";

import React from 'react'

import { Search } from 'lucide-react'
import type { Project as ProjectItem } from "@/app/types/project.type";
import ProjectList from '../project-list'
import Loading from '../loading'

export type SearchResultViewProps = {
  loading: boolean,
  list: ProjectItem[] | null,
}

const SearchResultView: React.FC<SearchResultViewProps> = ({
  loading,
  list
}) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center h-full pb-20">
        <Loading>加载搜索结果中...</Loading>
      </div>
    )
  }

  if (!list) {
    return null
  }

  // 搜索结果为空
  if (Array.isArray(list) && list.length === 0) {
    return (
      <div className='flex flex-col items-center px-8 mx-auto max-w-md min-h-80'>
        <div className="relative mb-6">
          {/* 主搜索图标 */}
          <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center">
            <Search className="w-10 h-10 text-muted-foreground" />
          </div>
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-2">
          未找到相关项目
        </h3>
        
        <p className="text-sm text-muted-foreground text-center leading-relaxed mb-4">
          请尝试使用不同的关键词搜索
        </p>
      </div>
    )
  }

  return (
    <ProjectList list={list} />
  )
}

export default SearchResultView