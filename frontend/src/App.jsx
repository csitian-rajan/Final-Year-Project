
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";
import "./App.css";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";
import { Home } from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";
import { DashBord } from "./pages/DashBord";
import { GeneratedQuiz } from "./pages/GeneratedQuiz";
import { QuizResult } from "./pages/QuizResult";




const router = createBrowserRouter([
  
   {
    path:"/",
    element:<AppLayout />,
    errorElement:<ErrorPage />,
    children:[
      {
       path:"/",
      element:<Home />
    },
      {
    path:"/dashbord",
    element:<DashBord />
  },
    {
    path:"/about",
    element:<About />
  },
    {
    path:"/contact",
    element:<Contact />
  },
  {
   path:"/generated-quiz",
   element:<GeneratedQuiz />
  },
  {
    path:"/quiz-result",
    element:<QuizResult />
  },
    // {
    //    path:"/quiz-result",
    //     element:<QuizResult />
    //   },
    {
    path:"/country",
    element:<Country />
  },]}
 
])
const App =()=>{
  return <RouterProvider router={router} />
}
export default App;