import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { DEFAULT_MESSAGE_TIMEOUT } from './const';
import { message } from './common';

export interface CodeErrors {
    [code: number]: string;
    default: string;
}

function handleRequest<ResultType>(
    request: Promise<AxiosResponse<ResultType>>,
    successCallback?: (result: ResultType) => void,
    errorCallback?: () => void,
    errorMessage?: string | CodeErrors,
) {
    return request
        .then((result: AxiosResponse<ResultType>) => {
            if (successCallback) {
                successCallback(result.data);
            }
        })
        .catch((error: AxiosError) => {
            handleErrorMessage(error, errorMessage);
            if (errorCallback) {
                errorCallback();
            }
        });
}

const handleErrorMessage = (error: AxiosError, messages?: string | CodeErrors) => {
    if (messages) {
        if (typeof messages === 'string') {
            message(messages, DEFAULT_MESSAGE_TIMEOUT);
        } else if (error.response && messages[error.response.status]) {
            message(messages[error.response.status], DEFAULT_MESSAGE_TIMEOUT);
        } else {
            message(messages['default'], DEFAULT_MESSAGE_TIMEOUT);
        }
    }
};

class API {
    setAxios: (newAxios: AxiosInstance) => AxiosInstance;
    getAxios: () => AxiosInstance;

    constructor(url: string, key?: string) {
        let axiosInstance = axios.create({
            baseURL: url,
            headers: key ? { 'x-api-key': key } : undefined,
        });

        this.setAxios = (newAxios: AxiosInstance) => (axiosInstance = newAxios);
        this.getAxios = () => axiosInstance;
    }

    get<ResultType>(
        name: string,
        successCallback?: (result: ResultType) => void,
        errorCallback?: () => void,
        errorMessage?: string | CodeErrors,
        config = {},
    ): Promise<void> | undefined {
        return handleRequest<ResultType>(
            this.getAxios().get(name, config),
            successCallback,
            errorCallback,
            errorMessage,
        );
    }

    post<DataType, ResultType>(
        name: string,
        data: DataType,
        successCallback?: (result: ResultType) => void,
        errorCallback?: () => void,
        errorMessage?: string | CodeErrors,
        config = {},
    ): Promise<void> | undefined {
        return handleRequest<ResultType>(
            this.getAxios().post(name, data, config),
            successCallback,
            errorCallback,
            errorMessage,
        );
    }

    put<DataType, ResultType>(
        name: string,
        data: DataType,
        successCallback?: (result: ResultType) => void,
        errorCallback?: () => void,
        errorMessage?: string | CodeErrors,
        config = {},
    ): Promise<void> | undefined {
        return handleRequest<ResultType>(
            this.getAxios().put(name, data, config),
            successCallback,
            errorCallback,
            errorMessage,
        );
    }

    delete<ResultType>(
        name: string,
        successCallback?: (result: ResultType) => void,
        errorCallback?: () => void,
        errorMessage?: string | CodeErrors,
        config = {},
    ): Promise<void> | undefined {
        return handleRequest<ResultType>(
            this.getAxios().delete(name, config),
            successCallback,
            errorCallback,
            errorMessage,
        );
    }
}

export default API;
