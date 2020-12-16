import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Image,
  Card,
  Button,
  Mask,
  IconButton,
} from "gestalt";

import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

const BrewComponent = ({ match }) => {
  const [brews, setBrews] = useState([]);
  const [brand, setBrand] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (brew) => {
    const existsInCart = cartItems.find((item) => item._id === brew._id);

    if (existsInCart) {
      const updateCart = cartItems.map((item) => {
        if (item._id === brew._id) {
          const newItem = item.quantity + 1;
          return { ...item, quantity: newItem };
        } else {
          return item;
        }
      });
      setCartItems(updateCart);
    } else {
      const { _id, name, image, price } = brew;
      const newCartItem = {
        _id,
        name,
        image,
        price,
        quantity: 1,
      };
      const updatedCartItem = cartItems.concat(...brew, newCartItem);

      setCartItems(updatedCartItem);
    }
  };

  const graph = async () => {
    try {
      const response = await strapi.request("POST", "/graphql", {
        data: {
          query: `query {
          brand(id: "${match.params.brandId}") {
            _id
            name
            brews {
              _id
              name
              image {
                url
              }
              price
            }
          }
        }`,
        },
      });
      setBrews(response.data.brand.brews);
      setBrand(response.data.brand.name);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    graph();
  }, []);
  return (
    <Box
      marginTop={4}
      display="flex"
      justifyContent="center"
      alignItems="start"
      style={{ flexWrap: "wrap-reverse" }}
    >
      {/* Brews Section */}
      <Box display="flex" direction="column" alignItems="center">
        {/* Brews Heading */}
        <Box margin={2}>
          <Heading color="orchid">{brand}</Heading>
        </Box>
        {/* Brews */}
        <Box
          wrap
          shape="rounded"
          display="flex"
          justifyContent="center"
          padding={4}
        >
          {brews.map((brew) => (
            <Box paddingY={4} margin={2} width={210} key={brew._id}>
              <Card
                image={
                  <Box height={250} width={200}>
                    <Image
                      fit="cover"
                      alt="Brand"
                      naturalHeight={1}
                      naturalWidth={1}
                      src={`${apiUrl}${brew.image.url}`}
                    />
                  </Box>
                }
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  direction="column"
                >
                  <Box marginBottom={2}>
                    <Text bold size="xl">
                      {brew.name}
                    </Text>
                  </Box>
                  <Text>{brew.description}</Text>
                  <Text color="orchid">${brew.price}</Text>
                  <Box marginTop={2}>
                    <Text bold size="xl">
                      <Button
                        onClick={() => addToCart(brew)}
                        color="blue"
                        text="Add to Cart"
                      />
                    </Text>
                  </Box>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
      {/* User Cart */}
      <Box alignSelf="end" marginTop={2} marginLeft={8}>
        <Mask shape="rounded" wash>
          <Box
            display="flex"
            direction="column"
            alignItems="center"
            padding={2}
          >
            {/* User Cart Heading */}
            <Heading align="center" size="md">
              Your Cart
            </Heading>
            <Text color="gray" italic>
              {cartItems.length} items selected
            </Text>

            {/* Cart Items */}
            {cartItems.map((item) => (
              <Box key={item._id} display="flex" alignItems="center">
                <Text>
                  {item.name} x {item.quantity} - $
                  {(item.quantity * item.price).toFixed(2)}
                </Text>
                <IconButton
                  accessibilityLabel="Delete Item"
                  icon="cancel"
                  size="sm"
                  iconColor="red"
                />
              </Box>
            ))}

            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              direction="column"
            >
              <Box margin={2}>
                {cartItems.length === 0 && (
                  <Text color="red">Please select some items</Text>
                )}
              </Box>
              <Text size="lg">Total: $3.99</Text>
              <Text>
                <Link to="/checkout">Checkout</Link>
              </Text>
            </Box>
          </Box>
        </Mask>
      </Box>
    </Box>
  );
};

export default BrewComponent;
