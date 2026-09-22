import { MetaProvider, Title } from "@solidjs/meta";
import { Router, useIsRouting } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { createEffect, createSignal, onCleanup, Suspense } from "solid-js";
import "./app.css";
import Navigation from "./components/Navgiation";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>Hiwal Investments</Title>
          <RouteProgress />
          <Navigation />
          <Suspense>{props.children}</Suspense>
          <Footer />
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}


function RouteProgress() {
  const isRouting = useIsRouting();
  const [visible, setVisible] = createSignal(false);

  createEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isRouting()) {
      // Only show the bar if the nav takes longer than 150ms.
      // Fast transitions never trigger it — no flash.
      timeout = setTimeout(() => setVisible(true), 150);
    } else {
      setVisible(false);
    }

    onCleanup(() => clearTimeout(timeout));
  });

  return (
    <div
      class="route-progress"
      classList={{ "route-progress--active": visible() }}
      aria-hidden="true"
    />
  );
}
