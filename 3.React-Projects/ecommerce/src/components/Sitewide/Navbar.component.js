import React from "react";
import { Box, Text, Heading, Image } from "gestalt";
import { NavLink } from "react-router-dom";
const NavbarComponent = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="around"
      height={70}
      color="navy"
      padding={1}
      shape="roundedBottom"
    >
      {/* Sign in link */}
      <NavLink activeClassName="active" to="/signin">
        <Text size="xl" color="white">
          Sign In
        </Text>
      </NavLink>
      {/* title and logo */}
      <NavLink activeClassName="active" exact to="/">
        <Box display="flex" alignItems="center">
          <Box margin={2} heading={30} width={30}>
            <Image
              alt="Luv Pub"
              src="./icons/logo.png"
              naturalHeight={1}
              naturalWidth={1}
            />
          </Box>
          <Heading size="xs" color="watermelon">
            Luv Pub
          </Heading>
        </Box>
      </NavLink>

      {/* Sign up link */}
      <NavLink activeClassName="active" to="/signup">
        <Text size="xl" color="white">
          Sign up
        </Text>
      </NavLink>
    </Box>
  );
};

export default NavbarComponent;
