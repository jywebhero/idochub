import type { FC } from "react";

export type CollectionProps = {
  title?: string,
  children: React.ReactNode
}

export const Collection: FC<CollectionProps> = ({
  title,
  children
}) => {
  return (
    <section className="mb-8">
      {
        title && <h6 className="text-xl font-semibold py-2 border-b border-gray-200 mb-4">{title}</h6>
      }
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {children}
      </div>
    </section>
  )
}