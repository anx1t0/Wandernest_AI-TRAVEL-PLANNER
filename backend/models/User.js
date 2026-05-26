const mongoose = require('mongoose');
const { LocalUser } = require('./localDb');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { timestamps: true });

const MongoUser = mongoose.model('User', userSchema);

class UserProxy {
  constructor(data) {
    if (global.dbMode && global.dbMode.useLocal) {
      return new LocalUser(data);
    } else {
      return new MongoUser(data);
    }
  }

  static async findOne(query) {
    if (global.dbMode && global.dbMode.useLocal) {
      return LocalUser.findOne(query);
    }
    return MongoUser.findOne(query);
  }

  static async findById(id) {
    if (global.dbMode && global.dbMode.useLocal) {
      return LocalUser.findById(id);
    }
    return MongoUser.findById(id);
  }
}

module.exports = UserProxy;
