import axios from 'axios';

const axiosConfig = {
   baseURL: 'https://neko-cafe-back.herokuapp.com/',
};

const instance = axios.create(axiosConfig);

export type ResponseType = {
   "errorText": string,
   "info": string,
   "yourBody": {
      "success": boolean
   },
   "yourQuery": Object
}

export const testApi = {
   requestPost(checkboxValue: boolean) {
      return instance.post<ResponseType>('auth/test', {success: checkboxValue})
         .then(response => response.data);
   }
}