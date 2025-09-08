import React from 'react';
import Collection from "@/app/components/collection";
import Project from '@/app/components/project'
import { Project as ProjectInterface } from "@/app/types/project.type";

export type ProjectListProps = {
  list: ProjectInterface[] | null;
};

const ProjectList: React.FC<ProjectListProps> = props => {
  const { list } = props

  return (
    <Collection>
      {
        list 
        && 
        list.map((project) => {
          return (
             <Project 
                key={project.id}
                id={project.id}
                repo={project.repo}
                title={project.title}
                logo={project.logo}
                subTitle={project.description}
                stars={project.star_count}
                lang={project.language}
                tags={project.tags} 
            />
          )
        })
      }
    </Collection>
  )
}

export default ProjectList