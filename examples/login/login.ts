import { GesAPI } from '../../src';
import { credentials } from '../_credentials';

void async function main() {
  const result = await GesAPI.login(credentials.username, credentials.password);
  console.log(result.credentials);
}();
