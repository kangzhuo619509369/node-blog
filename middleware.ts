import { clerkMiddleware } from "@clerk/nextjs/server";
import { AddUser } from './app/api/addUser'
export default clerkMiddleware((auth) => {
  const { userId, sessionClaims, redirectToSignIn } = auth();
  if (userId) {
    AddUser(userId)
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};