 //access token
  // useEffect(() => {
  //   const authParameters = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     body:
  //       "grant_type=client_credentials&client_id=" +
  //       CLIENT_ID +
  //       "&client_secret=" +
  //       CLIENT_SECRET,
  //   };

  //   fetch("https://accounts.spotify.com/api/token", authParameters)
  //     .then((result) => result.json())
  //     .then((data) => setToken(data.access_token));
  // }, []);