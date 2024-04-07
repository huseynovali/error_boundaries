import styled from "styled-components";

function ErrorFallback({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: () => void }){
    const ErrorDiv = styled.div`
    background-color: #f8f000;
    height: 300px;
    width: 100%;
`;



    return (
      <ErrorDiv role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </ErrorDiv>
    );
  }

  export default ErrorFallback;