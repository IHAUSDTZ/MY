import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import "@testing-library/jest-dom";

// Mocking Next.js Link component
jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

describe("Navbar Component", () => {
  it("renders the NGO name (IHAUS)", () => {
    render(<Navbar />);
    const logoElement = screen.getByText(/IHAUS/i);
    expect(logoElement).toBeInTheDocument();
  });

  it("contains navigation links for major pages", () => {
    render(<Navbar />);
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Programs/i)).toBeInTheDocument();
    expect(screen.getByText(/Donate/i)).toBeInTheDocument();
  });

  it("has a call-to-action button for donations", () => {
    render(<Navbar />);
    const donateButton = screen.getByRole("link", { name: /Donate/i });
    expect(donateButton).toBeInTheDocument();
    expect(donateButton).toHaveAttribute("href", "/donate");
  });
});
