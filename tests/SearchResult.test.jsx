import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import SearchResult from "../src/components/SearchResult/SearchResult.jsx"

describe("Search Result tests", () => {

    it("should render search result link if search term is valid", async () => {
        // Arrange
        // Act
        render(
            <MemoryRouter>
                <SearchResult searchQuery={"london"}/>
            </MemoryRouter>
        )
        // Assert
        const searchResult = await screen.findByText("London")
        expect(searchResult).toBeInTheDocument()
    })

    it("should render error message if search term is invalid", async () => {
        // Arrange
        // Act
        render(
            <MemoryRouter>
                <SearchResult searchQuery={"dafdssdf"}/>
            </MemoryRouter>
        )
        // Assert
        const errorMessage = await screen.findByText("Failed to find matching result. Please try again.")
        expect(errorMessage).toBeInTheDocument()
    })
})