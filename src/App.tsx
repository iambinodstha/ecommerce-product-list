import './App.css';
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import MainPage from './pages/MainPage';
import { axiosDefaults } from './utils/gobal';

const queryClient = new QueryClient();
axiosDefaults();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
  );
}

export default App;