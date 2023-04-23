import dbPool from '../config/database';

const getAllUsers = () => {
  const SQLQuery = `SELECT * FROM users`;
  return dbPool.execute(SQLQuery);
};

export { getAllUsers };
