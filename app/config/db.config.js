module.exports = {
  HOST: '192.168.0.30',
  USER: 'scrip4',
  PORT: '3306',
  PASSWORD: 'Nemesis8082*',
  DB: 'stockaitor',
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
