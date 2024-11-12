import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const fileName = searchParams.get('fileName') ?? '개발일지'; // 기본값으로 '개발일지' 사용
  const filePath = path.join(process.cwd(), `./${fileName}.md`); // 확장자를 서버 측에서 추가

  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return NextResponse.json({ content: data });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
