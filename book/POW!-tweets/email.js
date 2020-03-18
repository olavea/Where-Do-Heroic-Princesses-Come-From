  return (
    <>
      <Paper component="form" onSubmit={handleSubmit}>
        {variant === "signup" && (
          <TextField
            id="email"
            label="Email"
            name="email"
            placeholder="unicorn@usepow.app"
            value={state.email}
            onChange={handleChange("email")}
          />
        )}
        <Button
          className={classes.submit}
          disabled={isAuthPending || isPending || !!user}
          type="submit"
        >
          {variant === "signup" ? "Create account" : "Log In"}
        </Button>
      </Paper>
    </>
  );


// old

{variant === "signup" ? (
  <TextField
  ...
    label="Email"
  ...
    />
  ) : (
    "current-email"
)}
