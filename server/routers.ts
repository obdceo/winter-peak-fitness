import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { notifyOwner } from "./_core/notification";
import { z } from "zod";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name:    z.string().min(1, "Name is required").max(200),
          email:   z.string().email("Valid email required").max(320),
          phone:   z.string().max(30).optional(),
          message: z.string().min(1, "Message is required").max(5000),
        })
      )
      .mutation(async ({ input }) => {
        const lines = [
          `Name: ${input.name}`,
          `Email: ${input.email}`,
          input.phone ? `Phone: ${input.phone}` : null,
          ``,
          `Message:`,
          input.message,
        ].filter(Boolean).join("\n");

        const success = await notifyOwner({
          title: `New Winter Peak Fitness Inquiry from ${input.name}`,
          content: lines,
        });

        if (!success) {
          throw new Error("Failed to send notification");
        }

        return { success: true } as const;
      }),
  }),
});

export type AppRouter = typeof appRouter;
