import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import AppRouter from "./routes/AppRouter";
import { Toaster } from "./components/ui/Toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "./contexts/LanguageProvider";

import { I18nextProvider } from "react-i18next";

import i18next from "./i18n";
// Create a client
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <>
        <I18nextProvider i18n={i18next}>
          <LanguageProvider>
            <AppRouter />
          </LanguageProvider>
        </I18nextProvider>
        <Toaster />
      </>
    </QueryClientProvider>
  </React.StrictMode>
);
