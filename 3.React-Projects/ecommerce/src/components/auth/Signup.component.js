import React, { useState } from "react";
import { Container, Box, Button, Heading, Text, TextField } from "gestalt";
import { setToken } from "../../utils";
import ToastMessage from "../ToastMessage.component";
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);
const signupComponent = ({ history }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [toast, setToast] = useState({
    toast: false,
    toastMessage: "",
  });
  const [loading, setLoading] = useState(false);

  // add useForm later
  const handleChange = ({ event, value }) => {
    event.persist();
    setUser({ ...user, [event.target.name]: value });
  };

  const redirectUser = (path) => history.push(path);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, email, password } = user;

    if (isFormEmpty(user)) {
      showToast("Fill in all fields");
      return;
    }

    // Sign up user
    try {
      setLoading(true);

      const response = await strapi.register(username, email, password);

      setLoading(false);
      setToken(response.jwt);
      redirectUser("/");
    } catch (err) {
      setLoading(false);
      showToast(err.message);
    }
  };
  const isFormEmpty = ({ username, email, password }) => {
    return !username || !email || !password;
  };

  const showToast = (toastMessage) => {
    setToast({ toast: true, toastMessage });

    setTimeout(() => setToast({ toast: false, toastMessage: "" }), 5000);
  };

  return (
    <Container>
      <Box
        dangerouslySetInlineStyle={{
          __style: {
            backgroundColor: "#ebe2da",
          },
        }}
        margin={4}
        padding={4}
        shape="rounded"
        display="flex"
        justifyContent="center"
      >
        {/* Sign Up Form */}
        <form
          style={{
            display: "inlineBlock",
            textAlign: "center",
            maxWidth: 450,
          }}
          onSubmit={handleSubmit}
        >
          {/* Sign Up Form Heading */}
          <Box
            marginBottom={2}
            display="flex"
            direction="column"
            alignItems="center"
          >
            <Heading color="midnight">Let's Get Started</Heading>
            <Text italic color="orchid">
              Sign up to order some brews!
            </Text>
          </Box>
          {/* Username Input */}
          <TextField
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
          {/* Email Address Input */}
          <TextField
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />
          {/* Password Input */}
          <TextField
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <Button
            inline
            disabled={loading}
            color="blue"
            text="Submit"
            type="submit"
          />
        </form>
      </Box>
      <ToastMessage show={toast.toast} message={toast.toastMessage} />
    </Container>
  );
};

export default signupComponent;
