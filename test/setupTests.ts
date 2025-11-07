import "@testing-library/jest-dom";
import "whatwg-fetch";
import * as nodeUtil from "util";

declare global {
  var TextEncoder: typeof import("util").TextEncoder;
  var TextDecoder: typeof import("util").TextDecoder;
}
// Synchronous polyfill for TextEncoder/TextDecoder so MSW can initialise safely.
if (typeof global.TextEncoder === "undefined" || typeof global.TextDecoder === "undefined") {
  try {
    // Prefer Node's util module which exports TextEncoder/TextDecoder in newer Node versions.
    if (nodeUtil && (nodeUtil as any).TextEncoder && (nodeUtil as any).TextDecoder) {
      global.TextEncoder = (nodeUtil as any).TextEncoder;
      global.TextDecoder = (nodeUtil as any).TextDecoder;
    }
  } catch (e) {
    // ignore
  }

  if (typeof global.TextEncoder === "undefined" || typeof global.TextDecoder === "undefined") {
    try {
      // Dynamically import the polyfill at module-evaluation time so the import is synchronous
      // with respect to module execution (Vitest supports top-level await).
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fteModule: any = await import("fast-text-encoding");
      if (fteModule && fteModule.TextEncoder && fteModule.TextDecoder) {
        global.TextEncoder = fteModule.TextEncoder;
        global.TextDecoder = fteModule.TextDecoder;
      }
    } catch (err) {
      // leave undefined — tests needing MSW will fail with a clear error
    }
  }
}
}

// Now require MSW server after polyfills are in place
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { server } = require("./server");

// Vitest lifecycle hooks
beforeAll(() => server.listen({ onUnhandledRequest: "warn" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
