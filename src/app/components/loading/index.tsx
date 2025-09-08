import React from "react"
import classNames from "classnames"

export type LoadingProps = {
  children?: React.ReactNode,
  className?: string,
  size?: 'medium' | 'large' | 'default'
}

const Loading: React.FC<LoadingProps> = (props) => {
  const { children, className, size = 'default' } = props

  const sizeClassName = {
    default: 'h-4 w-4',
    medium: 'h-6 w-6',
    large: 'h-8 w-8'
  }[size]

  return (
    <div className={classNames("flex items-center justify-center space-x-2 4py-4", className)}>
      <div className={classNames(sizeClassName, "animate-spin rounded-full border-b-2 border-gray-300")}></div>
      {
        children
        &&
        <p className="text-gray-400 text-sm">{children}</p>
      }
    </div>
  )
}

export default React.memo(Loading)