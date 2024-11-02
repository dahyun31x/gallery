import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static'; // 또는 'force-static'을 사용할 수 있습니다.

export async function GET() {
  const filePath = path.join(process.cwd(), './개발일지.md');
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return NextResponse.json({ content: data });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}