import axios, { AxiosRequestConfig } from 'axios';
import { GesAuthenticationToken } from '../types/auth';

export abstract class BaseService {
  static async request<T = any>(
    credentials: GesAuthenticationToken,
    method: AxiosRequestConfig['method'],
    url: string,
    request_config: AxiosRequestConfig = {},
  ) {
    const { headers, ...others } = request_config;

    const { data } = await axios.request<{ result: T }>({
      url: `https://api.kordis.fr${url}`,
      method,
      headers: {
        ...headers,
        Authorization: `${credentials.token_type} ${credentials.access_token}`,
      },
      ...others,
    });

    return data.result;
  }

  protected static get<T = any>(credentials: GesAuthenticationToken, url: string) {
    return this.request<T>(credentials, 'GET', url);
  }

  protected static post<T = any>(credentials: GesAuthenticationToken, url: string, request_config: AxiosRequestConfig = {}) {
    return this.request<T>(credentials, 'POST', url, request_config);
  }

  protected static put<T = any>(credentials: GesAuthenticationToken, url: string, request_config: AxiosRequestConfig = {}) {
    return this.request<T>(credentials, 'PUT', url, request_config);
  }

  protected static delete<T = any>(credentials: GesAuthenticationToken, url: string) {
    return this.request<T>(credentials, 'DELETE', url);
  }
}