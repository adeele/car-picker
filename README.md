# car-picker
Simple web app that allows a user to select their car from a directory of registered cars.

# Project installation and running
Install project dependencies: `npm install`.

Run project: `npm start`. Application runs on `localhost:8081`, and expects the server running on `localhost:8080`.

Build project: `npm run build`. Built application can be found in `dist` folder.

Run unit tests: `npm run test`.

# Main problem
The application allows user to find and choose his vehicle from set of vehicles existing on a server.
It provides a set of filters, so user can filter out unwanted search results, instead of scrolling the whole list of
vehicles.
It provides appropriate error message, in case the server is down, fetch failed 3 times for single request or there
are no vehicles found.

# Additional notes
1. I have chosen to use React as it was requested to think of this project as a real one, and it is the only production
dependency.
2. I have installed several development dependencies to make the application easy to build and run.
3. I have decided to call API 2 more times in case of getting error, as I imagined a situation that API may be busy but
return a result eventually. In case all 3 rejected calls, I assume the server is not available and ask user to try again
later.

# Assuming further development
1. I would install and use Redux to manage state easier, but in my opinion in a project this size it was not essential.
2. I would install and use Sass to simplify styles and make them more reusable, but there was no need for it since the
project styles comfortably suits into one file.
3. I would create more generic components assuming they can be reused in another part of the application.
4. I would add some kind of vehicles pagination or lazy loading to improve complexity, but I would expect the API to
handle it eventually.
5. I would change some HTML elements (`datalist`, `select`) from browser native into custom ones, so they can display
prettier.
6. I would make API url configurable.