module.exports = {
  HOST: process.env.HOST,
  USER: process.env.USER,
  PORT: process.env.PORT,
  PASSWORD: process.env.PASS,
  DB: 'admin_local',
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
