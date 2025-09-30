import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from "react";

// Mock Next components
jest.mock("next/link", () => ({ children }: { children: React.ReactNode }) => <div>{children}</div>);
jest.mock("next/image", () => ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />);

// Import Page component
import Page from "@/app/page";

describe("Page Component", () => {
  it("renders welcome text", () => {
    render(<Page />);

    // Use regex to match partial text if strong breaks it
    expect(
      screen.getByText((content, element) =>
        content.includes("Welcome to Acme")
      )
    ).toBeInTheDocument();
  });

  it("renders login link", () => {
    render(<Page />);
    expect(screen.getByText("Log in")).toBeInTheDocument();
  });

  it("renders image", () => {
    render(<Page />);
    expect(screen.getByAltText(/Screenshots of the dashboard project/i)).toBeInTheDocument();
  });
});
