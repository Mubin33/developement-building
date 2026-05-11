import { NextResponse } from 'next/server';
import projectsData from '@/data/projects.json';

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: projectsData.shopProducts
    });
  } catch (_error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch shop products' },
      { status: 500 }
    );
  }
}
