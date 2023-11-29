# The "React Task Manager application" is a simple task management system built with React. Here's a brief overview of its functionality:

- Task List: The application allows users to view a list of tasks. Each task is displayed with a custom-styled bullet point for visual appeal.

- Add Task: Users can navigate to the "Add Task" section, where they can input a new task. The application provides a button to add the task to the task list.

- Navigation: The header includes navigation links, allowing users to switch between the task list and the add task sections.

- Routing: React Router is used for navigation, enabling a single-page application (SPA) experience without full page reloads.

- Styling: The application is styled using CSS to improve the visual presentation, including different font colors for distinct sections and a centered layout for better aesthetics.

In summary, this React Task Manager serves as a basic demonstration of React concepts such as components, state management, routing, and styling. Users can view, add, and manage tasks within a single-page application. 


# Steps performed

Step 1: I have used Create React App to set up a new React project called react-task-manager and navigate into its directory.

Step 2: I installed the react-router-dom package to handle routing in our React application.

# Step 3: Create Components
Create several components in the src folder:

    TaskList.js: Display a list of tasks.
    AddTask.js: Allow users to add new tasks.
    Header.js: Header component for navigation.
    App.js: Main App component with routing.
    Each component has its specific functionality and is responsible for rendering a different part of the application.

# Step 4: Set Up Component Logic
App.js: The main component sets up routing using react-router-dom. It also manages the state of tasks and passes down functions to add tasks to child components.

TaskList.js: Displays a list of tasks using the received tasks prop.

AddTask.js: Allows users to input new tasks and triggers the addition of tasks via a callback prop (onAddTask).

Header.js: Displays a header with navigation links.

# Step 5: Create CSS Styles
Create a App.css file to style the components. The styles include styling for the header, navigation links, task list, and add task section.

# Step 6: Style Navigation Links and Task List
Update the CSS styles to add specific styling for navigation links and the task list. Adjust font colors, spacing, and left padding to improve the visual appearance.

# Step 7: Center the Task List
Center the task list within the container using flexbox in the CSS styles.

# Step 8: Add Different Font Colors
Apply different font colors to the task list and add task sections to create visual contrast.

# Step 9: Add Beautiful Bullet Points
Enhance the task list by removing default bullet points and adding custom bullet points using CSS pseudo-elements.

# Step 10: Run the app
Start the development server to run the React application and view it in your browser at http://localhost:3000.