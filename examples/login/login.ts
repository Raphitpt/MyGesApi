import { GesAPI, ProfileService, TimetableService } from '../../src';
import { credentials } from '../_credentials';

void async function main() {
  // Login to get the authentication token
  const token = await GesAPI.login(credentials.username, credentials.password);
  console.log('Token:', token);
  console.log('Logged in successfully!');
  //
  // // Use services with the token
  // const profile = await ProfileService.getProfile(token);
  // console.log('Profile:', profile);
  //
  // const years = await ProfileService.getYears(token);
  // console.log('Years:', years);
  //
  // // Example with timetable
  // const start = new Date();
  // const end = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // Next week
  // const timetable = await TimetableService.getTimetable(token, start, end);
  // console.log('Timetable:', timetable);
}();
