import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import LoginScreen from "../src/components/LoginScreen/LoginScreen.jsx"
import { MemoryRouter } from "react-router-dom"

import React from "react"

import { cleanup } from '@testing-library/react';

describe("Login Screen Tests", () => {

    let emailInput;
    let passwordInput;

    beforeEach(async () => {
        vi.clearAllMocks();
        render(<MemoryRouter>
            <LoginScreen />
            </MemoryRouter>
        )
        emailInput = await screen.findByPlaceholderText("email@email.com")
        passwordInput = await screen.findByPlaceholderText("Password")

        global.localStorage = {
        getItem: vi.fn((key) => {
            if (key === "email") return "email@email.com";
            if (key === "password") return "password1!";
            return null;
            }),
        };
        vi.spyOn(React, 'useState');
        })
        
    afterEach(() => {
        vi.clearAllMocks();
        cleanup();
    })

    describe("Invalid login tests", () => {
        it("should render invalid details message when email does not match local storage", async() => {
            // Arrange
            await userEvent.type(emailInput, "email")
            await userEvent.type(passwordInput, "password1!")
            // Act 
            const loginButton = screen.getByRole('button', { name: 'Login' });
            await userEvent.click(loginButton)
            // Assert
            expect(screen.getByText("Username or password incorrect. Please try again.")).toBeInTheDocument();
        })

        it("should render invalid details message when password does not match local storage", async() => {
            // Arrange
            await userEvent.type(emailInput, "email@email.com")
            await userEvent.type(passwordInput, "password")
            // Act 
            const loginButton = screen.getByRole('button', { name: 'Login' });
            await userEvent.click(loginButton)
            // Assert
            expect(screen.getByText("Username or password incorrect. Please try again.")).toBeInTheDocument();
        })

        // it("should not call setLoggedIn when email does not match local storage", async() => {
        //     // Arrange
        //     const setLoginAttemptStatusMock = vi.fn();
        //     const setEmailMock = vi.fn();
        //     const setPasswordMock = vi.fn();


        //     const setLoggedInMock = vi.fn();
        //     React.useState
        //     .mockReturnValueOnce(['', setLoginAttemptStatusMock]) 
        //     .mockReturnValueOnce(['', setEmailMock])
        //     .mockReturnValueOnce(['', setPasswordMock]);


        //     await userEvent.type(emailInput, "email")
        //     await userEvent.type(passwordInput, "password1!")
        //     // Act 
        //     const loginButton = screen.getByRole('button', { name: 'Login' });
        //     await userEvent.click(loginButton)
        //     // Assert
        //     expect(setLoggedInMock).not.toHaveBeenCalled();
        // })

        // it("should not call setLoggedIn when password does not match local storage", async() => {
        //     // Arrange
        //     const setLoginAttemptStatusMock = vi.fn();
        //     const setEmailMock = vi.fn();
        //     const setPasswordMock = vi.fn();
        //     const setLoggedInMock = vi.fn();
        //     React.useState
        //     .mockReturnValueOnce(['', setLoginAttemptStatusMock]) 
        //     .mockReturnValueOnce(['', setEmailMock])
        //     .mockReturnValueOnce(['', setPasswordMock]);


        //     await userEvent.type(emailInput, "email@email.com")
        //     await userEvent.type(passwordInput, "password1")
        //     // Act 
        //     const loginButton = screen.getByRole('button', { name: 'Login' });
        //     await userEvent.click(loginButton)
        //     // Assert
        //     expect(setLoggedInMock).not.toHaveBeenCalled();
        // })
        
    })
})