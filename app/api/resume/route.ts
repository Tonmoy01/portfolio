import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  const filePath = join(process.cwd(), 'public', 'resume.pdf');
  const file = await readFile(filePath);

  return new Response(file, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Length': file.length.toString(),
    },
  });
}
