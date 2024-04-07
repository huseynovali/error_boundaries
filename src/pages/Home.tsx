import React from "react";
import styled from "styled-components";
import SideBar from "../components/SideBar";
import MainContent from "../components/MainContent";
import ErrorBoundary1 from "../config/ErrorBoundaries";
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from "../config/ErrorBoundariesFunc";
function Home() {
  const Div = styled.div`
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-area: "sidebar main";
    background-color: #f8f9fa;
    min-height: 100vh;
  `;
  return (
    <Div>
     <ErrorBoundary FallbackComponent={ErrorFallback}>
      <SideBar />
      </ErrorBoundary>
      <ErrorBoundary1>
        <MainContent />
      </ErrorBoundary1>
    </Div>
  );
}

export default Home;
