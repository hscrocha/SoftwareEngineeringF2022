# Software Engineering Fall 2022 Project Example

This is repo contains some code examples of a React Native mobile app. This is to help students currently in the Software Engineering course (Fall 2022).

## Warning

The app in this repo is not complete. Neither it is following good design decisions for a real-world mobile project. The purpose is to showcase some important concepts (e.g., testing), and simpler design (e.g., local database). 

Moreover, I tested the above project on MacOS deploying in a IOS simulator. Please adapt when necessary for Android and other OS. 

## Getting Started (Setup your Environment)

Check out the [Environment Setup](https://reactnative.dev/docs/environment-setup) in the React Native Docs. I recommend following that before anything else, so that you are certain that your environment is properly configured to run React Native apps.

## After Downloading the Repo

Clone the repo, first you need to install the dependent packages with the command:
```
npm install
````

For MacOS, you need to also do 
```
npx pod-install
```

You will also need to "register" this app once by using the command: 
```
npm start
```

## How to Run

After all the above steps, you can use ```npm run ios``` or ```npm run android```

## Testing

The framework [Jest](https://jestjs.io/) is already configured when creating any Reactive Native app. To run the tests use the command ```npm test```.

To display the coverage report use the command ```npm test -- --coverage```. The extra dashes and space before --coverage is not a typo.

Carefull that when dealing with Databases, Remote Databases, and Remote Connections/Fetches, you will often need to mock these resources.

## Non-local Databases

If you want to be more serious about Mobile App development, you will have to use a non-local database. An online or cloud-based database will allow your app to "share" data among its instances.

Some suggestions for such databases that work with React Native:
- [Realm](https://realm.io/): Uses MongDB cloud server (which is free).
- [Firebase](https://firebase.google.com/): NoSQL database by Google. Also a free service.
- [DynamoDB](https://aws.amazon.com/dynamodb/): Amazon Web Service free* (but it will demand credit card info, even though it is "free").
- [AppWrite](https://appwrite.io/): free software as service back end functionalities, including a NoSQL database.


