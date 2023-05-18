// import React, { ReactNode } from "react";
// import { useErrorBoundary } from "use-error-boundary";

// interface ErrorBoundaryProps {
//   children: ReactNode;
// }
// // const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
// //   const [error, resetErrorBoundary] = useErrorBoundary();
// //   if (error) {
// //     return <h1> Something Went Wrong</h1>;
// //   }

// //   return <>{children}</>;
// // };

// // export default ErrorBoundary;

// // import React from 'react'

// function ErrorBoundary({ children }: ErrorBoundaryProps) {
//   const error = useErrorBoundary();
//     console.log(error);

//   if (error.didCatch) {
//     return <h1> Something Went Wrong</h1>;
//   }
//   return <div>{children}</div>;
// }

// export default ErrorBoundary;

import React, { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can log the error or send it to an error reporting service
    console.error("Error:", error);
    console.error("Error Info:", errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render a fallback UI when an error occurs
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
