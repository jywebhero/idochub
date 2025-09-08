import React from 'react'
import Circle from "@/components/circle"
import { capitalize } from "@/lib/str"
import type { LangType } from "@/app/types/project.type"

const colors = {
  Python: 'bg-blue-500',
  TypeScript: 'bg-blue-700',
  Go: 'bg-green-500',
  Rust: 'bg-red-500',
  Java: 'bg-orange-500',
  C: 'bg-purple-500',
  'C++': 'bg-pink-500',
  Nodejs: 'bg-gray-500',
  PHP: 'bg-gray-500',
  Ruby: 'bg-gray-500',
}

export type LangProps = {
  type: LangType
}

export const Lang: React.FC<LangProps> = ({ type }) => {
  const colorCls = React.useMemo(() => colors[type], [type])

  return (
    <div className="inline-flex gap-x-1 items-center">
      <Circle className={colorCls} />

      <span className="text-sm text-gray-500">{capitalize(type)}</span>
    </div>
  )
}
