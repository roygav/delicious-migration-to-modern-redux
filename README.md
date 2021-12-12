# delicious-migration-to-modern-redux

A delicious app that shows dishes with their names. It is built with the "old" redux. The purpose of this training is to migrate the app to use the new redux-toolkit

Migrate tasty app to work with redux toolkit:

1. Clone the delicious-migration-to-modern-redux repo, cd into tasty-redux folder, npm install and npm start. Make sure you are able to see and interact with the application
2. Remove redux/redux-devtools-extension/redux-thunk
3. Add redux toolkit package
4. Create a mealsApiSlice using RTK Query
5. Update the store to be configured the RTK way (Don’t forget the middleware)
6. Use the new store (update src/index.js)
7. Use the generated hook to retrieve the data, manage loading state and adjust code accordingly
8. Check out the network tab, verify that API calls are cached (Should be automatic, just see that it is happening)
