# delicious-migration-to-modern-redux
A delicious app that shows dishes with their names. It is built with the "old" redux. The purpose of this training is to migrate the app to use the new redux-toolkit

Migrate tasty app to work with redux toolkit:

1. Remove redux/redux-devtools-extension/redux-thunk
2. Add redux toolkit package
3. Create a mealsApiSlice using RTK Query
4. Update the store to be configured the RTK way (Don’t forget the middleware)
5. Use the new store (update src/index.js)
6. Use the generated hook to retrieve the data, manage loading state and adjust code accordingly
7. Check out the network tab, verify that API calls are cached (Should be automatic, just see that it is happening)
