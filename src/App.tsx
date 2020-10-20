import React from "react";
import "./App.css";
import { CalculatorPage } from "./pages";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://2237e3ca54384f68850a43ffcdc13abf@o464232.ingest.sentry.io/5471640",
  integrations: [
    new Integrations.BrowserTracing(),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

const App = () => {
  return (
    <div className="App">
      <CalculatorPage />
    </div>
  );
};

export default App;
