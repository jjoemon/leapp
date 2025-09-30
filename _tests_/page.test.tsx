// page.test.tsx

import { render, screen } from "@testing-library/react";
import Page from "@/app/page"; // adjust path if needed
import '@testing-library/jest-dom';

describe("Page Component", () => {
  it("renders welcome text", () => {
    render(<Page />);
       expect(screen.getByText(/Welcome to Acme./i)).toBeInTheDocument();
  });

  it("contains a link to Next.js Learn Course", () => {
    render(<Page />);
    const link = screen.getByRole("link", { name: /Next\.js Learn Course/i });
    expect(link).toHaveAttribute("href", "https://nextjs.org/learn/");
  });

  it("renders login button with correct href", () => {
    render(<Page />);
    const loginLink = screen.getByRole("link", { name: /Log in/i });
    expect(loginLink).toHaveAttribute("href", "/login");
  });

  it("renders image with alt text", () => {
    render(<Page />);
    const image = screen.getByAltText(
      "Screenshots of the dashboard project showing desktop version"
    );
    expect(image).toBeInTheDocument();
  });

  it("matches snapshot", () => {
  const { container } = render(<Page />);
  expect(container).toMatchSnapshot();
});
});
