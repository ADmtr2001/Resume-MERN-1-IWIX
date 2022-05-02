import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { privateRoutes, publicRoutes } from "../../router";
import Loader from "../UI/Loader/Loader";

const AppRouter = () => {
  const { user, isUserLoading } = useAppSelector((state) => state.user);

  if (isUserLoading) {
    return <Loader />;
  }

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
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default AppRouter;
