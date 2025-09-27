import { BaseService } from './base';
import { TimetableItem } from '../interfaces/timetable';

export class TimetableService extends BaseService {
  getTimetable(start: Date, end: Date) {
    return this.get<TimetableItem[]>(
      `/me/agenda?start=${start.valueOf()}&end=${end.valueOf()}`,
    );
  }
}