const { body, param } = require('express-validator');

class Validator {
  validatePost(req) {
    return [
      body("login")
        .isEmail()
        .normalizeEmail()
        .withMessage("Логин должен быть e-mail"),
      body("password")
        .isStrongPassword({
          minLength: 8,
          minLowerCase: 1,
          minNumbers: 1,
          minUpperCase: 1,
          minSymbols: 1,
        })
        .withMessage("Пароль должен содержать минимум 8 символов, 1 заглавную букву, 1 цифру и специальный символ"),
    ]
  }
  validateSN(requers) {
    return [
      body("instagram")
      .isLength({min:2, max:16})
      .withMessage("Введите корректный профиль инстаграмм, начинающийся с @"),
      body("telegram")
      .isLength({min:2, max:16})
      .withMessage("Введите корректный профиль  телеграмм, начинающийся с @")
    ]
  }


  validateParam() {
    return [param("id").isUUID().withMessage("id must be param UUID")]
  }

}


module.exports = new Validator()
