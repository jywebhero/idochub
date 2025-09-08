import { FC, useMemo } from "react";
import { Star } from 'lucide-react';

export type StarCountProps = {
  count: number
}

export const StarCount: FC<StarCountProps> = props => {
  const { count } = props

  const starCount = useMemo(() => {
    if (count >= 1000) {
      return `${parseFloat((count/1000).toFixed(1))}K`
    }

    return count
  }, [count])

  return (
    <div className="flex items-center">
      <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
      <span className="text-gray-500 text-sm">{starCount}</span>
    </div>
  )
}

