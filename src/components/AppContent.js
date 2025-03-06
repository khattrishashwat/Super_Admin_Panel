import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CContainer, CSpinner } from "@coreui/react";

// routes config
import routes from "../routes";

// Import PrivateRoute
import PrivateRoute from "./PrivateRoute";

const AppContent = () => {
  return (
    <CContainer className="m-0 " lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  // Use PrivateRoute for protected routes
                  element={
                    route.isProtected ? (
                      <PrivateRoute element={<route.element />} />
                    ) : (
                      <route.element />
                    )
                  }
                />
              )
            );
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  );
};

export default React.memo(AppContent);
