import { PasswordVerificationService } from './password-verification/password-verification.service';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { Http2ServerResponse } from 'http2';
import { SessionsService } from './sessions.service';
import { Request, Response } from 'express';

interface SessionsParams {
  password: string;
}
@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Post('/verify-password')
  async create(
    @Body() { password }: SessionsParams,
    @Res() response: Response,
  ) {
    const isPasswordValid = this.sessionsService.create(password);

    if (!isPasswordValid) {
      return response.status(400).json({
        message: 'Password is not valid',
      });
    }

    return response.status(200).json({
      message: 'Password verified',
    });
  }
}
