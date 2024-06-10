import "./SearchResult.css"

const SearchResult = ({locationProp}) => {
  return (
      <>
        <div className="row">
        <div className = "col-2"></div>
              <div className="col-8 py-3 my-2 text-start " id = "result-box">
                  <a href="" className="link-underline-dark text-dark">{locationProp}</a>
            </div>
        </div>
    </>
  )
}

export default SearchResult