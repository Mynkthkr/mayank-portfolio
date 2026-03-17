import { lazy, Suspense } from "react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  return (
    <>
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <Suspense>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
        <Analytics />
        <SpeedInsights />
      </LoadingProvider>
    </>
  );
};

export default App;
