import * as React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StartPage from "../layouts/homePage";


const routes = [
  {
    path: "/",
    element: <StartPage />,
    loader: async () => {
       return fetch(`/api/dashoard`);
    },
  },
  // {
  //   path: "/messages",
  //   element: <Layout2 />,
  //   loader: async () => {
  //       return fetch(`/api/messages`);
  //   },
  // },
  //  {
  //   path: "/messages/:slug",
  //   element: <Message />,
  //   loader: async ({param}) => {
  //       return fetch(`/api/messages/${param.slug}`);
  //   },
  // }
];

const Navigation = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />
};

export default Navigation;