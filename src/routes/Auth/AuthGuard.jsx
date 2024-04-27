import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

// Authentication guard component
const AuthGuard = ({ children }) => (
  <>
    <SignedIn>{children}</SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </>
);

export default AuthGuard;
