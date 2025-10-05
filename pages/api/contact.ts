import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    console.log("Received message from:", name, email, message);
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}