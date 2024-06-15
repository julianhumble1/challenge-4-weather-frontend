import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import LoginScreen from "../src/components/LoginScreen/LoginScreen.jsx"
import UserHandler from "../src/utils/UserHandler.js"
import { MemoryRouter } from "react-router-dom"

import React from "react"

import { cleanup } from '@testing-library/react';
import { beforeEach, describe } from "vitest"

describe("Login Screen Tests", () => {

    let emailInput;
    let passwordInput;
    let loggedInMock;
    let setLoggedInMock;

    beforeEach(async () => {

        loggedInMock = "";
        setLoggedInMock = vi.fn();

        render(<MemoryRouter>
            <LoginScreen loggedIn={""} setLoggedIn={setLoggedInMock} />
        </MemoryRouter>
        )
        emailInput = await screen.findByPlaceholderText("email@email.com")
        passwordInput = await screen.findByPlaceholderText("Password")
    })
        
    afterEach(() => {
        vi.clearAllMocks();
        cleanup();
    })

    describe("Invalid login tests", () => {

        beforeEach(() => {
            vi.spyOn(UserHandler, "checkEmailAndPasswordMatchStorage").mockReturnValue(false);
        })

        it("should render invalid details message when email does not match local storage", async () => {
            // Arrange
            await userEvent.type(emailInput, "email")
            await userEvent.type(passwordInput, "password1!")
            // Act 
            const loginButton = screen.getByRole('button', { name: 'Login' });
            await userEvent.click(loginButton)
            // Assert
            expect(screen.getByText("Username or password incorrect. Please try again.")).toBeInTheDocument();
        })

        it("should render invalid details message when password does not match local storage", async () => {
            // Arrange
            await userEvent.type(emailInput, "email@email.com")
            await userEvent.type(passwordInput, "password")
            // Act 
            const loginButton = screen.getByRole('button', { name: 'Login' });
            await userEvent.click(loginButton)
            // Assert
            expect(screen.getByText("Username or password incorrect. Please try again.")).toBeInTheDocument();
        })

        it("should not call setLoggedIn when email doesn't match local storage", async () => {
            // Arrange
            await userEvent.type(emailInput, "email")
            await userEvent.type(passwordInput, "password1!")
            // Act
            const loginButton = screen.getByRole('button', { name: 'Login' });
            await userEvent.click(loginButton)
            // Assert
            expect(setLoggedInMock).not.toHaveBeenCalled();
        })

    })

    describe("valid login tests", () => {
        it("should call setLoggedIn with the user ID when user details match local storage", async () => {
            // Arrange
            await userEvent.type(emailInput, "email@email.com")
            await userEvent.type(passwordInput, "password")
            vi.spyOn(UserHandler, "checkEmailAndPasswordMatchStorage").mockReturnValue(1);
            // Act
            const loginButton = screen.getByRole('button', { name: 'Login' });
            await userEvent.click(loginButton)
            // Assert
            expect(setLoggedInMock).toHaveBeenCalledWith(1);
        })   
        
        it("should render successful login message when user details match local storage", () => {

        })
    })
})

    
