import React from 'react'
import { LangType } from '../types/project.type';
import Lang from '../components/lang';
import StarCount from "@/components/star-count";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";

export type ProjectDetailViewProps = {
  title: string,
  logo: string,
  description: string,
  starCount: number,
  language: LangType,
  readme?: string,
  tags?: string[],
};

const ProjectDetailView: React.FC<ProjectDetailViewProps> = props => {
  const { title, logo, description, starCount, language, readme, tags } = props 

  return (
    <div className="py-5">
      <section className="flex items-center mb-3">
        <div className="flex-1 flex items-center gap-x-2">
          <img src={logo} className="w-10 h-10 rounded-md" />
          <h6 className="text-xl font-bold mb-1">{title}</h6>
        </div>

        <div className="flex-none inline-flex items-center gap-x-2 ml-5">
          <Button>中文文档</Button>
          <Button>官方网站</Button>
        </div>
      </section>

      <div className="flex items-center space-x-2 mt-2">
        <Lang type={language} />

        {
          starCount && <StarCount count={starCount} />
        }
      </div>


      <div className="flex flex-wrap gap-2 mt-2">
        {tags?.map(tag => (
          <Badge variant="outline" key={tag}>
            {tag}
          </Badge>
        ))}
      </div> 

      <p className="text-gray-500 mt-3">{description}</p>
      

      <section className="mt-6">
        {readme && (
          <div className="bg-white rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-4">README</h3>

             <div 
              className="github-readme prose prose-gray max-w-none"
              dangerouslySetInnerHTML={{ __html: readme }}
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default ProjectDetailView