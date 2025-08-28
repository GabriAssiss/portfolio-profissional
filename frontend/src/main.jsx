import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./routes/App.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./routes/AppProjects.jsx";
import Project from "./pages/Project.jsx";
import dataProjects from "./data/projects.json";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
   path: "/projects",
  element: <Projects />,
  children: [
    {
      index: true,
      element: <Project /> 
    },
    {
      path: "cit",  
      element: <Project data={dataProjects?.projects[0]}/> ,
    },
    {
      path: "sechat", 
      element: <Project data={dataProjects?.projects[1]}/> ,
    },
    {
      path: "mic-user-application",
      element: <Project data={dataProjects?.projects[2]}/> ,
    },
  ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
