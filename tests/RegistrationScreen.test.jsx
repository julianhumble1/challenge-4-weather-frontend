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
    })
})