import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import AppRouter from "./routes/AppRouter";
import { Toaster } from "./components/ui/Toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <>
        <AppRouter />
        <Toaster />
      </>
    </QueryClientProvider>
  </React.StrictMode>
);
