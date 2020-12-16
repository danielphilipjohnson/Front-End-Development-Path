import React, { useEffect } from "react";
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

const BrewComponent = ({ match }) => {
  console.log(match.params.brandId);
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
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    graph();
  }, []);
  return <div>Brews</div>;
};

export default BrewComponent;
