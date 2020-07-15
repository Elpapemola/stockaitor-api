module.exports = {
  HOST: 'localhost',
  USER: 'script4',
  PORT:'3306',
  PASSWORD: '?Bfyp693',
  DB: 'admin_local',
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
