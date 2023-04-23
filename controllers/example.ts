import { NextApiHandler, NextApiResponse } from 'next';
import { getAllUsers } from '../models/example';

const queryAllData = async (res: NextApiResponse) => {
  try {
    const [data] = await getAllUsers();
    res.status(200).json({
      message: 'succes to get',
      data,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const getExample: NextApiHandler = (req, res) => {
  queryAllData(res);
};

const postExample: NextApiHandler = (req, res) => {
  const { body } = req;
  res.status(200).json({
    message: 'succes to get',
    data: body,
  });
};

export { getExample, postExample };
