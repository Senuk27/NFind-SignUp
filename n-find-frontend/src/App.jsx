import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BarLoader } from "react-spinners";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <BarLoader color={"#00c853"} loading={true} width={"100%"} />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
