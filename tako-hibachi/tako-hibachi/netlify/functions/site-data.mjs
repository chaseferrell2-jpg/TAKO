import { getStore } from "@netlify/blobs";

/* The owner passcode lives here on the server, NOT in the public site code.
   For extra security, set an ADMIN_PASSCODE environment variable in
   Netlify (Site configuration → Environment variables) and it will be
   used instead of the fallback below. */
const PASSCODE = process.env.ADMIN_PASSCODE || "tako2026";

const KEY = "site-data";

export default async (req) => {
  const store = getStore("tako-site");

  // Anyone may READ the site data (the public site needs it)
  if (req.method === "GET") {
    const data = await store.get(KEY, { type: "json" });
    return Response.json(data ?? null, {
      headers: { "cache-control": "no-store" },
    });
  }

  // Only the owner (correct passcode) may WRITE
  if (req.method === "POST") {
    let body;
    try {
      body = await req.json();
    } catch {
      return new Response("Invalid request", { status: 400 });
    }

    if (!body || body.passcode !== PASSCODE) {
      return new Response("Wrong passcode", { status: 401 });
    }

    // Passcode check only (used by the admin unlock screen)
    if (body.action === "verify") {
      return Response.json({ ok: true });
    }

    if (!body.data || typeof body.data !== "object") {
      return new Response("Missing data", { status: 400 });
    }

    await store.setJSON(KEY, body.data);
    return Response.json({ ok: true });
  }

  return new Response("Method not allowed", { status: 405 });
};
