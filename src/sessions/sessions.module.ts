import { Module } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';
import { PasswordVerificationService } from './password-verification/password-verification.service';

@Module({
  controllers: [SessionsController],
  providers: [SessionsService, PasswordVerificationService],
})
export class SessionsModule {}
