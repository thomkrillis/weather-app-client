# weather-app-client
Web client to interact with weather data

Consumes data via [weather-app-server](https://github.com/thomkrillis/weather-app-server)

## Requirements
- Yarn or npm

## Next Steps for Production-Ready
- [ ] Linting
- [ ] More extensive testing
- [ ] Fix CSS on results page for mobile
- [ ] CI/CD
- [ ] Containerization
- [ ] Documentation on redux store, css conventions
- [ ] Refactor shared components to be state-agnostic (no selectors), only page components should access redux data
- [ ] Type-ahead and Google Places integration for more structured, consistent, and reliable user input
- [ ] Additional weather data, e.g. forecasts

## Setup
1. Clone the repo
1. From the root directory run `yarn install`
1. Create a `.env` file in the root directory and add `PORT=3001` (defaults to 3000 which conflicts with the server)
1. Run `yarn start` to start the application

## TODO
- [x] Wire up to Node API
- [x] Replace weather store
- [x] Render out weather data

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
