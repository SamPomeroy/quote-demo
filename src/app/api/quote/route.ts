import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const n8nRes = await fetch(
      'https://shannanoe.app.n8n.cloud/webhook/5d557473-f46d-4131-8144-437f0f3f0b06'
    );
    if (!n8nRes.ok) {
        const text = await n8nRes.text(); // Fallback for debugging
        return NextResponse.json(
            { error: 'n8n error', details: text },
            { status: n8nRes.status }
        );
    }
    
    
    // Ensure response is valid JSON
    const text = await n8nRes.text();
    console.log("Raw response from n8n:", text);
 let data: unknown;
try {
  data = text ? JSON.parse(text) : { error: "Empty response from n8n" };
} catch (err) {
  console.error("JSON Parse Error:", err);
  return NextResponse.json({ error: "Invalid JSON response", details: text }, { status: 500 });
}

console.log("Parsed response:", data); // Log parsed data
return NextResponse.json(data);


return { json: { message: "Test response from n8n" } };

  } catch (err) {
    console.error('Fetch error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}