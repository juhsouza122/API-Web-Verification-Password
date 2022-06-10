import { Injectable } from '@nestjs/common';

@Injectable()
export class PasswordVerificationService {
  private specialCharacteres = [
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '-',
    '+',
  ];
  verifyIfPasswordIsCorrect(password) {
    return (
      this.verifyIfContainsAtLeastOneDigit(password) &&
      this.verifyIfContainsAtLeastOneUpperCaseLetter(password) &&
      this.verifyIfContainsAtLeastOneLowerCaseLetter(password) &&
      this.verifyIfContainsAtLeastOneSpecialCharacter(password) &&
      this.verifyIfIsBigEnought(password) &&
      this.verifyIfHasDuplicateCharactersInARow(password)
    );
  }

  verifyIfContainsAtLeastOneDigit(password: string) {
    return password.length > 0;
  }

  verifyIfIsBigEnought(password: string) {
    return password.length >= 9;
  }

  verifyIfContainsAtLeastOneUpperCaseLetter(password: string) {
    return password.split('').some((letter) => {
      if (this.verifyIfIsASpecialCharacter(letter)) return false;

      return letter === letter.toUpperCase();
    });
  }

  verifyIfContainsAtLeastOneLowerCaseLetter(password: string) {
    return password.split('').some((letter) => {
      if (this.verifyIfIsASpecialCharacter(letter)) return false;
      return letter === letter.toLowerCase();
    });
  }
  verifyIfContainsAtLeastOneSpecialCharacter(password: string) {
    return password.split('').some((letter) => {
      return this.verifyIfIsASpecialCharacter(letter);
    });
  }

  verifyIfIsASpecialCharacter(letter: string) {
    return this.specialCharacteres.includes(letter);
  }

  verifyIfHasDuplicateCharactersInARow(password: string) {
    let isValid = true;
    password.split('').forEach((letter, index, array) => {
      console.log(array);
      if (letter.toUpperCase() === array[index + 1]) isValid = false;
    });
    return isValid;
  }
}
