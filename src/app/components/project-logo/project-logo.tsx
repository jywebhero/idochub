'use client';

import type { FC } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const ProjectLogo: FC<{ logo: string, className?: string }> = props => {
  const { logo, className } = props

  return (
    <LazyLoadImage
      alt="project logo"
      height="32"
      width="32"
      placeholderSrc="/imgs/img-placeholder.svg"
      src={`/imgs/${logo}`} 
      wrapperClassName={className}
    />
  )
}