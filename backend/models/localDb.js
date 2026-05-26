const fs = require('fs');
const path = require('path');

const DB_DIR = path.join(__dirname, '..', 'data');
const USERS_FILE = path.join(DB_DIR, 'users.json');
const ITINERARIES_FILE = path.join(DB_DIR, 'itineraries.json');

// Ensure data directory exists
if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}

const readJson = (file) => {
  if (!fs.existsSync(file)) return [];
  try {
    return JSON.parse(fs.readFileSync(file, 'utf-8'));
  } catch (e) {
    return [];
  }
};

const writeJson = (file, data) => {
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf-8');
};

class LocalUser {
  constructor(data) {
    this.id = data.id || data._id || 'usr_' + Math.random().toString(36).substr(2, 9);
    this._id = this.id;
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
    this.createdAt = data.createdAt || new Date().toISOString();
  }

  async save() {
    const users = readJson(USERS_FILE);
    const existingIdx = users.findIndex(u => u.email === this.email);
    if (existingIdx >= 0) {
      users[existingIdx] = {
        id: this.id,
        _id: this._id,
        name: this.name,
        email: this.email,
        password: this.password,
        createdAt: this.createdAt
      };
    } else {
      users.push({
        id: this.id,
        _id: this._id,
        name: this.name,
        email: this.email,
        password: this.password,
        createdAt: this.createdAt
      });
    }
    writeJson(USERS_FILE, users);
    return this;
  }

  static async findOne({ email }) {
    const users = readJson(USERS_FILE);
    const user = users.find(u => u.email === email);
    return user ? new LocalUser(user) : null;
  }

  static async findById(id) {
    const users = readJson(USERS_FILE);
    const user = users.find(u => u.id === id || u._id === id);
    return user ? new LocalUser(user) : null;
  }
}

class LocalItinerary {
  constructor(data) {
    this.id = data.id || data._id || 'iti_' + Math.random().toString(36).substr(2, 9);
    this._id = this.id;
    this.user = data.user;
    this.inputs = data.inputs;
    this.plan = data.plan;
    this.mlMetadata = data.mlMetadata;
    this.createdAt = data.createdAt || new Date().toISOString();
  }

  async save() {
    const itineraries = readJson(ITINERARIES_FILE);
    const entry = {
      id: this.id,
      _id: this._id,
      user: this.user,
      inputs: this.inputs,
      plan: this.plan,
      mlMetadata: this.mlMetadata,
      createdAt: this.createdAt
    };
    itineraries.push(entry);
    writeJson(ITINERARIES_FILE, itineraries);
    return this;
  }

  static find(query) {
    const itineraries = readJson(ITINERARIES_FILE);
    let results = itineraries.filter(item => {
      for (let key in query) {
        if (item[key] !== query[key]) return false;
      }
      return true;
    }).map(i => new LocalItinerary(i));

    return {
      sort: (sortQuery) => {
        if (sortQuery.createdAt === -1) {
          results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }
        return results;
      }
    };
  }
}

module.exports = {
  LocalUser,
  LocalItinerary
};
