import { ForbiddenException, Injectable } from '@nestjs/common';
import { MakePaymentDto } from './dto/make-paymen.dto';
import axios from 'axios';
import { CheckPaymentDto } from './dto/check-payment.dto';

@Injectable()
export class PaymentService {
  async makePayment(makePaymentDto: MakePaymentDto) {
    try {
      const { data } = await axios({
        baseURL: 'https://api.yookassa.ru/v3/payments',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Idempotence-Key': Date.now(),
        },
        auth: {
          username: '294144',
          password: 'test_pmIGlPYkFNByMRC32S7VNZvliPL4gzSoCyWqaChOPaY',
        },
        data: {
          amount: {
            value: makePaymentDto.amount,
            currency: 'RUB',
          },
          capture: true,
          confirmation: {
            type: 'redirect',
            return_url: 'http://localhost:3001/order',
          },
          descriprion: makePaymentDto.description,
        },
      });

      return data;
    } catch (error) {
      throw new ForbiddenException(error);
    }
  }

  async checkPayment(checkPaymentDto: CheckPaymentDto) {
    try {
      const { data } = await axios({
        baseURL: `https://api.yookassa.ru/v3/payments/${checkPaymentDto.paymentId}`,
        method: 'GET',

        auth: {
          username: '294144',
          password: 'test_pmIGlPYkFNByMRC32S7VNZvliPL4gzSoCyWqaChOPaY',
        },
      });

      return data;
    } catch (error) {
      throw new ForbiddenException(error);
    }
  }
}
