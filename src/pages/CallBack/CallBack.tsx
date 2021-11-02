import { Button, Form, Input, Select } from 'antd';
import MaskedInput from 'antd-mask-input';
import { ViewportContainer } from '../../components';
import { useState } from 'react';
import axios from 'axios';
import { PreferredMethodEnum } from './enums/PreferredMethodEnum';
import './CallBack.scss';

interface ICallbackForm {
  name?: string;
  phone?: string;
  email?: string;
}

export const CallBack = () => {
  const onSubmit = (values: ICallbackForm) => {
    setValidateTrigger('onChange');
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

    axios.post('/callMe', data, { withCredentials: true });
  };

  const [validateTrigger, setValidateTrigger] = useState<"onSubmit" | "onChange">('onSubmit');
  const [preferredMethod, setPreferredMethod] = useState<PreferredMethodEnum>(
    PreferredMethodEnum.Phone,
  );

  return (
    <div className="callback" id="callback">
      <ViewportContainer>
        <div className="callback__card">
          <div className="callback__card-title">Заказать звонок</div>
          <Form
            layout="vertical"
            onFinish={onSubmit}
            onFinishFailed={() => {
              setValidateTrigger('onChange');
            }}
            autoComplete="off"
            validateTrigger={validateTrigger}
            initialValues={{
              name: '',
              preferredMethod: PreferredMethodEnum.Phone,
              phone: '',
            }}
          >
            <Form.Item
              label="Как к вам обращаться:"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Введите имя!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Предпочтительный способ связи:"
              name="preferredMethod"
            >
              <Select
                className="callback__select"
                placeholder="Выберите..."
                value={preferredMethod}
                onChange={(value) => {
                  setPreferredMethod(value);
                }}
              >
                <Select.Option value={PreferredMethodEnum.Phone}>
                  Телефон
                </Select.Option>
                <Select.Option value={PreferredMethodEnum.Email}>
                  Email
                </Select.Option>
              </Select>
            </Form.Item>
            {preferredMethod === PreferredMethodEnum.Phone ? (
              <Form.Item
                label="Телефон:"
                name="phone"
                rules={[
                  {
                    min: 10,
                    transform: (value = '') => value.replace(/[^\d]/gi, ''),
                    message: 'Введите телефон!',
                  },
                  {
                    required: true,
                    message: 'Введите телефон!',
                  },
                ]}
              >
                <MaskedInput
                  mask="(111) 111-11-11"
                  prefix="+7"
                  autoComplete="new-password"
                />
              </Form.Item>
            ) : (
              <Form.Item
                label="Email:"
                name="email"
                rules={[
                  {
                    type: 'email',
                    message: 'Некорректный email!',
                  },
                  {
                    required: true,
                    message: 'Введите email!',
                  },
                ]}>
                <Input />
              </Form.Item>
            )}
            <Form.Item noStyle>
              <Button type="primary" htmlType="submit" block>
                Отправить
              </Button>
            </Form.Item>
          </Form>
        </div>
      </ViewportContainer>
    </div>
  );
};
