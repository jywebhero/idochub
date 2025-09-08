import { http} from '../utils/http';
import axios from 'axios';
import { Project, Tag } from '../types/project.type';

export async function getProjectList(page = 0, size = 10): Promise<Project[]> {
    const result = await http.get('/projects', {
      params: {
        page,
        size
      }
    });

    return result
}

export async function getTagListByJson(): Promise<Tag[]> {
    const response = await axios.get<Tag[]>('/tags.json');

    return response.data;
}

export async function getProjectListByJson(): Promise<Project[]> {
    const response = await axios.get<Project[]>('/projects.json');

    return response.data;
}
