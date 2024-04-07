import React from "react";
import styled from "styled-components";

const ErrorDiv = styled.div`
    background-color: #f8f000;
    height: 300px;
    width: 100%;
`;

interface ErrorBoundaryState {
    error: boolean;
}

class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
    constructor(props: {}) {
        super(props);
        this.state = { error: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { error: true };
    }

    render() {
        if (this.state.error) {
            return <ErrorDiv>Error</ErrorDiv>;
        }

        return (this.props as {children:React.ReactNode}).children;
    }
}

export default ErrorBoundary;
