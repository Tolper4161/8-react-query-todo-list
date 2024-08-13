import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { AccountPage } from "./pages/AccountPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={ queryClient }>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <MainPage /> } />
            <Route path="/account" element={ <AccountPage /> } />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
  );
}

export default App;
