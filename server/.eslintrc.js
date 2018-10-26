module.exports = {
    "root": true,
    "env": {
     "es6": true,
     "node": true,
     "browser": true
    },
    "extends": [ "airbnb", "plugin:import/warnings" ],
    "parserOptions": {
     "ecmaVersion": 6,
     "sourceType": "module",
     "ecmaFeatures": {
      "jsx": true
     }
    },
    "rules": {
        // windows linebreaks when not in production environment
        "linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"],
        "indent": ["error", 2]
    }
   };