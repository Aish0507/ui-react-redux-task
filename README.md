# Amdocs UI Test (React Redux)

## Used typescript template to use TC feature like chaining operator, types, interface

## Used packges
1.  "react": "^18.1.0"
2.  "react-dom": "^18.1.0"
3.  "react-redux": "^8.0.1"
4. "redux-logger": "^3.0.6"
5.  "redux-thunk": "^2.4.1"
6.  "typescript": "^4.6.4"
7.  "axios": "^0.27.2"

## SCSS
### Added nested css classes

## Moke API call (using axios)
### Created a mock for RESTful APIs in order to retrieve the JSON when application is in development mode.

## Not used any Styling (HTML/CSS/JS) frameworks.

# Test flow

## On launching the application, user will land to landing page (i.e. landing.tsx)
   ### - landing page is responsive based on test input added my creativity (with custom SCSS)
   ### - landing page include two section. For Left side I have added dummy text(as logo). At right side top added button having user list feature. OnClick button page will be autoscroll(Used useRef Hook) to list view at botton and button text will get change from User List to Hide User List.
   ### - On double click of particular user grid modal popup will open with autofilled selected user details, user can update value if want. Onclick of submit button value will get upated(Directly in redux store) and pop up will be closed. User can see updated value in grid.
   ### - Added Redux logger to track each activity just for someone who dont have redux extension. Its just for development purpose to keep log.


