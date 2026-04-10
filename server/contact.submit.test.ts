import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("contact.submit", () => {
  it("returns success: true with all fields", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.contact.submit({
      name: "John Smith",
      email: "john@example.com",
      phone: "(555) 000-1234",
      message: "I want to get fit without spending hours in the gym.",
    });
    expect(result).toEqual({ success: true });
  });

  it("returns success: true without optional phone field", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.contact.submit({
      name: "Jane Doe",
      email: "jane@example.com",
      message: "Interested in the hybrid coaching program.",
    });
    expect(result).toEqual({ success: true });
  });

  it("throws when name is empty", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.contact.submit({ name: "", email: "test@example.com", message: "Hello" })
    ).rejects.toThrow();
  });

  it("throws when email is invalid", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.contact.submit({ name: "John", email: "not-an-email", message: "Hello" })
    ).rejects.toThrow();
  });

  it("throws when message is empty", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.contact.submit({ name: "John", email: "john@example.com", message: "" })
    ).rejects.toThrow();
  });

  it("throws when notifyOwner returns false", async () => {
    const { notifyOwner } = await import("./_core/notification");
    vi.mocked(notifyOwner).mockResolvedValueOnce(false);
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.contact.submit({
        name: "John",
        email: "john@example.com",
        message: "Test message",
      })
    ).rejects.toThrow("Failed to send notification");
  });
});
