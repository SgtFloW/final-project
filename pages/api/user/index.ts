import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../../util/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>,
) {
  if (req.method === 'POST') {
    const { identifierOption, keyOption } = req.body;
  }
}
