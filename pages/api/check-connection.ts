import { NextApiHandler } from 'next';
import dbPool from '../../config/database';

const handler: NextApiHandler = (req, res) => {
  checkConnection(req, res);
};

const checkConnection: NextApiHandler = async (req, res) => {
  try {
    await dbPool.getConnection();
    res.json({
      message: 'mysql connected',
    });
  } catch (error) {
    res.json({ message: 'mysql not connected', error });
  }
};

export default handler;
