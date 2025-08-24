import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Menu from "./pages/Menu.jsx";
import Experience from "./pages/Experience.jsx";
import About from "./pages/About.jsx";
import App from "./routes/App.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <App />,
    children: [
      {
        index: true,
        element: <Menu />,
      },
      {
        path: "about", 
        element: <About />,
      },
      {
        path: "experience", 
        element: <Experience />,
      },
      {
        path: "project", 
        element: <Projects />,
      },
      {
        path: "contact", 
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
