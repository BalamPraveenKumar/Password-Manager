import './index.css'

const PasswordList = (props) => {
  const {delteItemTriggered, eachItem, isShow } = props
  const { id,websitename, username, password, intital, classname } = eachItem
  const deleteItem=()=>{
    delteItemTriggered(id)
  }

  return (
    <div className="password-list">
      {!isShow ? (
        <div className="star-div">
          <div className={`logo ${classname}`}>
            <p className="initial">{intital}</p>
          </div>

          <div className="user-details">
            <div className="content">
              <p className="website">{websitename}</p>
              <p className="user">{username}</p>
              <img
                className="stars-image"
                alt="stars"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              />
            </div>

            <div className="delete-icon-container">
              <img onClick={deleteItem}
                className="delete-icon"
                alt="delete"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="star-div">
          <div className={`logo ${classname}`}>
            <p className="initial">{intital}</p>
          </div>

          <div className="user-details">
            <div className="content">
              <p className="website">{websitename}</p>
              <p className="user">{username}</p>
              <p className='password-text'>{password}</p>
            </div>

            <div className="delete-icon-container">
              <img
                className="delete-icon"
                alt="delete"
                onClick={deleteItem}
                src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PasswordList
