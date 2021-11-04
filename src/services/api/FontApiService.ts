import axios, { AxiosResponse } from 'axios';

class FontApiService {
  async load(url: string): Promise<AxiosResponse<string>> {
    return await axios.get(url);
  }
}

export const fontApiService = new FontApiService();
