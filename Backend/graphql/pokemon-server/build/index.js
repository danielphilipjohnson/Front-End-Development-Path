module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/graphpack/config/index.js":
/*!************************************************!*\
  !*** ./node_modules/graphpack/config/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const cosmiconfig = __webpack_require__(/*! cosmiconfig */ "cosmiconfig");

const webpack = __webpack_require__(/*! webpack */ "webpack");

const defaultConfig = __webpack_require__(/*! ./webpack.config */ "./node_modules/graphpack/config/webpack.config.js");

const explorer = cosmiconfig('graphpack').search();

const loadServerConfig = async () => {
  const result = await explorer;
  const userConfig = result ? typeof result.config === 'function' ? result.config(defaultConfig.mode) : result.config : {};
  return {
    port: Number(process.env.PORT),
    ...userConfig.server
  };
};

const loadWebpackConfig = async () => {
  const result = await explorer;
  const userConfig = result ? typeof result.config === 'function' ? result.config(defaultConfig.mode) : result.config : {};

  if (typeof userConfig.webpack === 'function') {
    return userConfig.webpack({
      config: defaultConfig,
      webpack
    });
  }

  return { ...defaultConfig,
    ...userConfig.webpack
  };
};

exports.loadServerConfig = loadServerConfig;
exports.loadWebpackConfig = loadWebpackConfig;

/***/ }),

/***/ "./node_modules/graphpack/config/webpack.config.js":
/*!*********************************************************!*\
  !*** ./node_modules/graphpack/config/webpack.config.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const FriendlyErrorsWebpackPlugin = __webpack_require__(/*! friendly-errors-webpack-plugin */ "friendly-errors-webpack-plugin");

const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const webpack = __webpack_require__(/*! webpack */ "webpack");

const nodeExternals = __webpack_require__(/*! webpack-node-externals */ "webpack-node-externals");

const isDev = "development" !== 'production';
const isWebpack = typeof __webpack_require__.m === 'object';
const hasBabelRc = fs.existsSync(path.resolve('babel.config.js'));

if (hasBabelRc && !isWebpack) {
  console.info('🐠 Using babel.config.js defined in your app root');
}

module.exports = {
  devtool: 'source-map',
  entry: {
    // We take care of setting up entry file under lib/index.js
    index: ['graphpack']
  },
  // When bundling with Webpack for the backend you usually don't want to bundle
  // its node_modules dependencies. This creates an externals function that
  // ignores node_modules when bundling in Webpack.
  externals: [nodeExternals({
    whitelist: [/^graphpack$/]
  })],
  mode: isDev ? 'development' : 'production',
  module: {
    rules: [{
      test: /\.(gql|graphql)/,
      use: 'graphql-tag/loader'
    }, {
      test: /\.(js|ts)$/,
      use: [{
        loader: /*require.resolve*/(/*! babel-loader */ "babel-loader"),
        options: {
          babelrc: true,
          cacheDirectory: true,
          presets: hasBabelRc ? undefined : [/*require.resolve*/(/*! babel-preset-graphpack */ "babel-preset-graphpack")]
        }
      }]
    }, {
      test: /\.mjs$/,
      type: 'javascript/auto'
    }]
  },
  node: {
    __filename: true,
    __dirname: true
  },
  optimization: {
    noEmitOnErrors: true
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: path.join(process.cwd(), './build'),
    sourceMapFilename: '[name].map'
  },
  performance: {
    hints: false
  },
  plugins: [new webpack.optimize.LimitChunkCountPlugin({
    maxChunks: 1
  }), new webpack.EnvironmentPlugin({
    DEBUG: false,
    GRAPHPACK_SRC_DIR: path.resolve(process.cwd(), 'src'),
    NODE_ENV: 'development'
  }), new FriendlyErrorsWebpackPlugin({
    clearConsole: isDev
  })],
  resolve: {
    extensions: ['.ts', '.js']
  },
  stats: 'minimal',
  target: 'node'
};

/***/ }),

/***/ "./node_modules/graphpack/lib/server.js":
/*!**********************************************!*\
  !*** ./node_modules/graphpack/lib/server.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server */ "apollo-server");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _srcFiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./srcFiles */ "./node_modules/graphpack/lib/srcFiles.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./node_modules/graphpack/config/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_3__);





if (!(_srcFiles__WEBPACK_IMPORTED_MODULE_2__["resolvers"] && Object.keys(_srcFiles__WEBPACK_IMPORTED_MODULE_2__["resolvers"]).length > 0)) {
  throw Error(`Couldn't find any resolvers. Please add resolvers to your src/resolvers.js`);
}

const createServer = config => {
  const {
    applyMiddleware,
    port: serverPort,
    ...options
  } = config;
  const port = Number(process.env.PORT) || serverPort || 4000; // Pull out fields that are not relevant for the apollo server
  // Use apollo-server-express when middleware detected

  if (applyMiddleware && applyMiddleware.app && typeof applyMiddleware.app.listen === 'function') {
    const server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_1__["ApolloServer"](options);
    server.applyMiddleware(applyMiddleware);
    return applyMiddleware.app.listen({
      port
    }, () => console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`));
  } // Use apollo-server


  const server = new apollo_server__WEBPACK_IMPORTED_MODULE_0__["ApolloServer"](options);
  return server.listen({
    port
  }).then(({
    url
  }) => console.log(`🚀 Server ready at ${url}`));
};

const startServer = async () => {
  // Load server config from graphpack.config.js
  const config = await Object(_config__WEBPACK_IMPORTED_MODULE_3__["loadServerConfig"])();
  createServer({ ...config,
    context: _srcFiles__WEBPACK_IMPORTED_MODULE_2__["context"],
    resolvers: _srcFiles__WEBPACK_IMPORTED_MODULE_2__["resolvers"],
    typeDefs: _srcFiles__WEBPACK_IMPORTED_MODULE_2__["typeDefs"]
  });
};

startServer();

/***/ }),

/***/ "./node_modules/graphpack/lib/srcFiles.js":
/*!************************************************!*\
  !*** ./node_modules/graphpack/lib/srcFiles.js ***!
  \************************************************/
/*! exports provided: importFirst, context, resolvers, typeDefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importFirst", function() { return importFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "context", function() { return context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeDefs", function() { return typeDefs; });
const importFirst = req => req.keys().map(mod => req(mod).default || req(mod))[0]; // Optionally import modules

const context = importFirst(__webpack_require__("./src sync recursive ^\\.\\/(context|context\\/index)\\.(js|ts)$"));
const resolvers = importFirst(__webpack_require__("./src sync recursive ^\\.\\/(resolvers|resolvers\\/index)\\.(js|ts)$"));
const typeDefs = importFirst(__webpack_require__("./src sync recursive ^\\.\\/(schema|schema\\/index)\\.(gql|graphql|js|ts)$"));

/***/ }),

/***/ "./src sync recursive ^\\.\\/(context|context\\/index)\\.(js|ts)$":
/*!**********************************************************!*\
  !*** ./src sync ^\.\/(context|context\/index)\.(js|ts)$ ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src sync recursive ^\\.\\/(context|context\\/index)\\.(js|ts)$";

/***/ }),

/***/ "./src sync recursive ^\\.\\/(resolvers|resolvers\\/index)\\.(js|ts)$":
/*!**************************************************************!*\
  !*** ./src sync ^\.\/(resolvers|resolvers\/index)\.(js|ts)$ ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./resolvers.js": "./src/resolvers.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src sync recursive ^\\.\\/(resolvers|resolvers\\/index)\\.(js|ts)$";

/***/ }),

/***/ "./src sync recursive ^\\.\\/(schema|schema\\/index)\\.(gql|graphql|js|ts)$":
/*!********************************************************************!*\
  !*** ./src sync ^\.\/(schema|schema\/index)\.(gql|graphql|js|ts)$ ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./schema.graphql": "./src/schema.graphql"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src sync recursive ^\\.\\/(schema|schema\\/index)\\.(gql|graphql|js|ts)$";

/***/ }),

/***/ "./src/db.js":
/*!*******************!*\
  !*** ./src/db.js ***!
  \*******************/
/*! exports provided: pokemons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pokemons", function() { return pokemons; });
let pokemons = [{
  abilities: [{
    ability: {
      name: "overgrow",
      url: "https://pokeapi.co/api/v2/ability/65/"
    },
    is_hidden: false,
    slot: 1
  }, {
    ability: {
      name: "chlorophyll",
      url: "https://pokeapi.co/api/v2/ability/34/"
    },
    is_hidden: true,
    slot: 3
  }],
  base_experience: 64,
  forms: [{
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon-form/1/"
  }],
  game_indices: [{
    game_index: 153,
    version: {
      name: "red",
      url: "https://pokeapi.co/api/v2/version/1/"
    }
  }, {
    game_index: 153,
    version: {
      name: "blue",
      url: "https://pokeapi.co/api/v2/version/2/"
    }
  }, {
    game_index: 153,
    version: {
      name: "yellow",
      url: "https://pokeapi.co/api/v2/version/3/"
    }
  }, {
    game_index: 1,
    version: {
      name: "gold",
      url: "https://pokeapi.co/api/v2/version/4/"
    }
  }, {
    game_index: 1,
    version: {
      name: "silver",
      url: "https://pokeapi.co/api/v2/version/5/"
    }
  }, {
    game_index: 1,
    version: {
      name: "crystal",
      url: "https://pokeapi.co/api/v2/version/6/"
    }
  }, {
    game_index: 1,
    version: {
      name: "ruby",
      url: "https://pokeapi.co/api/v2/version/7/"
    }
  }, {
    game_index: 1,
    version: {
      name: "sapphire",
      url: "https://pokeapi.co/api/v2/version/8/"
    }
  }, {
    game_index: 1,
    version: {
      name: "emerald",
      url: "https://pokeapi.co/api/v2/version/9/"
    }
  }, {
    game_index: 1,
    version: {
      name: "firered",
      url: "https://pokeapi.co/api/v2/version/10/"
    }
  }, {
    game_index: 1,
    version: {
      name: "leafgreen",
      url: "https://pokeapi.co/api/v2/version/11/"
    }
  }, {
    game_index: 1,
    version: {
      name: "diamond",
      url: "https://pokeapi.co/api/v2/version/12/"
    }
  }, {
    game_index: 1,
    version: {
      name: "pearl",
      url: "https://pokeapi.co/api/v2/version/13/"
    }
  }, {
    game_index: 1,
    version: {
      name: "platinum",
      url: "https://pokeapi.co/api/v2/version/14/"
    }
  }, {
    game_index: 1,
    version: {
      name: "heartgold",
      url: "https://pokeapi.co/api/v2/version/15/"
    }
  }, {
    game_index: 1,
    version: {
      name: "soulsilver",
      url: "https://pokeapi.co/api/v2/version/16/"
    }
  }, {
    game_index: 1,
    version: {
      name: "black",
      url: "https://pokeapi.co/api/v2/version/17/"
    }
  }, {
    game_index: 1,
    version: {
      name: "white",
      url: "https://pokeapi.co/api/v2/version/18/"
    }
  }, {
    game_index: 1,
    version: {
      name: "black-2",
      url: "https://pokeapi.co/api/v2/version/21/"
    }
  }, {
    game_index: 1,
    version: {
      name: "white-2",
      url: "https://pokeapi.co/api/v2/version/22/"
    }
  }],
  height: 7,
  held_items: [],
  id: 1,
  is_default: true,
  location_area_encounters: "https://pokeapi.co/api/v2/pokemon/1/encounters",
  moves: [{
    move: {
      name: "razor-wind",
      url: "https://pokeapi.co/api/v2/move/13/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }]
  }, {
    move: {
      name: "swords-dance",
      url: "https://pokeapi.co/api/v2/move/14/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "red-blue",
        url: "https://pokeapi.co/api/v2/version-group/1/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version-group/2/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "cut",
      url: "https://pokeapi.co/api/v2/move/15/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "red-blue",
        url: "https://pokeapi.co/api/v2/version-group/1/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version-group/2/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }]
  }, {
    move: {
      name: "bind",
      url: "https://pokeapi.co/api/v2/move/20/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }]
  }, {
    move: {
      name: "vine-whip",
      url: "https://pokeapi.co/api/v2/move/22/"
    },
    version_group_details: [{
      level_learned_at: 13,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "red-blue",
        url: "https://pokeapi.co/api/v2/version-group/1/"
      }
    }, {
      level_learned_at: 13,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version-group/2/"
      }
    }, {
      level_learned_at: 10,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 10,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 10,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 10,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 10,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 9,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 9,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 9,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 9,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 10,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 10,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 9,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 9,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 9,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 7,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 9,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 9,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "headbutt",
      url: "https://pokeapi.co/api/v2/move/29/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }]
  }, {
    move: {
      name: "tackle",
      url: "https://pokeapi.co/api/v2/move/33/"
    },
    version_group_details: [{
      level_learned_at: 1,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "red-blue",
        url: "https://pokeapi.co/api/v2/version-group/1/"
      }
    }, {
      level_learned_at: 1,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version-group/2/"
      }
    }, {
      level_learned_at: 1,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 1,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 1,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 1,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 1,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 1,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 1,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 1,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 1,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 1,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 1,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 1,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 1,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 1,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 1,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 1,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "body-slam",
      url: "https://pokeapi.co/api/v2/move/34/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "red-blue",
        url: "https://pokeapi.co/api/v2/version-group/1/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version-group/2/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }]
  }, {
    move: {
      name: "take-down",
      url: "https://pokeapi.co/api/v2/move/36/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "red-blue",
        url: "https://pokeapi.co/api/v2/version-group/1/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version-group/2/"
      }
    }, {
      level_learned_at: 15,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 15,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 15,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 15,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 15,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 15,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 15,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 15,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 15,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "double-edge",
      url: "https://pokeapi.co/api/v2/move/38/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "red-blue",
        url: "https://pokeapi.co/api/v2/version-group/1/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version-group/2/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 27,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 27,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 27,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 27,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 27,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 27,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 27,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 27,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 27,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "growl",
      url: "https://pokeapi.co/api/v2/move/45/"
    },
    version_group_details: [{
      level_learned_at: 1,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "red-blue",
        url: "https://pokeapi.co/api/v2/version-group/1/"
      }
    }, {
      level_learned_at: 1,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version-group/2/"
      }
    }, {
      level_learned_at: 4,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 4,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 4,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 4,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 4,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 3,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 3,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 3,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 3,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 4,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 4,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 3,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 3,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 3,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 3,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 3,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "strength",
      url: "https://pokeapi.co/api/v2/move/70/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }]
  }, {
    move: {
      name: "mega-drain",
      url: "https://pokeapi.co/api/v2/move/72/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "red-blue",
        url: "https://pokeapi.co/api/v2/version-group/1/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version-group/2/"
      }
    }]
  }, {
    move: {
      name: "leech-seed",
      url: "https://pokeapi.co/api/v2/move/73/"
    },
    version_group_details: [{
      level_learned_at: 7,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "red-blue",
        url: "https://pokeapi.co/api/v2/version-group/1/"
      }
    }, {
      level_learned_at: 7,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version-group/2/"
      }
    }, {
      level_learned_at: 7,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 7,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 7,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 7,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 7,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 7,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 7,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 7,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 7,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 7,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 7,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 7,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 7,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 7,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 7,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "growth",
      url: "https://pokeapi.co/api/v2/move/74/"
    },
    version_group_details: [{
      level_learned_at: 34,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "red-blue",
        url: "https://pokeapi.co/api/v2/version-group/1/"
      }
    }, {
      level_learned_at: 34,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version-group/2/"
      }
    }, {
      level_learned_at: 32,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 32,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 32,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 32,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 32,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 25,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 25,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 25,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 25,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 32,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 32,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 25,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 25,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 25,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 25,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 25,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "razor-leaf",
      url: "https://pokeapi.co/api/v2/move/75/"
    },
    version_group_details: [{
      level_learned_at: 27,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "red-blue",
        url: "https://pokeapi.co/api/v2/version-group/1/"
      }
    }, {
      level_learned_at: 27,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version-group/2/"
      }
    }, {
      level_learned_at: 20,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 20,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 20,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 20,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 20,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 19,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 19,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 19,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 19,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 20,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 20,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 19,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 19,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 19,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 19,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 19,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "solar-beam",
      url: "https://pokeapi.co/api/v2/move/76/"
    },
    version_group_details: [{
      level_learned_at: 48,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "red-blue",
        url: "https://pokeapi.co/api/v2/version-group/1/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "red-blue",
        url: "https://pokeapi.co/api/v2/version-group/1/"
      }
    }, {
      level_learned_at: 48,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version-group/2/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version-group/2/"
      }
    }, {
      level_learned_at: 46,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 46,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 46,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 46,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 46,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 46,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 46,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "poison-powder",
      url: "https://pokeapi.co/api/v2/move/77/"
    },
    version_group_details: [{
      level_learned_at: 20,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "red-blue",
        url: "https://pokeapi.co/api/v2/version-group/1/"
      }
    }, {
      level_learned_at: 20,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version-group/2/"
      }
    }, {
      level_learned_at: 15,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 15,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 15,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 15,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 15,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 13,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 13,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 13,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 13,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 15,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 15,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 13,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 13,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 13,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 13,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 13,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "sleep-powder",
      url: "https://pokeapi.co/api/v2/move/79/"
    },
    version_group_details: [{
      level_learned_at: 41,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "red-blue",
        url: "https://pokeapi.co/api/v2/version-group/1/"
      }
    }, {
      level_learned_at: 41,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version-group/2/"
      }
    }, {
      level_learned_at: 15,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 15,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 15,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 15,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 15,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 13,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 13,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 13,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 13,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 15,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 15,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 13,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 13,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 13,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 13,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 13,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "petal-dance",
      url: "https://pokeapi.co/api/v2/move/80/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "string-shot",
      url: "https://pokeapi.co/api/v2/move/81/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }]
  }, {
    move: {
      name: "toxic",
      url: "https://pokeapi.co/api/v2/move/92/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "red-blue",
        url: "https://pokeapi.co/api/v2/version-group/1/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version-group/2/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "rage",
      url: "https://pokeapi.co/api/v2/move/99/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "red-blue",
        url: "https://pokeapi.co/api/v2/version-group/1/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version-group/2/"
      }
    }]
  }, {
    move: {
      name: "mimic",
      url: "https://pokeapi.co/api/v2/move/102/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "red-blue",
        url: "https://pokeapi.co/api/v2/version-group/1/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version-group/2/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }]
  }, {
    move: {
      name: "double-team",
      url: "https://pokeapi.co/api/v2/move/104/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "red-blue",
        url: "https://pokeapi.co/api/v2/version-group/1/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version-group/2/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "defense-curl",
      url: "https://pokeapi.co/api/v2/move/111/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }]
  }, {
    move: {
      name: "light-screen",
      url: "https://pokeapi.co/api/v2/move/113/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "reflect",
      url: "https://pokeapi.co/api/v2/move/115/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "red-blue",
        url: "https://pokeapi.co/api/v2/version-group/1/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version-group/2/"
      }
    }]
  }, {
    move: {
      name: "bide",
      url: "https://pokeapi.co/api/v2/move/117/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "red-blue",
        url: "https://pokeapi.co/api/v2/version-group/1/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version-group/2/"
      }
    }]
  }, {
    move: {
      name: "sludge",
      url: "https://pokeapi.co/api/v2/move/124/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "skull-bash",
      url: "https://pokeapi.co/api/v2/move/130/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "amnesia",
      url: "https://pokeapi.co/api/v2/move/133/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "flash",
      url: "https://pokeapi.co/api/v2/move/148/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }]
  }, {
    move: {
      name: "rest",
      url: "https://pokeapi.co/api/v2/move/156/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "red-blue",
        url: "https://pokeapi.co/api/v2/version-group/1/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version-group/2/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "substitute",
      url: "https://pokeapi.co/api/v2/move/164/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "red-blue",
        url: "https://pokeapi.co/api/v2/version-group/1/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version-group/2/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "snore",
      url: "https://pokeapi.co/api/v2/move/173/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }]
  }, {
    move: {
      name: "curse",
      url: "https://pokeapi.co/api/v2/move/174/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "protect",
      url: "https://pokeapi.co/api/v2/move/182/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "sludge-bomb",
      url: "https://pokeapi.co/api/v2/move/188/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "mud-slap",
      url: "https://pokeapi.co/api/v2/move/189/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }]
  }, {
    move: {
      name: "giga-drain",
      url: "https://pokeapi.co/api/v2/move/202/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "endure",
      url: "https://pokeapi.co/api/v2/move/203/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "charm",
      url: "https://pokeapi.co/api/v2/move/204/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "swagger",
      url: "https://pokeapi.co/api/v2/move/207/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "fury-cutter",
      url: "https://pokeapi.co/api/v2/move/210/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }]
  }, {
    move: {
      name: "attract",
      url: "https://pokeapi.co/api/v2/move/213/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "sleep-talk",
      url: "https://pokeapi.co/api/v2/move/214/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "return",
      url: "https://pokeapi.co/api/v2/move/216/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "frustration",
      url: "https://pokeapi.co/api/v2/move/218/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "safeguard",
      url: "https://pokeapi.co/api/v2/move/219/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "sweet-scent",
      url: "https://pokeapi.co/api/v2/move/230/"
    },
    version_group_details: [{
      level_learned_at: 25,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 25,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 25,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 25,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 25,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 21,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 21,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 21,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 21,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 25,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 25,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 21,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 21,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 21,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 21,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 21,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "synthesis",
      url: "https://pokeapi.co/api/v2/move/235/"
    },
    version_group_details: [{
      level_learned_at: 39,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 39,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 39,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 39,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 39,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 33,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 33,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 33,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 33,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 39,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 39,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 33,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 33,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 33,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 33,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 33,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "hidden-power",
      url: "https://pokeapi.co/api/v2/move/237/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "sunny-day",
      url: "https://pokeapi.co/api/v2/move/241/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "gold-silver",
        url: "https://pokeapi.co/api/v2/version-group/3/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version-group/4/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "rock-smash",
      url: "https://pokeapi.co/api/v2/move/249/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }]
  }, {
    move: {
      name: "facade",
      url: "https://pokeapi.co/api/v2/move/263/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "nature-power",
      url: "https://pokeapi.co/api/v2/move/267/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "ingrain",
      url: "https://pokeapi.co/api/v2/move/275/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "knock-off",
      url: "https://pokeapi.co/api/v2/move/282/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }]
  }, {
    move: {
      name: "secret-power",
      url: "https://pokeapi.co/api/v2/move/290/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }]
  }, {
    move: {
      name: "grass-whistle",
      url: "https://pokeapi.co/api/v2/move/320/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "bullet-seed",
      url: "https://pokeapi.co/api/v2/move/331/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "colosseum",
        url: "https://pokeapi.co/api/v2/version-group/12/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "xd",
        url: "https://pokeapi.co/api/v2/version-group/13/"
      }
    }]
  }, {
    move: {
      name: "magical-leaf",
      url: "https://pokeapi.co/api/v2/move/345/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "natural-gift",
      url: "https://pokeapi.co/api/v2/move/363/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }]
  }, {
    move: {
      name: "worry-seed",
      url: "https://pokeapi.co/api/v2/move/388/"
    },
    version_group_details: [{
      level_learned_at: 31,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 31,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 31,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 31,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 31,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 31,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 31,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 31,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 31,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "seed-bomb",
      url: "https://pokeapi.co/api/v2/move/402/"
    },
    version_group_details: [{
      level_learned_at: 37,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 37,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 37,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 37,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 37,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 37,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 37,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 37,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 37,
      move_learn_method: {
        name: "level-up",
        url: "https://pokeapi.co/api/v2/move-learn-method/1/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "energy-ball",
      url: "https://pokeapi.co/api/v2/move/412/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "leaf-storm",
      url: "https://pokeapi.co/api/v2/move/437/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "power-whip",
      url: "https://pokeapi.co/api/v2/move/438/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "captivate",
      url: "https://pokeapi.co/api/v2/move/445/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }]
  }, {
    move: {
      name: "grass-knot",
      url: "https://pokeapi.co/api/v2/move/447/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "venoshock",
      url: "https://pokeapi.co/api/v2/move/474/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "round",
      url: "https://pokeapi.co/api/v2/move/496/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "echoed-voice",
      url: "https://pokeapi.co/api/v2/move/497/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "grass-pledge",
      url: "https://pokeapi.co/api/v2/move/520/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "tutor",
        url: "https://pokeapi.co/api/v2/move-learn-method/3/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "work-up",
      url: "https://pokeapi.co/api/v2/move/526/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "grassy-terrain",
      url: "https://pokeapi.co/api/v2/move/580/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "egg",
        url: "https://pokeapi.co/api/v2/move-learn-method/2/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }, {
    move: {
      name: "confide",
      url: "https://pokeapi.co/api/v2/move/590/"
    },
    version_group_details: [{
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/"
      }
    }, {
      level_learned_at: 0,
      move_learn_method: {
        name: "machine",
        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/"
      }
    }]
  }],
  name: "bulbasaur",
  order: 1,
  species: {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon-species/1/"
  },
  sprites: {
    back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
    back_female: null,
    back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
    back_shiny_female: null,
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    front_female: null,
    front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
    front_shiny_female: null,
    other: {
      dream_world: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
        front_female: null
      },
      "official-artwork": {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
      }
    },
    versions: {
      "generation-i": {
        "red-blue": {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/1.png",
          back_gray: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/1.png",
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/1.png",
          front_gray: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/1.png"
        },
        yellow: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/1.png",
          back_gray: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/1.png",
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/1.png",
          front_gray: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/1.png"
        }
      },
      "generation-ii": {
        crystal: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/1.png",
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/1.png",
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/1.png",
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/1.png"
        },
        gold: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/1.png",
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/1.png",
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/1.png",
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/1.png"
        },
        silver: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/1.png",
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/1.png",
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/1.png",
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/1.png"
        }
      },
      "generation-iii": {
        emerald: {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/1.png",
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/1.png"
        },
        "firered-leafgreen": {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/1.png",
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/1.png",
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/1.png",
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/1.png"
        },
        "ruby-sapphire": {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/1.png",
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/1.png",
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/1.png",
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/1.png"
        }
      },
      "generation-iv": {
        "diamond-pearl": {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/1.png",
          back_female: null,
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/1.png",
          back_shiny_female: null,
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/1.png",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/1.png",
          front_shiny_female: null
        },
        "heartgold-soulsilver": {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/1.png",
          back_female: null,
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/1.png",
          back_shiny_female: null,
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/1.png",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/1.png",
          front_shiny_female: null
        },
        platinum: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/1.png",
          back_female: null,
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/1.png",
          back_shiny_female: null,
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/1.png",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/1.png",
          front_shiny_female: null
        }
      },
      "generation-v": {
        "black-white": {
          animated: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/1.gif",
            back_female: null,
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/1.gif",
            back_shiny_female: null,
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/1.gif",
            front_shiny_female: null
          },
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/1.png",
          back_female: null,
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/1.png",
          back_shiny_female: null,
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/1.png",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/1.png",
          front_shiny_female: null
        }
      },
      "generation-vi": {
        "omegaruby-alphasapphire": {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/1.png",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/1.png",
          front_shiny_female: null
        },
        "x-y": {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/1.png",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/1.png",
          front_shiny_female: null
        }
      },
      "generation-vii": {
        icons: {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/1.png",
          front_female: null
        },
        "ultra-sun-ultra-moon": {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/1.png",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/1.png",
          front_shiny_female: null
        }
      },
      "generation-viii": {
        icons: {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/1.png",
          front_female: null
        }
      }
    }
  },
  stats: [{
    base_stat: 45,
    effort: 0,
    stat: {
      name: "hp",
      url: "https://pokeapi.co/api/v2/stat/1/"
    }
  }, {
    base_stat: 49,
    effort: 0,
    stat: {
      name: "attack",
      url: "https://pokeapi.co/api/v2/stat/2/"
    }
  }, {
    base_stat: 49,
    effort: 0,
    stat: {
      name: "defense",
      url: "https://pokeapi.co/api/v2/stat/3/"
    }
  }, {
    base_stat: 65,
    effort: 1,
    stat: {
      name: "special-attack",
      url: "https://pokeapi.co/api/v2/stat/4/"
    }
  }, {
    base_stat: 65,
    effort: 0,
    stat: {
      name: "special-defense",
      url: "https://pokeapi.co/api/v2/stat/5/"
    }
  }, {
    base_stat: 45,
    effort: 0,
    stat: {
      name: "speed",
      url: "https://pokeapi.co/api/v2/stat/6/"
    }
  }],
  types: [{
    slot: 1,
    type: {
      name: "grass",
      url: "https://pokeapi.co/api/v2/type/12/"
    }
  }, {
    slot: 2,
    type: {
      name: "poison",
      url: "https://pokeapi.co/api/v2/type/4/"
    }
  }],
  weight: 69
}];

/***/ }),

/***/ "./src/resolvers.js":
/*!**************************!*\
  !*** ./src/resolvers.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ "./src/db.js");

const resolvers = {
  Query: {
    hello: () => "world!",
    pokemon: (parent, {
      id
    }, context, info) => {
      return _db__WEBPACK_IMPORTED_MODULE_0__["pokemons"].find(pokemon => pokemon.id === id);
    },
    pokemonByName: (parent, {
      name
    }, context, info) => {
      return _db__WEBPACK_IMPORTED_MODULE_0__["pokemons"].find(pokemon => pokemon.name === name);
    },
    pokemons: (parent, args, context, info) => {
      return _db__WEBPACK_IMPORTED_MODULE_0__["pokemons"];
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (resolvers);

/***/ }),

/***/ "./src/schema.graphql":
/*!****************************!*\
  !*** ./src/schema.graphql ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"hello"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"pokemon"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pokemon"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"pokemonByName"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"name"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pokemon"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"pokemons"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Pokemon"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Ability"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"name"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"url"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Abilities"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"ability"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Ability"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"is_hidden"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"slot"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Forms"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"name"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"url"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Version"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"name"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"url"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"GameIndices"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"game_index"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"version"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Version"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Move"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"name"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"url"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"MoveLearnMethod"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"name"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"url"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"VersionGroup"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"name"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"url"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"VersionGroupDetails"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"level_learned_at"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"move_learn_method"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"MoveLearnMethod"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"version_group"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"VersionGroup"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Moves"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"move"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Move"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"version_group_details"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VersionGroupDetails"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Species"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"name"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"url"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"otherSprites"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"dream_world"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"DreamWorld"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"officialArtwork"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OfficialArtwork"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"DreamWorld"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"front_default"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"front_female"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"OfficialArtwork"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"front_default"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Sprites"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"back_default"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"back_female"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"back_shiny"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"back_shiny_female"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"front_default"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"front_female"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"front_shiny"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"front_shiny_female"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"other"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"otherSprites"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Stat"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"name"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"url"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Stats"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"base_stat"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"effort"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"stat"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Stat"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Type"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"name"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"url"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Types"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"slot"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"type"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Type"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Pokemon"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"abilities"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Abilities"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"base_experience"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"forms"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Forms"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"game_indices"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GameIndices"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"height"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"is_default"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"location_area_encounters"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"moves"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Moves"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"name"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"order"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"species"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Species"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"sprites"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Sprites"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"stats"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Stats"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"types"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Types"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"weight"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}]}],"loc":{"start":0,"end":1750}};
    doc.loc.source = {"body":"type Query {\n  hello: String\n  pokemon(id: Int): Pokemon\n  pokemonByName(name: String): Pokemon\n  pokemons: [Pokemon]\n}\n\ntype Ability {\n  name: String!\n  url: String!\n}\n\ntype Abilities {\n  ability: Ability\n  is_hidden: Boolean\n  slot: Int!\n}\n\ntype Forms {\n  name: String!\n  url: String!\n}\n\ntype Version {\n  name: String!\n  url: String!\n}\n\ntype GameIndices {\n  game_index: Int\n  version: Version\n}\n\ntype Move {\n  name: String!\n  url: String!\n}\n\ntype MoveLearnMethod {\n  name: String!\n  url: String!\n}\ntype VersionGroup {\n  name: String!\n  url: String!\n}\n\ntype VersionGroupDetails {\n  level_learned_at: Int\n  move_learn_method: MoveLearnMethod\n  version_group: VersionGroup\n}\n\ntype Moves {\n  move: Move\n  version_group_details: [VersionGroupDetails]\n}\n\ntype Species {\n  name: String!\n  url: String!\n}\n\ntype otherSprites {\n  dream_world: DreamWorld\n  officialArtwork: [OfficialArtwork]\n}\n\ntype DreamWorld {\n  front_default: String\n  front_female: String\n}\n\ntype OfficialArtwork {\n  front_default: String!\n}\n\ntype Sprites {\n  back_default: String\n  back_female: String\n  back_shiny: String\n  back_shiny_female: String\n  front_default: String\n  front_female: String\n  front_shiny: String\n  front_shiny_female: String\n  other: otherSprites\n}\n\ntype Stat {\n  name: String\n  url: String\n}\n\ntype Stats {\n  base_stat: Int\n  effort: Int\n  stat: Stat\n}\n\ntype Type {\n  name: String\n  url: String\n}\n\ntype Types {\n  slot: Int\n  type: Type\n}\n\ntype Pokemon {\n  abilities: [Abilities]\n  base_experience: Int\n  forms: [Forms]\n  game_indices: [GameIndices]\n  height: Int\n  id: ID!\n  is_default: Boolean\n  location_area_encounters: String\n  moves: [Moves]\n  name: String\n  order: Int\n  species: Species\n  sprites: Sprites\n  stats: [Stats]\n  types: [Types]\n  weight: Int\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi graphpack ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! graphpack */"./node_modules/graphpack/lib/server.js");


/***/ }),

/***/ "apollo-server":
/*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "babel-loader":
/*!*******************************!*\
  !*** external "babel-loader" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-loader");

/***/ }),

/***/ "babel-preset-graphpack":
/*!*****************************************!*\
  !*** external "babel-preset-graphpack" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-preset-graphpack");

/***/ }),

/***/ "cosmiconfig":
/*!******************************!*\
  !*** external "cosmiconfig" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cosmiconfig");

/***/ }),

/***/ "friendly-errors-webpack-plugin":
/*!*************************************************!*\
  !*** external "friendly-errors-webpack-plugin" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("friendly-errors-webpack-plugin");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),

/***/ "webpack-node-externals":
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ })

/******/ });
//# sourceMappingURL=index.map