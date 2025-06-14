'use client'
import { useState } from 'react'

interface QuoteResponse {
  quote: string
  author: string
  category?: string
  timestamp?: string
  source?: string
}

export default function Home() {
  const [quoteData, setQuoteData] = useState<QuoteResponse | null>(null)

 const getQuote = async () => {
  try {
    const res = await fetch('/api/quote', {
      method: 'GET',
      headers: { Accept: 'application/json' }
    });
    const text = await res.text();
    console.log("Frontend raw API response:", text); // Log before parsing

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data: QuoteResponse = JSON.parse(text);
    setQuoteData(data);
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
};

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-black">
        💡 ReframeMe: Quote MCP Demo
      </h1>
      <button
        onClick={getQuote}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Get Quote
      </button>

      {quoteData && (
        <div className="mt-8 bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <p className="text-xl italic font-bold mb-2 text-blue-950">{quoteData.quote}</p>
          <p className="text-right font-semibold text-cyan-950">— {quoteData.author}</p>
          <div className="mt-4 text-sm text-gray-600">
            {quoteData.category && <p>Category: {quoteData.category}</p>}
            {quoteData.timestamp && <p>Timestamp: {quoteData.timestamp}</p>}
            {quoteData.source && <p>Source: {quoteData.source}</p>}
          </div>
        </div>
      )}

      <pre className="mt-6 bg-gray-900 text-green-300 p-4 rounded text-xs overflow-x-auto">
        {JSON.stringify(quoteData, null, 2)}
      </pre>
    </main>
  )
}