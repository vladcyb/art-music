import { Button, Form, Input, Select, Spin } from 'antd';
import MaskedInput from 'antd-mask-input';
import { ViewportContainer } from '../../components';
import { useState } from 'react';
import { PreferredMethodEnum } from './enums/PreferredMethodEnum';
import { ICallbackForm } from './interfaces/ICallbackForm';
import { emailService } from '../../services/api/EmailService';
import classNames from 'classnames';
import './CallBack.scss';


export const CallBack = () => {
  const onSubmit = async (values: ICallbackForm) => {
    setValidateTrigger('onChange');
    setFormState({
      ...formState,
      isError: false,
      isLoading: true,
    });
    try {
      await emailService.sendEmail(values, preferredMethod);
      setFormState({
        isSent: true,
        isError: false,
        isLoading: false,
      });
    } catch (e) {
      setFormState({
        ...formState,
        isError: true,
        isLoading: false,
      });
    }
  };

  const [validateTrigger, setValidateTrigger] = useState<"onSubmit" | "onChange">('onSubmit');
  const [preferredMethod, setPreferredMethod] = useState<PreferredMethodEnum>(
    PreferredMethodEnum.Phone,
  );
  const [formState, setFormState] = useState({
    isLoading: false,
    isError: false,
    isSent: false,
  });

  const clearError = () => {
    if (formState.isError) {
      setFormState({
        ...formState,
        isError: false,
      });
    }
  };

  const { isLoading, isError, isSent } = formState;

  const disabled = isLoading || isSent;

  return (
    <div
      className={classNames('callback', {
        'callback_error': isError,
        'callback_sent': isSent,
        'callback_loading': isLoading,
      })}
      id="callback"
    >
      <ViewportContainer>
        <div className="callback__card">
          <div className="callback__card-content">
            <div className="callback__card-title">
              Заказать звонок
            </div>
            <Form
              layout="vertical"
              onFinish={onSubmit}
              onFinishFailed={() => {
                setValidateTrigger('onChange');
              }}
              onChange={clearError}
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
                <Input disabled={disabled} />
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
                  disabled={disabled}
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
                    disabled={disabled}
                    inputMode="numeric"
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
                  ]}
                >
                  <Input disabled={disabled} />
                </Form.Item>
              )}
              <Form.Item noStyle>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  disabled={disabled}
                >
                  Отправить
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="callback__card-error">
            Что-то пошло не так, попробуйте еще раз.
          </div>
          <div className="callback__card-success">
            <img className="callback__card-success-img" src="data:image/svg+xml,%3Csvg width='228' height='228' viewBox='0 0 228 228' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M228 114C228 176.96 176.96 228 114 228C51.0395 228 0 176.96 0 114C0 51.0395 51.0395 0 114 0C176.96 0 228 51.0395 228 114ZM14.4452 114C14.4452 168.983 59.0174 213.555 114 213.555C168.983 213.555 213.555 168.983 213.555 114C213.555 59.0174 168.983 14.4452 114 14.4452C59.0174 14.4452 14.4452 59.0174 14.4452 114Z' fill='%23E7A3FF' fill-opacity='0.2'/%3E%3Cpath d='M55.0005 100.197C77.2605 124.019 89.7408 137.375 112.001 161.197C112.001 161.197 174.667 64.4118 177 61.2451' stroke='%23E7A3FF' stroke-opacity='0.2' stroke-width='15'/%3E%3C/svg%3E%0A" alt="" />
            <div className="callback__card-success-title">
              Спасибо! Ваша заявка принята.
            </div>
            <Button
              type="link"
              onClick={() => {
                setFormState((value) => ({
                  ...value,
                  isSent: false,
                }));
              }}
            >
              Назад
            </Button>
          </div>
          <div className="callback__card-spin">
            <Spin size="large" />
          </div>
        </div>
      </ViewportContainer>
    </div>
  );
};
