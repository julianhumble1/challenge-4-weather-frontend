import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import RegistrationScreen from "../src/components/RegistrationScreen/RegistrationScreen.jsx"
import { MemoryRouter } from "react-router-dom"
import { beforeEach, describe, it } from "vitest"

global.localStorage = {
  setItem: vi.fn(),
};

describe("Registration Screen tests", () => {
    let emailInput;
    let passwordInput;

    beforeEach( async () => {
        render(<MemoryRouter>
            <RegistrationScreen />
            </MemoryRouter>
        )
        emailInput = await screen.findByPlaceholderText("email@email.com")
        passwordInput = await screen.findByPlaceholderText("Password")
        vi.clearAllMocks();
    })
    describe("Email and password error message tests", () => {


        it("should render invalid email message after entering an invalid email", async () => {
            // Arrange
            // Act
            await userEvent.type(emailInput, "invalidEmail")
            await userEvent.tab()
            // Assert
            expect(screen.getByText("Please enter a valid email address")).toBeInTheDocument();
        })

        it("should render invalid password message after entering an invalid password", async () => {
            // Arrange
            // Act
            await userEvent.type(passwordInput, "badpassword");
            await userEvent.tab();
            // Assert
            expect(screen.getByText("Password must contain a special character, number and be at least 8 characters long")).toBeInTheDocument();
        })

        it("should not render invalid email message after entering valid email", async() => {
            // Arrange
            // Act
            await userEvent.type(emailInput, "email@email.com")
            await userEvent.tab();
            // Assert
            expect(screen.queryByText("Please enter a valid email address")).not.toBeInTheDocument();
        })

    })
    describe("Registration Effect tests", () => {

        it("should not render invalid email password after entering valid password", async () => {
            // Arrange
            // Act
            await userEvent.type(passwordInput, "password1!");
            await userEvent.tab();
            // Assert
            expect(screen.queryByText("Password must contain a special character, number and be at least 8 characters long")).not.toBeInTheDocument();
        })
    
        it("should store email in local storage after entering valid email and password", async () => {
            // Arrange
            await userEvent.type(emailInput, "email@email.com")
            await userEvent.type(passwordInput, "password1!")
            // Act
            const registerButton = screen.getByRole('button', { name: 'Sign Up' });
            await userEvent.click(registerButton);
            // Assert
            expect(localStorage.setItem).toHaveBeenCalledWith("email", "email@email.com");
        })
    
        it("should store password in local storage after entering valid email and password", async () => {
            // Arrange
            await userEvent.type(emailInput, "email@email.com")
            await userEvent.type(passwordInput, "password1!")
            // Act
            const registerButton = screen.getByRole('button', { name: 'Sign Up' });
            await userEvent.click(registerButton);
            // Assert
            expect(localStorage.setItem).toHaveBeenCalledWith("password", "password1!");
        })
    
        it("should render successful register message after pressing register with valid details", async () => {
            // Arrange
            await userEvent.type(emailInput, "email@email.com")
            await userEvent.type(passwordInput, "password1!")
            // Act
            const registerButton = screen.getByRole('button', { name: 'Sign Up' });
            await userEvent.click(registerButton);
            // Assert
            expect(screen.getByText("Registration Successful!")).toBeInTheDocument();
        })
    
        it("should render link to login after pressing register with valid details", async () => {
            // Arrange
            await userEvent.type(emailInput, "email@email.com")
            await userEvent.type(passwordInput, "password1!")
            // Act
            const registerButton = screen.getByRole('button', { name: 'Sign Up' });
            await userEvent.click(registerButton);
            // Assert
            expect(screen.getByText("Click here to login")).toBeInTheDocument();
        })
    
        it("should render relevant error message after pressing register with invalid password", async () => {
            // Arrange
            await userEvent.type(emailInput, "email@email.com")
            await userEvent.type(passwordInput, "password")
            // Act
            const registerButton = screen.getByRole('button', { name: 'Sign Up' });
            await userEvent.click(registerButton);
            // Assert
            expect(screen.getByText("Ensure inputted details are valid before registering")).toBeInTheDocument();
        })
    
        it("should render relevant error message after pressing register with invalid email", async () => {
            // Arrange
            await userEvent.type(emailInput, "email")
            await userEvent.type(passwordInput, "password1!")
            // Act
            const registerButton = screen.getByRole('button', { name: 'Sign Up' });
            await userEvent.click(registerButton);
            // Assert
            expect(screen.getByText("Ensure inputted details are valid before registering")).toBeInTheDocument();
        })
    
        it("should not store email in local storage after entering invalid password", async () => {
            // Arrange
            await userEvent.type(emailInput, "email@email.com")
            await userEvent.type(passwordInput, "password")
            // Act
            const registerButton = screen.getByRole('button', { name: 'Sign Up' });
            await userEvent.click(registerButton);
            // Assert
            expect(localStorage.setItem).not.toHaveBeenCalledWith("email","email@email.com");
        })

        it("should not store email in local storage after entering invalid email", async () => {
            // Arrange
            await userEvent.type(emailInput, "email")
            await userEvent.type(passwordInput, "password1!")
            // Act
            const registerButton = screen.getByRole('button', { name: 'Sign Up' });
            await userEvent.click(registerButton);
            // Assert
            expect(localStorage.setItem).not.toHaveBeenCalledWith("email","email");
        })

        it("should not store password in local storage after entering invalid password", async () => {
            // Arrange
            await userEvent.type(emailInput, "email@email.com")
            await userEvent.type(passwordInput, "password")
            // Act
            const registerButton = screen.getByRole('button', { name: 'Sign Up' });
            await userEvent.click(registerButton);
            // Assert
            expect(localStorage.setItem).not.toHaveBeenCalledWith("password","password");
        })

        it("should not store password in local storage after entering invalid email", async () => {
            // Arrange
            await userEvent.type(emailInput, "email")
            await userEvent.type(passwordInput, "password1!")
            // Act
            const registerButton = screen.getByRole('button', { name: 'Sign Up' });
            await userEvent.click(registerButton);
            // Assert
            expect(localStorage.setItem).not.toHaveBeenCalledWith("password","password");
        })
    })

    
})