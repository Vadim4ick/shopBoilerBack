import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SequelizeConfigService } from 'src/config/sequelizeConfig.service';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from 'src/config/configuration';
import { PaymentModule } from 'src/payment/payment.module';
import { PaymentService } from 'src/payment/payment.service';

describe('Payment service', () => {
  let app: INestApplication;
  let paymentService: PaymentService;

  beforeEach(async () => {
    const testModule: TestingModule = await Test.createTestingModule({
      imports: [
        SequelizeModule.forRootAsync({
          imports: [ConfigModule],
          useClass: SequelizeConfigService,
        }),
        ConfigModule.forRoot({
          load: [databaseConfig],
        }),
        PaymentModule,
      ],
    }).compile();

    paymentService = testModule.get<PaymentService>(PaymentService);
    app = testModule.createNestApplication();

    await app.init();
  });

  it('should make payment', async () => {
    const data = await paymentService.makePayment({ amount: 100 });

    expect(data).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        status: 'pending',
        amount: {
          value: '100.00',
          currency: 'RUB',
        },
        confirmation: {
          type: 'redirect',
          confirmation_url: expect.any(String),
        },
        created_at: expect.any(String),
        paid: false,
        refundable: false,
        metadata: {},
        recipient: {
          account_id: '294144',
          gateway_id: '2166639',
        },
      }),
    );
  });
});
