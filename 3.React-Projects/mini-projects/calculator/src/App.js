import "./App.css";
import Layout from "./components/layout/index";

import HPlogo from "./images/hp.png";

function App() {
  return (
    <Layout>
      <div class="calculator pt-4">
        <div class="calculator__outershell p-2 d-flex flex-column">
          <div class="calculator__inner">
            <div class="d-flex flex-row p-2">
              <p class="calculator__inner--title col">
                HP 20b Business Consultant
              </p>
              <img
                class="calculator__inner--logo img-fluid"
                src={HPlogo}
                alt=""
              />
            </div>
            <div
              class="calculator__inner--screen p-1 d-flex
                            flex-row"
            >
              <h1
                class="calculator__inner--entrybox p-1"
                id="entry-box"
                type="text"
                value=""
              >
                0.0
              </h1>
            </div>
            <div
              class="d-flex flex-row align-content-center
                            py-1 px-4"
            >
              <input class="btn col m-1" type="button" value="ac" />
              <input class="btn col m-1" type="button" value="+/-" />
              <input class="btn col m-1" type="button" value="%" />
              <input class="btn col m-1" type="button" value="/" />
            </div>
            <div
              class="d-flex flex-row align-content-center
                            py-1 px-4"
            >
              <input class="btn col m-1" type="button" value="7" />
              <input class="btn col m-1" type="button" value="8" />
              <input class="btn col m-1" type="button" value="9" />
              <input class="btn col m-1" type="button" value="*" />
            </div>
            <div
              class="d-flex flex-row align-content-center
                            py-1 px-4"
            >
              <input class="btn col m-1" type="button" value="4" />
              <input class="btn col m-1" type="button" value="5" />
              <input class="btn col m-1" type="button" value="6" />
              <input class="btn col m-1" type="button" value="-" />
            </div>
            <div
              class="d-flex flex-row align-content-center
                            py-1 px-4"
            >
              <input class="btn col m-1" type="button" value="1" />
              <input class="btn col m-1" type="button" value="2" />
              <input class="btn col m-1" type="button" value="3" />
              <input class="btn col m-1" type="button" value="+" />
            </div>
            <div
              class="d-flex flex-row align-content-center
                            py-1 px-4"
            >
              <input class="btn col-sm-6 m-1" type="button" value="0" />
              <input class="btn col m-1" type="button" value="." />
              <input class="btn col m-1" type="button" value="=" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
