See comment around line 66 in m.js
    /// 7.1 if statement

      // if our back end says "Error. Your new username is already in use."
          // setError to error
          // setSatus to idle


      // if our userbase back end says "No error. Your new username is good to go.
          // setError to false
          // setSatus to idle
          // and navigate back to /profile



    tiny tasks


    /// 7.2 Hva HENTER jeg her?

    Hva VENTER vi på nedenfor?


    From Dodds 27 Handle HTTP Errors PokePony.js

      if (status === "idle") {
    const idleStatus = "Submit a pokemon"
    return "Submit a pokemon"
  }

  if (status === "rejected") {
    return "oh nooo... that username is already in use"
  }

  if (status === "pending") {
    return "..."
  }
  if (status === "resolved") {
    return <pre>{JSON.stringify(pokemon, null, 2)}</pre>
  }
}
