import Axios, { AxiosInstance, AxiosResponse, CancelToken } from 'axios';

const baseURL = "http://localhost:5000/my-first-webapp-jaehong/us-central1/v1";

const instance: AxiosInstance = Axios.create ({
    baseURL,
    timeout: 10000
});

export interface Message {
    id?: string;
    body?: string;
    user?: {
        id?: string
        name?: string
        avatar?: string
    };
    date?: string;
}

export const fetchMessages = (channelName: string, params = {}, cancelToken: CancelToken = null): Promise<AxiosResponse<{messages: Message[] }>> => {
    return instance.get(`/channels/${channelName}/messages`, {
        params,
        cancelToken
    });
};