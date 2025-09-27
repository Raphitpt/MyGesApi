import { BaseService } from './base';
import { Project } from '../interfaces/project';

export class ProjectService extends BaseService {
  getProjects(year: string) {
    return this.get(`/me/${year}/projects`);
  }

  getProject(id: string) {
    return this.get<Project>(`/me/projects/${id}`);
  }

  getNextProjectSteps() {
    return this.get('/me/nextProjectSteps');
  }

  joinProjectGroup(
    projectRcId: number,
    projectId: number,
    projectGroupId: number,
  ) {
    return this.post(
      `/me/courses/${projectRcId}/projects/${projectId}/groups/${projectGroupId}`,
    );
  }

  quitProjectGroup(
    projectRcId: number,
    projectId: number,
    projectGroupId: number,
  ) {
    return this.delete(
      `/me/courses/${projectRcId}/projects/${projectId}/groups/${projectGroupId}`,
    );
  }

  getProjectGroupMessages(projectGroupId: number) {
    return this.get(`/me/projectGroups/${projectGroupId}/messages`);
  }

  sendProjectGroupMessage(projectGroupId: number, message: string) {
    return this.post(`/me/projectGroups/${projectGroupId}/messages`, {
      data: {
        projectGroupId,
        message,
      },
    });
  }
}