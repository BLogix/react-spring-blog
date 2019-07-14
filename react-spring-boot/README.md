#Marring React and Spring

## Build
When building for the first time you need to tell gradle to install it's yarn packages in your client app.
```text
./gradlew yarn_install
```
Then after that completes you can build the combo app by running the gradle build command.
```text
./gradlew build
```

Then after the build completes you can start the app wit the java -jar command. Once the jar is started successfully you can view the running app in your browser at localhost:8080
```text
java -jar <checkout_directory>/react-spring-blog/react-spring-boot/
```