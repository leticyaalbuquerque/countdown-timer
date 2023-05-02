import { Outlet } from "react-router-dom"
export default function App() {
  return (
    <div className="relative w-screen h-screen bg-gradient-to-t to-very-dark-blue from-grayish-blue">
      <div className="relative w-screen h-screen bg-stars bg-no-repeat bg-cover bg-center flex items-center justify-center">
        <Outlet />
        <div className="absolute bottom-0 z-0 self-end bg-pattern-hills bg-no-repeat bg-cover bg-center h-1/3 w-screen"></div>
      </div>
    </div>
  )
}
