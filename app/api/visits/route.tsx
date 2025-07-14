let visitCount = 0;

export async function GET() {
  return new Response(JSON.stringify({ count: visitCount }), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST() {
  visitCount += 1;
  return new Response(JSON.stringify({ count: visitCount }), {
    headers: { "Content-Type": "application/json" },
  });
}
