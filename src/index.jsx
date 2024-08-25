import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import AppRouter from "./routes/AppRouter";
import { Toaster } from "./components/ui/Toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PageDirectionProvider } from "./contexts/PageDirectionProvider";

// Create a client
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <>
        <PageDirectionProvider>
          <AppRouter />
        </PageDirectionProvider>
        <Toaster />
      </>
    </QueryClientProvider>
  </React.StrictMode>
);
