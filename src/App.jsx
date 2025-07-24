import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "./pages/Index"
import NotFound from "./pages/NotFound"
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App