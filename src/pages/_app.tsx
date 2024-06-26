import "@/styles/globals.css";
import { 
  QueryClient, 
  QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";


export const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <QueryClientProvider client={ queryClient }>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}


export default App