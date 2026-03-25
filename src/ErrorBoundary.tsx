import React, { ReactNode } from "react";

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

interface ErrorBoundaryProps {
    children: ReactNode;
}

class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Error caught by boundary:", error, errorInfo);
    }

    disableError = () => {
        this.setState({ hasError: false, error: null });
    };
    render() {
        if (this.state.hasError) {
            return (
                <div
                    style={{
                        padding: "20px",
                        border: "2px solid red",
                        backgroundColor: "#ffe6e6",
                        borderRadius: "8px",
                    }}
                >
                    <h2 style={{ color: "red" }}>Algo deu errado!</h2>
                    <details
                        style={{ whiteSpace: "pre-wrap", color: "#d32f2f" }}
                    >
                        {this.state.error?.toString()}
                    </details>
                    <button onClick={this.disableError}>voltar</button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
