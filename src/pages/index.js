import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {

  const [phoneNumber, setphoneNumber] = React.useState("")

  const identify = React.useCallback(()=>{
    window.rudderanalytics.identify(phoneNumber, {
      phoneNumber
    })
  },[phoneNumber])

  const test = ()=>{
    window.rudderanalytics.ready(() => {
      console.log("we are all set!!!")
    })
  }

  const track = React.useCallback(()=>{
    window.rudderanalytics.track(
      "visitWeb",
      {
      },
      () => {
        console.log("in track call")
      }
    )
  },[])
  
  return (
    <main style={pageStyles}>
      <div style={{border: '1px solid black', padding: 20, boxShadow: "-2px 2px 7px rgba(0, 0, 0, 0.49)"}}>
        <button onClick={test}>test</button>
        <h1>
          CXP tracker test
        </h1>

<h4 >Identify User</h4>
        <input value={phoneNumber} onChange={e=>setphoneNumber(e.target.value)} placeholder="input phoneNumber"/>
        <button onClick={identify}>Identify</button>


        <h4>Track Event</h4>
        
        <button onClick={track}>Track</button>

      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
