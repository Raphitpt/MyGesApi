import { GesAuthenticationToken } from './types/auth';
import { AuthService } from './services/auth';
import { ProfileService } from './services/profile';
import { TimetableService } from './services/timetable';
import { ProjectService } from './services/project';

export class GesAPI {
  public readonly profile: ProfileService;
  public readonly timetable: TimetableService;
  public readonly project: ProjectService;

  constructor(private credentials: GesAuthenticationToken) {
    this.profile = new ProfileService(credentials);
    this.timetable = new TimetableService(credentials);
    this.project = new ProjectService(credentials);
  }

  static async login(username: string, password: string): Promise<GesAPI> {
    const token = await AuthService.generateAccessToken(username, password);

    if (!token) {
      throw new Error('Bad credentials');
    }

    const authToken: GesAuthenticationToken = {
      token_type: token.token_type,
      access_token: token.access_token,
    };

    return new GesAPI(authToken);
  }
}