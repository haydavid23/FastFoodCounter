# Purpose


A fun and interactive web platform containing the caloric information of the top five (5) fast food chains to raise awareness of unhealthy eating and to promote an active lifestyle incoporating "gymless" workout routine.



### Technologies used:
- React js, Bootstrap, CSS, APIs, Python, Flask.

##### Cool Features:

Customized workout routine for each meal consumed.
Ability for the user to check-off completed workouts to burn calories.
Progress Bar that displays total calories consumed vs total calories burned.


## Future Additions

Monthly and Weekly views to help user track caloric consumption and workouts completed.
GIF link of each exercise to help user complete the exercise shown.
Show picture of meal seached on the typeahead.
Provide a healthier option for meals consumed.





### Styles
You can update the `styles/index.scss` or create new `.scss` files inside `styles/` and import them into your current scss or js files depending on your needs.

### Components
Add more files into your `./src/js/components` or styles folder as you need them and import them into your current files as needed.

### Views (Components)
Add more files into your `./src/js/views` and import them in `./src/js/layout.jsx`.

### Context
This boilerplate comes with a centralized general Context API. The file `./src/js/store/flux.js` has a base structure for the store, we encourage you to change it and adapt it to your needs.

React Context [docs](https://reactjs.org/docs/context.html)

The `Context.Provider` is already set, you can use the `Context.Consumer` to get the `store` and `actions` from the Context. Check `/views/demo.jsx` to see a demo.

## Publish your website!

This boilerplate is 100% compatible with the free github pages hosting.
To publish your website you need to push your code to your github repository and run the following command after:
```sh
$ npm run deploy
```
Note: You will need to [configure github pages for the branch gh-pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages)
