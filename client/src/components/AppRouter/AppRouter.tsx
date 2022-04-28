import React from "react";

import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../router";

const AppRouter = () => {
  const user = true;

  return (
    <Routes>
      {user
        ? privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))
        : publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
    </Routes>
  );
};

export default AppRouter;
