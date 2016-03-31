/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {
  attributes: {
    username: {
      type: 'string',
      required: true,
      unique: true,
    },
    password: {
      type: 'string'
    },
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    toJSON: function () {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },
  beforeCreate: function (values, next) {
    CipherService.hashPassword(values);
    next();
  },
  beforeUpdate: function (values, next) {
    CipherService.hashPassword(values);
    next();
  }
  
};

