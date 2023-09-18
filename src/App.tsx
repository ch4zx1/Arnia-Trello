import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login/Login"
import Dashboard from "./pages/Dashboard/Dashboard"
import Signin from "./pages/Signin/Signin"

function App() {

  return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/signin" element={<Signin />} />
			<Route path="/dashboard" element={<Dashboard />} />
		</Routes>
	</BrowserRouter>
  )
}

export default App
