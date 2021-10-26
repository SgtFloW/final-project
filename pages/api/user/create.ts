import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../../util/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>,
) {
  if (req.method === 'POST') {
    const { username, fullname, email, password } = req.body;
  }
}
