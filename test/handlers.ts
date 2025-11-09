// test/handlers.ts
import { rest } from "msw";

export const handlers = [
  // GET /api/users/:id
  rest.get("/api/users/:id", (req, res, ctx) => {
    const { id } = req.params;
    if (id === "err") {
      return res(ctx.status(500), ctx.json({ message: "Simulierter Server-Fehler" }));
    }
    return res(
      ctx.status(200),
      ctx.json({
        id,
        name: `Test User ${id}`,
        bio: "Frontend Engineer",
        avatarUrl: ""
      })
    );
  }),

  // health endpoint
  rest.get("/api/health", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ ok: true }));
  })
];
