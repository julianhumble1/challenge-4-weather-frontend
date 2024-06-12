import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import RegistrationScreen from "../src/components/RegistrationScreen/RegistrationScreen.jsx"

describe("Registration Screen tests", () => {
    describe("Email and password error message tests", () => {
        it("should render invalid email message after entering an invalid email", async () => {
            // Arrange
            render(<RegistrationScreen />)
            // Act
            const emailInput = await screen.findByPlaceholderText("email@email.com")
            await userEvent.type(emailInput, "invalidEmail")
            await userEvent.tab()
            // Assert
            expect(screen.getByText("Please enter a valid email address")).toBeInTheDocument();
        })

        it("should render invalid password message after entering an invalid password", async () => {
            // Arrange
            render(<RegistrationScreen />) 
            // Act
            const passwordInput = await screen.findByPlaceholderText("Password")
            await userEvent.type(passwordInput, "badpassword");
            await userEvent.tab();
            // Assert
            expect(screen.getByText("Password must contain a special character, number and be at least 8 characters long")).toBeInTheDocument();
        })

        it("should not render invalid email message after entering valid email", async() => {
            // Arrange
            render(<RegistrationScreen />)
            // screen.debug();
            // Act
            const emailInput = await screen.findByPlaceholderText("email@email.com")
            await userEvent.type(emailInput, "email@email.com")
            await userEvent.tab();
            // Assert
            expect(screen.queryByText("Please enter a valid email address")).not.toBeInTheDocument();
        })
    })
})