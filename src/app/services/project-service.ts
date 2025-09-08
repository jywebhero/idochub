import type { Project, Tag } from "../types/project.type";
import { getProjectList } from '../apis/project-api';

export const findProjects = async (page = 0, size = 10): Promise<Project[]> => {
  const projects = await getProjectList(page, size);

  return projects
}


