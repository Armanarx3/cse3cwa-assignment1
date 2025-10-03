CSE3CWA - HTML5 Component Generator
This project is the first assignment for the Cloud-Based Web Applications unit. It is a Next.js application built to generate self-contained HTML5 components, specifically a "Tabs" component, which can be easily embedded into a Moodle LMS page.

The application allows a user to dynamically build a set of tabs, customize their content, and generate the corresponding HTML, CSS, and JavaScript code.

✨ Features Implemented
This project successfully meets all the requirements outlined in the assignment brief and grading criteria:

- Dynamic Tabs Generator:

    - Users can add and remove tabs, with a maximum limit of 15.

    - The title and content of each tab are fully editable.

    - The state of the tabs is automatically saved to the browser's localStorage, so your work is never lost on a page refresh.

- HTML5 Code Generation:

    - A single button generates a complete, functional HTML file as a string.

    - The output uses only inline CSS for styling and contains no external dependencies or CSS classes, as per the requirements.

- Light & Dark Mode Theming:

    - A theme toggle allows users to switch between light and dark modes for better accessibility and user preference.

    - The chosen theme is saved in localStorage and persists across sessions.

- Responsive Navigation:

    - A functional hamburger menu provides navigation on smaller screens.

    - The menu icon includes a CSS transform animation when opened and closed.

- Standard UI Components:

    - Header: Includes the student number and main navigation.

    - Footer: Contains copyright information, student name, student number, and the current date.

    - About Page: A dedicated page with project and author details.

🛠️ Tech Stack
- Framework: Next.js (v14+) with App Router

- Language: TypeScript

- Styling: CSS Modules (with inline CSS for the generated output)

- State Management: React Hooks (useState, useEffect) & React Context API

🚀 Getting Started
Follow these instructions to get a local copy of the project up and running for development and testing purposes.

Prerequisites
You need to have Node.js (version 18.x or later) and npm installed on your machine.

Installation & Setup
1. Clone the repository:

git clone <your-repository-url>

2. Navigate to the project directory:

cd <repository-folder-name>

3. Install NPM packages:

npm install

4. Run the development server:

npm run dev

Open http://localhost:3000 with your browser to see the application.

👤 Author
Name: Stefanus Hendryan Widjaja

Student Number: 22081507
