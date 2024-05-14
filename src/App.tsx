import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Pets } from "./components/pets/Pets";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Pets />
    </QueryClientProvider>
  );
}

export default App;