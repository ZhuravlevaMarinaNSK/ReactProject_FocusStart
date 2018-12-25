module.exports = {
  env: {
    browser: true
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx"]
    }],
    'comma-dangle': ['error', 'never'],
    'jsx-a11y/label-has-for': [2, {
        "required": {
          "every": ["id"]
        }
      }

    ]
  }
};
