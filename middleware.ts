import { authMiddleware } from "@clerk/nextjs/server";
 
export default authMiddleware({
  publicRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe']
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

/*OPENAI_API_KEY = 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
*/