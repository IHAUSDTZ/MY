import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "../app/contact/page";

jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

jest.mock("@emailjs/browser", () => ({
  __esModule: true,
  default: {
    init: jest.fn(),
    sendForm: jest.fn(() => Promise.resolve()),
  },
}));

describe("Contact Form", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders all form fields", () => {
    render(<Contact />);
    
    expect(screen.getByPlaceholderText("Your Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("email@example.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("How can we help you?")).toBeInTheDocument();
  });

  it("shows validation error for invalid email", async () => {
    render(<Contact />);
    
    const nameInput = screen.getByPlaceholderText("Your Name");
    const emailInput = screen.getByPlaceholderText("email@example.com");
    const messageInput = screen.getByPlaceholderText("How can we help you?");
    const submitButton = screen.getByRole("button", { name: /Send Message/i });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "invalid" } });
    fireEvent.change(messageInput, { target: { value: "This is a test message" } });
    
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/valid email/i)).toBeInTheDocument();
    });
  });

  it("shows validation error for short message", async () => {
    render(<Contact />);
    
    const nameInput = screen.getByPlaceholderText("Your Name");
    const emailInput = screen.getByPlaceholderText("email@example.com");
    const messageInput = screen.getByPlaceholderText("How can we help you?");
    const submitButton = screen.getByRole("button", { name: /Send Message/i });

    fireEvent.change(nameInput, { target: { value: "John" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Hi" } });
    
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/at least 10 characters/i)).toBeInTheDocument();
    });
  });

  it("shows success message after successful submission", async () => {
    render(<Contact />);
    
    const nameInput = screen.getByPlaceholderText("Your Name");
    const emailInput = screen.getByPlaceholderText("email@example.com");
    const messageInput = screen.getByPlaceholderText("How can we help you?");
    const submitButton = screen.getByRole("button", { name: /Send Message/i });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, { target: { value: "This is a valid test message" } });
    
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Message Sent!/i)).toBeInTheDocument();
    });
  });
});
