import { BaseService } from './base';

export class ProfileService extends BaseService {
  getYears() {
    return this.get('/me/years');
  }

  getProfile() {
    return this.get('/me/profile');
  }

  getAbsences(year: string) {
    return this.get(`/me/${year}/absences`);
  }

  getGrades(year: string) {
    return this.get(`/me/${year}/grades`);
  }

  getCourses(year: string) {
    return this.get(`/me/${year}/courses`);
  }
}