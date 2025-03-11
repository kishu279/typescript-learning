import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { Route, Routes } from "react-router";
import { LandingPage } from "./components/LandingPage";

export default function App() {
  return (
    <>
      {/* <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </header> */}
      <Routes>
        <Route path="/landingpage" element={<LandingPage />}></Route>
      </Routes>
    </>
  );
}
