# Milk Project
Using [lite-server](https://github.com/johnpapa/lite-server) to build this project server, and the [lite-server](https://github.com/johnpapa/lite-server) will read index.html  bydefault, you can also change the default configuration by updating bs-config.json.

## Setup front-end DEV environment
### cd the project folder
### Install
* make sure you have `npm` installed.
* Install the dependencies.
```
npm install
```
### you can then start lite-server via:
```
npm start
```
And [lite-server](https://github.com/johnpapa/lite-server) is listening at `localhost: 3000` bydefault

## Subject
> Design a simple web site for smart phones and ipad which keeps records of the daily drink of a new born baby. It should:
- Allow user input how much milk the baby just drank
- The input box should have **4** digits limit
- Show the previous records in a list right below the **Milk History** when page reload.
- Should insert a record to the top position of the list below the **Milk History** when clicking **Save** button.
- Should delete all the records below the **Milk History** when clicking **Clear** button.
- Shows the summary of how much milk the baby has drunk to the right of **Total** label for the current day
- Use **localStorage** to storage all the records.

> Bonus: Using a Javascript MV* framework

## Mockup
iPad:

![iPad](mockup/IPAD.png)

iPhone:

![iPhone](mockup/IPHONElogo.png)
