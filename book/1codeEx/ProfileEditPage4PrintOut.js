import React from "react"
import { useAuthActions } from "../auth"
import { navigate } from "gatsby"
const ProfileEditPage4PrintOut = () => {
  const { updateUser } = useAuthActions()
  function createEmail(event) {
                   1. Prevent:
                   that form from naughtily self-submitting
    event.preventDefault()

                   2. Get:
                   that email from the input
    const email = event.target.elements.emailInput.value

                   3. Listen for:  Mary making a move to prove Lizabeth a traitor

                   4. Escape:
                   Send that enemy mail to Daniel V.'s Userbase
    updateUser({ email: email })

                   5. Evade suspicion of involvement:
                   Send Princess Lizabeth back to .../profile
    navigate(`/profile`)
  }
  return (
    <form onSubmit={createEmail}>
      <label htmlFor="emailInput">
        <input id="emailInput" type="text" />
      </label>
      <button type="submit">Update</button>
    </form>
  )
}
export default ProfileEditPage4PrintOut
