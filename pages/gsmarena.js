const API = "https://api.varshade.biz.id/api/search/gsmarena";

export default async function handler(req, res) { if (req.method !== "GET") { res.status(405).json({ success: false, message: "Method not allowed" }); return; }

const query = req.query.query;

if (!query) { res.status(400).json({ success: false, message: 'Parameter "query" wajib diisi' }); return; }

try { const apiRes = await fetch(API + "?query=" + encodeURIComponent(query));

if (!apiRes.ok) {
  res.status(apiRes.status).json({
    success: false,
    message: "API error. Status " + apiRes.status
  });
  return;
}

const data = await apiRes.json();
res.status(200).json(data);

} catch (err) { res.status(500).json({ success: false, message: "SERVER_FETCH_ERROR", detail: err.message }); } }
