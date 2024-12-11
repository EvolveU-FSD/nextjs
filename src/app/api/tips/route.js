export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  return new Response(
    JSON.stringify({
      id,
      status: 'Preparing',
      message: 'Productivity tip of the day: Eliminate, Delegate, Automate!',
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}

export async function POST(req) {
  return new Response(JSON.stringify({ message: 'Method Not Allowed' }), {
    status: 405,
    headers: { 'Content-Type': 'application/json' },
  });
}
