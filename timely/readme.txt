A chrome extension to show current date and time on the home screen or when user opens new tab,will also allow user
to set location.It will use some api servise for weather notification.
The app would be build using  Angularjs Framework and will be using twitter bootstrap for styling


Screens

1)Home screen:-The home screen will show current time, current weather and will also show some weather icons.
2)Settings screen:-This screen allows user to change current location.



files
1)maifest.json:-https://developer.chrome.com/extensions/manifest
2)app.js->contains the module to be loaded.
3)mainCtrl.js->Complete logic of the app.
4)WeatherProvider.js->calls the wonderground.com api,with the url and fetch the data
