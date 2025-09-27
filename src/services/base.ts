import axios, { AxiosRequestConfig } from 'axios';
import { GesAuthenticationToken } from '../types/auth';

export abstract class BaseService {
  constructor(protected credentials: GesAuthenticationToken) {}

  async request<T = any>(
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
        Authorization: `${this.credentials.token_type} ${this.credentials.access_token}`,
      },
      ...others,
    });

    return data.result;
  }

  protected get<T = any>(url: string) {
    return this.request<T>('GET', url);
  }

  protected post<T = any>(url: string, request_config: AxiosRequestConfig = {}) {
    return this.request<T>('POST', url, request_config);
  }

  protected put<T = any>(url: string, request_config: AxiosRequestConfig = {}) {
    return this.request<T>('PUT', url, request_config);
  }

  protected delete<T = any>(url: string) {
    return this.request<T>('DELETE', url);
  }
}