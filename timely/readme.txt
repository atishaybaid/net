A chrome extension to show current date and time on the home screen or when user opens new tab,will also allow user
to set location.It will use some api servise for weather notification.
The app would be build using  Angularjs Framework and will be using twitter bootstrap for styling.




Screens

1)Home screen:-The home screen will show current time, current weather and will also show some weather icons.
2)Settings screen:-This screen allows user to change current location.




Code Flow
index.html loads all the files,as soon as app loads main controller is called.This main controller does basic 
things including uodating the timer every 1s.A weather service is injected into this controller.This weather service calls
the api which provides the forcasted data.This weather service uses the functionality of promises.The get url and set api key 
functions performs their respective task.

The setting controller uses the userSetting service, which saves and retrives user information from and to browsers session storage.







files
1)maifest.json:-https://developer.chrome.com/extensions/manifest
2)app.js->contains the module to be loaded,also routing logic is defined here.
3)mainCtrl.js->Complete logic of the app.
4)WeatherProvider.js->calls the wonderground.com api,with the url and fetch the data
5)settingCtrl->logic behind setting screen.
6)userSetting.js->saves and retrives user information from session storage.
7)home.html->View of home screen
8)settingScreen.html->View of setting screen.