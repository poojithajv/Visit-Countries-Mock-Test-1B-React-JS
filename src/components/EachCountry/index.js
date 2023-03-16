import './index.css'

const EachCountry = props => {
  const {countryDetails, addVisitedCountry} = props
  const {id, name, isVisited} = countryDetails
  const countryText = isVisited ? 'visited' : 'visit'

  const addCountry = () => {
    addVisitedCountry(id)
  }
  return (
    <li className="country-list-item">
      <p className="country-name">{name}</p>
      {isVisited === true ? (
        <p className="para">{countryText}</p>
      ) : (
        <button className="button" type="button" onClick={addCountry}>
          {countryText}
        </button>
      )}
    </li>
  )
}
export default EachCountry
