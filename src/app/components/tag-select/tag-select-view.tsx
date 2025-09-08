import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tag } from "@/app/types/project.type"
import Loading from '@/app/components/loading'

export type TagSelectViewProps = {
  tags: Tag[],
  loading: boolean,
  error?: Error,
  selectedTagId?: string,
  onChange: (tagId: string) => void
}

export const TagSelectVew: React.FC<TagSelectViewProps> = props => {
  const { tags, selectedTagId, loading, error, onChange } = props;

  if (error) {
    return null
  }

  return (
    <div className="relative">
        <Select 
            value={selectedTagId} 
            disabled={loading}
            onValueChange={onChange}
        >
            <SelectTrigger className="md:w-[200px] w-full">
                <SelectValue placeholder={selectedTagId || (!loading && "选择标签")} />
            </SelectTrigger>

            <SelectContent>
                {
                    tags.map(tag => (
                    <SelectItem key={tag.id} value={tag.id.toString()}>{tag.name}</SelectItem>
                    ))
                }
            </SelectContent>
        </Select>

        {
            loading
            &&
            <Loading className="absolute left-2 top-1/2 transform -translate-y-1/2 z-50">加载标签中..</Loading>
        }
    </div>
    
  )
}

export default React.memo(TagSelectVew)