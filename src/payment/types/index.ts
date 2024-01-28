import { ApiProperty } from '@nestjs/swagger';

const mockDataPayment = {
  id: '2d4833b6-000f-5000-a000-1875c6c603f8',
  status: 'pending',
  amount: {
    value: '2000.00',
    currency: 'RUB',
  },
  recipient: {
    account_id: '294144',
    gateway_id: '2166639',
  },
  created_at: '2024-01-28T09:35:50.033Z',
  confirmation: {
    type: 'redirect',
    confirmation_url:
      'https://yoomoney.ru/checkout/payments/v2/contract?orderId=2d4833b6-000f-5000-a000-1875c6c603f8',
  },
  test: true,
  paid: false,
  refundable: false,
  metadata: {},
};

export class MakePaymentResponse {
  @ApiProperty({ example: mockDataPayment.id })
  id: string;

  @ApiProperty({ example: mockDataPayment.status })
  status: string;

  @ApiProperty({ example: mockDataPayment.amount })
  amount: {
    value: string;
    currency: string;
  };

  @ApiProperty({
    example: mockDataPayment.confirmation,
  })
  confirmation: {
    type: string;
    confirmation_url: string;
  };

  @ApiProperty({
    example: mockDataPayment.recipient,
  })
  recipient: {
    account_id: string;
    gateway_id: string;
  };

  @ApiProperty({ example: mockDataPayment.test })
  test: boolean;

  @ApiProperty({ example: mockDataPayment.paid })
  paid: boolean;

  @ApiProperty({ example: mockDataPayment.refundable })
  refundable: boolean;

  @ApiProperty({ example: mockDataPayment.metadata })
  metadata: object;
}
