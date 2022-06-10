import { Test, TestingModule } from '@nestjs/testing';
import { PasswordVerificationService } from './password-verification.service';

describe('PasswordVerificationService', () => {
  let service: PasswordVerificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasswordVerificationService],
    }).compile();

    service = module.get<PasswordVerificationService>(PasswordVerificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
