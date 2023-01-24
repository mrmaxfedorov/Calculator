export class Randomizer {

  static getRandomLowerCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  static getRandomUpperCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  static getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  static getRandomSymbol(){
    let symbolString = `!@#$%^&*(){};:.,/~\\\\`
    return symbolString[Math.floor(Math.random() * symbolString.length)];
  }

  static getPasswordObject(state){
    let passwordObject = {};
    for(let key of Object.keys(state)){
      if(typeof state[key] === 'boolean' && state[key] === true){
        passwordObject = {
          ...passwordObject,
          [key] : state[key]
        }
      }
    }
    return passwordObject;
  }

  static generatePassword(passwordObject, passwordLength){
    let password = '';
    for(let i = 0; i < Number(passwordLength); i+= Object.keys(passwordObject).length){
      if(passwordObject.lowerCase) password += `${this.getRandomLowerCase()}`;
      if(passwordObject.upperCase) password += `${this.getRandomUpperCase()}`;
      if(passwordObject.numbers) password += `${this.getRandomNumber()}`;
      if(passwordObject.symbols) password += `${this.getRandomSymbol()}`;
    }
    return password;
  }
}