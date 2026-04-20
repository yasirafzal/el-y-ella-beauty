import type { backendInterface } from "../backend";

export const mockBackend: backendInterface = {
  listBookings: async () => [
    {
      id: BigInt(1),
      service: { __kind__: "haircut", haircut: null },
      name: "Maria Garcia",
      submittedAt: BigInt(Date.now() * 1_000_000),
      email: "maria@example.com",
      preferredDateTime: "2026-04-25T10:00",
      phone: "+1 555-123-4567",
    },
    {
      id: BigInt(2),
      service: { __kind__: "facial", facial: null },
      name: "Sofia Rodriguez",
      submittedAt: BigInt(Date.now() * 1_000_000),
      email: "sofia@example.com",
      preferredDateTime: "2026-04-26T14:00",
      phone: "+1 555-987-6543",
    },
  ],
  submitBooking: async (_submission) => ({
    __kind__: "ok",
    ok: BigInt(3),
  }),
};
