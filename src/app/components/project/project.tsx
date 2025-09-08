import type { FC } from "react";
import type { LangType } from "@/app/types/project.type";
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import StarCount from "@/components/star-count";

import Lang from "../lang";
import { SITE_DOMAIN } from '@/app/config/meta'

export interface ProjectProps {
  id: number
  repo: string;
  title: string;
  subTitle: string;
  logo: string
  lang: LangType;
  stars?: number;
  tags?: string[]
}

export const Project: FC<ProjectProps> = props => {
  const { repo, title, logo, subTitle, lang, stars, tags } = props

  const DOC_LINK = `https://${repo}.${SITE_DOMAIN}`
  
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <Link href={DOC_LINK} target="_blank">
        <div className="flex items-center gap-x-2 mb-3">
          {
            logo
            &&
            <img alt="logo" src={`/imgs/${logo}`} width="32" height="32" className="flex-none" />
          }
          <h2 className="flex-1 font-bold">{title}</h2>
        </div>
        <p className="text-sm text-gray-700 line-clamp-2 h-10">{subTitle}</p>
      </Link>
      
      <div className="flex flex-wrap gap-2 mt-3 h-5 overflow-hidden">
        {tags?.map(tag => (
          <Badge variant="outline" key={tag} asChild>
            <Link href={`/search?keyword=${tag}`}>
              {tag}
            </Link>
          </Badge>
        ))}
      </div>
      
      <div className="flex justify-between items-center mt-2">
        <div className="flex flex-wrap gap-2  items-center">
          <Lang type={lang} />

          {
            stars && <StarCount count={stars} />
          }
        </div>

        <Button variant="ghost" asChild>
          <Link href={DOC_LINK} target="_blank"className="text-gray-600">中文文档</Link>
        </Button>
      </div>
    </div>
  );
};