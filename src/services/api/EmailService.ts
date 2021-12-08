import { PreferredMethodEnum } from '../../pages/CallBack/enums/PreferredMethodEnum';
import { ICallbackForm } from '../../pages/CallBack/interfaces/ICallbackForm';
import axios from 'axios';

let count = 0;

export class EmailService {
  sendEmail(values: ICallbackForm, preferredMethod: PreferredMethodEnum) {
    const data: ICallbackForm = {
      name: values.name,
    };
    if (preferredMethod === PreferredMethodEnum.Phone) {
      data.phone = `+7 ${values.phone}`;
      data.email = 'Нет';
    } else {
      data.email = values.email;
      data.phone = 'Нет';
    }

    if (process.env.NODE_ENV === 'development') {
      return new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          if (count++ % 2) {
            resolve(true);
            return;
          }
          reject(new Error());
        }, 1000);
      });
    }

    return axios.post('/api/callMe', data, { withCredentials: true });
  }
}

export const emailService = new EmailService();
