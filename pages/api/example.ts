import { NextApiHandler } from 'next';
import { getExample, postExample } from '../../controllers/example';

const handler: NextApiHandler = (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET': {
      return getExample(req, res);
    }
    case 'POST': {
      return postExample(req, res);
    }
  }
};

export default handler;
