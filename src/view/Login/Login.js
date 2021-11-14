import logo from '../../logo.svg'
import liff from '@line/liff'
import { Fragment, useEffect, useState } from 'react'
import { sendToken } from '../../services'
import Cookies from 'js-cookie'

function App() {
  // const [pictureUrl, setPictureUrl] = useState(logo)
  const [idToken, setIdToken] = useState('')
  // const [displayName, setDisplayName] = useState('')
  // const [statusMessage, setStatusMessage] = useState('')
  // const [userId, setUserId] = useState('')

  // const logout = () => {
  //   liff.logout()
  //   window.location.reload()
  // }

  const initLine = () => {
    liff.init(
      { liffId: '1656614868-YEEVP66L' },
      () => {
        if (liff.isLoggedIn()) {
          runApp()
        } else {
          liff.login()
        }
      },
      (err) => console.error(err)
    )
  }


  const runApp = () => {
    const idToken = liff.getIDToken()
    setIdToken(idToken)
    liff
      .getProfile()
      .then((profile) => {

        const data = {
          userId: profile.userId,
          status: 'Admin',
          imageUrl: profile.pictureUrl,
          userName: profile.displayName,
        }

        sendToken(data).then(response => Cookies.set('access-token',response.data['token'], { expires: 7 }))
        setTimeout(() => {
          window.location.href = '/Dashboard'
        }, 3000);
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    initLine()
  }, [])

  return (
    <Fragment></Fragment>
    // <div className="App">
    //   <header className="App-header">
    //     <div style={{ textAlign: 'center' }}>
    //       <h1>React with LINE Login test bot1</h1>
    //       <hr />
    //       <img src={pictureUrl} width="300px" height="300px" />
    //       <p
    //         style={{
    //           textAlign: 'left',
    //           marginLeft: '20%',
    //           marginRight: '20%',
    //           wordBreak: 'break-all',
    //         }}
    //       >
    //         <b>id tokennnnn: </b> {idToken}
    //       </p>
    //       <p
    //         style={{
    //           textAlign: 'left',
    //           marginLeft: '20%',
    //           marginRight: '20%',
    //           wordBreak: 'break-all',
    //         }}
    //       >
    //         <b>display name: </b> {displayName}
    //       </p>
    //       <p
    //         style={{
    //           textAlign: 'left',
    //           marginLeft: '20%',
    //           marginRight: '20%',
    //           wordBreak: 'break-all',
    //         }}
    //       >
    //         <b>status message: </b> {statusMessage}
    //       </p>
    //       <p
    //         style={{
    //           textAlign: 'left',
    //           marginLeft: '20%',
    //           marginRight: '20%',
    //           wordBreak: 'break-all',
    //         }}
    //       >
    //         <b>user id: </b> {userId}
    //       </p>

    //       <button
    //         onClick={() => logout()}
    //         style={{ width: '100%', height: 30 }}
    //       >
    //         Logout
    //       </button>
    //     </div>
    //   </header>
    // </div>
  )
}

export default App
