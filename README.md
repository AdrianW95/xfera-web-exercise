# XferaCF fontend technical exercise
Welcome to the exercise! In this test, you are required to implement a self updating table that fetches data from an Express.js backend (also included in this repository) that will run locally on your machine.


## Specification
In this exercise you are presented with a rather common stripped-down version of an app created with the `npx create-react-app` command. It is your task to **implement a table that will show information** that will be fetched from a backend we also provide in the repository. The table must, as well, **self-update every 5 seconds**; that is, it must fetch the data periodically every 5 seconds until the app is closed.

### Backend's data structure
The data from the backend is structured as a `JSON` that has exactly one property called `coins`. It is structured as follows:
```
{
    "coins": [
        {
            "id": "id1", // string
            "name": "name1", // string
            "value": 10, // number
            "dateCreated": "2021-01-15" // string, parsable to Date
        },
        ...
    ]
}
```
The number of entries in the array will always be the same. However, every time you fetch the data, the `"value"` property of each one of the entries will most likely change.

You can check the data in the file `/expressjs-backend/data.json` (but **do not** modify it manually!).

### Backend's endpoints
The backend we provide has **only one endpoint**:

- `/getListEntries`:  This endpoint is configured to be called with a standard `GET` method. If everything goes right, it will return with a **code 200** and the data required to populate the table. In the rare case it fails, it will return its corresponding error code and no data will be fetched.

>**Note:** The backend is not intended to fail on purpose, so it is not required of you to treat any possible errors. It'd be a plus if you did - but please **do not focus on this**!

### The table
Each of the entries in the data fetched from the backend has **four properties**:

 - An `"id"` property, unique to each entry.
 - A `"name"` property, a string that provides a short name for each entry.
 - A `"value"` propery, a numerical value associated to each entry.
 - A `"dateCreated"` entry, a parsable date string value.

The table **must show, *at least*, the `"name"` and `"value"` properties** of each entry, but never the `"id"`. Therefore, it can look something like this:

|Coin name                      |Coin's current value           |
|-------------------------------|-------------------------------|
|TestCoin                       |255                            |
|OneCoin                        |138                            |
|...                            |...                            |

Optionally, you can also show the `"dateCreated"` property. Again, the table must update its rows as it gets different data from the backend.

## Steps to get the app running
In this section we will explain the necessary steps to follow in order to get the app running correctly.

1. Clone this repository to your machine. Then navigate to the repo's directory and run:

	`npm install` or `yarn install`
	
	This will install all the dependencies needed for the app to run as expected. We have taken the liberty to include the 	  Node.js library **axios**, in case you want to use it to fetch the data from the backend we provide.
	>**Note:** the usage of this library is in no manner mandatory as you are given freedom to fetch the data in any way you prefer.
	
2. Once the dependencies are installed, you will need to get the backend running before the React app. For this, you must run:

	`npm run start-backend` or `yarn start-backend`
	
	If done correctly, you will be prompted with the following message:
	```
	> xfera-technical-exercise@0.1.0 start-backend /<your directory>/xfera-technical-exercise
	> node ./expressjs-backend

	App is listening on port 5000
	```
	This indicates the backend is currently running on your machine and it will be listening to any requests on **port 5000**.

3. It is now time for you to run the React app. Open another tab in your terminal (or another terminal entirely) and run:

	`npm run start` or `yarn start`

Please mind that both the backend and the React app must be running simultaneously. Once all of the above is done, the app will be ready for development!

### Additional comments on the exercise

 - You are completely free to install additional libraries if you consider it to be necessary.
 - The usage of CSS preprocessors (such as SCSS) is 💯 allowed.
 - The addition of styling is not required, but considered a plus.
 - There is no need to overload your code with comments, but feel free to include some if you deem them necessary.
 - Unit testing for the app is not required, but if added it will be considered a plus. The app is already prepared for testing.
 - It is not required for the table's elements to be sortable. However, it will be a **great plus** if you implement that feature.

**Good luck!** 😄
