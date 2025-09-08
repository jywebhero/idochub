"use client";

import { useSearchParams } from 'next/navigation'
import Fuse from 'fuse.js'
import type { Project } from "@/app/types/project.type"
import { getProjectListByJson } from '@/app/apis/project-api'
import { useSafeState, useRequest } from 'ahooks'


const useSearchResult = () => {
  const searchParams = useSearchParams()
  const [searchedProjects, setSearchedProjects] = useSafeState<Project[] | null>(null)

  const keyword = searchParams.get('keyword') || ''

  const { loading } = useRequest(async () => {
    const fullProjectList = await getProjectListByJson()

     const fuse = new Fuse(fullProjectList, {
      keys: [
        {
          name: 'title',
          weight: 0.7  // 标题权重更高
        },
        {
          name: 'tags',
          weight: 0.3  // 标签权重较低
        }
      ],
      threshold: 0.2,        // 更严格的匹配
      distance: 30,          // 更小的编辑距离
      minMatchCharLength: 4, // 要求至少匹配4个字符
      includeScore: true,
      ignoreLocation: true,
      findAllMatches: false, // 只返回最佳匹配
      shouldSort: true       // 按匹配分数排序
    })

    if (keyword) {
      const result = fuse.search(keyword)

      const projectList = result.map((item) => {
        const project = item.item

        if (project && project.tags) {
          const tags = project.tags.filter((tag) => {
            return tag.includes(keyword) || tag.length < 5
          })

          project.tags = tags.slice(0, 5)
        }


        return project
      })

      setSearchedProjects(projectList) 
    }else {
      setSearchedProjects([])
    }
  })

  return {
    loading,
    projects: searchedProjects
  }
}

export default useSearchResult