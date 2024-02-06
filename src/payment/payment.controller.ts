import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { MakePaymentDto } from './dto/make-paymen.dto';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { ApiOkResponse } from '@nestjs/swagger';
import { MakePaymentResponse } from './types';
import { CheckPaymentDto } from './dto/check-payment.dto';

@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @ApiOkResponse({ type: MakePaymentResponse })
  @Post()
  @UseGuards(AuthenticatedGuard)
  async makePayment(@Body() makePaymentDto: MakePaymentDto) {
    return await this.paymentService.makePayment(makePaymentDto);
  }

  @Post('info')
  @UseGuards(AuthenticatedGuard)
  async checkPayment(@Body() checkPaymentDto: CheckPaymentDto) {
    return await this.paymentService.checkPayment(checkPaymentDto);
  }
}
