# E-Learning App

This is a mobile application built with React Native and Expo, designed for online learning of the Code de la Route. The app is built with a backend server that provides RESTful API endpoints for CRUD operations on cours and lesson resources.

## Back-end

The back-end of the app includes a CRUD API for managing courses and lessons. The courses table includes columns for `theme`, `nbLessons`, `description`, `active`, `duration`, and `id`. The lessons table includes columns for `id`, `active`, `duration`, `description`, `title`, `percent`, `filename`, `theme`, `createdAt`, and `updatedAt`.

### Installation

To install and run the back-end of the app, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Start the server using `npm start`.

### API Endpoints

The following endpoints are available:

- `GET /cours`: Returns a list of all courses.
- `POST /cours`: Creates a new course.
- `PUT /cours/:theme`: Updates an existing course.
- `DELETE /cours/:theme`: Deletes a course.

- `GET /lesson`: Returns a list of all lessons.
- `POST /lesson`: Creates a new lesson.
- `PUT /lesson/:id`: Updates an existing lesson.
- `DELETE /lesson/:id`: Deletes a lesson.

## Front-end

The front-end of the app includes a user interface for viewing and interacting with courses and lessons. The interface allows users to browse courses and view lessons, including videos.

### Installation

To install and run the front-end of the app, follow these steps:

1. Clone the repository to `https://github.com/thamerh/e-learning-mobile-app.git`.
2. Install the required dependencies using `npm install`.
3. Start the Expo server using `npm start`.
4. Install the Expo app on your mobile device.
5. Scan the QR code provided by the Expo server using the Expo app on your mobile device.

### Usage

To use the app, follow these steps:

1. Open the app on your mobile device.
2. Browse the list of available courses.
3. Select a course to view the course details and available lessons.
4. Select a lesson to view the lesson details, including any associated videos.
5. Watch the video by clicking on the play button.
6. You can also view the written summary of the lesson by clicking on the "View Lesson Summary".

### Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue on the GitHub repository. If you would like to contribute code, please fork the repository and submit a pull request.

# secreen shot 

### courses secreen
![](https://github.com/thamerh/e-learning-mobile-app/blob/bd36052e0a275224120c5197ed89c120b7f7a347/SecreenShot/340456688_1730289047423943_4062556325124743558_n.jpg)
### Lesson secreen
![](https://github.com/thamerh/e-learning-mobile-app/blob/bd36052e0a275224120c5197ed89c120b7f7a347/SecreenShot/340295076_138191409042819_3407907018586420447_n.jpg)
### resume secreen
![](https://github.com/thamerh/e-learning-mobile-app/blob/bd36052e0a275224120c5197ed89c120b7f7a347/SecreenShot/338714724_981048779467595_7834162384808676466_n.jpg)
### vedio secreen
![](https://github.com/thamerh/e-learning-mobile-app/blob/bd36052e0a275224120c5197ed89c120b7f7a347/SecreenShot/338677894_935979517653928_8104990122738058581_n.jpg)




## Made By

- [@thamerh](https://github.com/thamerh)

