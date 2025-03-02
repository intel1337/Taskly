# Taskly

### MONGODB IS EXPERIMENTAL AND MEANT TO BE USED ON WINDOWS

todo-list-spa/
│── public/           
│   ├── index.html                # Main HTML file
│   ├── styles.css                # Styles for the application
│   ├── App.js                    # Main application logic
│── src/
│   ├── components/                # UI Components
│   │   ├── Components.js          # Main components logic
│   │   ├── Form.js                # Form handling components
│   │   ├── Task.js                # Task related components
│   ├── services/                  # Data Management
│   │   ├── db/                    # Database services
│   │   │   ├── Local.js           # Local storage management
│   │   │   ├── mongo.mjs          # MongoDB connection
│   │   │   ├── mongoServices.js   # MongoDB service functions
│   │   │   ├── mongoController.js # MongoDB controller logic
│   │   ├── api.js                 # API service if using backend
│   ├── utils/                     # Helper functions
│── server/                        # Backend (if needed)
│   ├── server.js                  # Express.js or FastAPI backend
│── package.json                   # Dependencies
│── README.md                      # Documentation
│── .env                           # Environment variables
