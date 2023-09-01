module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint"
    ],
    "settings": {
        "react": { "version": 'detect' }
    },
    "rules": {
        "semi": [ "error", "always" ],
        "react/react-in-jsx-scope": "off",
    }
}
