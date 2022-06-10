import { Injectable } from '@nestjs/common';
import { PasswordVerificationService } from './password-verification/password-verification.service';

@Injectable()
export class SessionsService {
  constructor(
    private passwordVerificationService: PasswordVerificationService,
  ) {}
  create(password: string) {
    return this.passwordVerificationService.verifyIfPasswordIsCorrect(password);
  }
}
