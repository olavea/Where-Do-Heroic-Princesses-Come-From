import React from "react"

import { useAuthActions } from "../auth"
import { navigate } from "gatsby"
import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  TextField,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "50rem",
    margin: "0 auto",
  },
  form: {
    margin: theme.spacing(3),
    padding: theme.spacing(3),
    maxWidth: "35em",
  },
  helperText: {
    padding: `0 ${theme.spacing(1)}`,
  },
  appBar: {
    borderTop: `4px solid ${theme.palette.primary.main}`,
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
  },
  toolbar: {
    width: "100%",
    maxWidth: "55rem",
    margin: "0 auto",
  },
  title: {
    flexGrow: 1,
  },
}))

function PokemonInfo({ pokemonName }) {
  const [status, setStatus] = React.useState("idle")
  const [pokemon, setPokemon] = React.useState(null)
  const [error, setError] = React.useState(null)
  const { updateUser } = useAuthActions()
  React.useEffect(() => {
    if (!pokemonName) {
      return
    }
    setStatus("pending")

    updateUser({ username: pokemonName }).then(
      pokemonData => {
        setStatus("resolved")
        setPokemon(pokemonData)
      },
      errorData => {
        setStatus("rejected")
        setError(errorData)
      }
    )
  }, [pokemonName])

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

const ProfileEditPOWnamePage2 = status => {
  const [pokemonName, setPokemonName] = React.useState("")
  const classes = useStyles()
  const { updateUser } = useAuthActions()

  const createNewPOWname = event => {
    event.preventDefault()
    const newUsername = event.target.elements.UsernameInput.value

    updateUser({ username: myNewPOWname })

    navigate(`/profile`)
  }
  function handleSubmit(event) {
    event.preventDefault()
    setPokemonName(event.target.elements.UsernameInput.value)
    updateUser({ username: myNewPOWname })
    navigate(`/profile`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemonName">Pokemon Name</label>
        <div>
          <input disabled={status === "resolved"} id="UsernameInput" />
          <button type="submit">Submit</button>
        </div>
      </form>
      <hr />
      <PokemonInfo pokemonName={pokemonName} />
    </div>
  )
}

export default ProfileEditPOWnamePage2
