import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function (request: VercelRequest, response: VercelResponse) {
  response.send(`Hello ${JSON.stringify(request.query)}`);
}
