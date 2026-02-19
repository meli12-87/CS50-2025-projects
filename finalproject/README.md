# To-Do List Chrome Extension

#### Video Demo: https://youtu.be/YOUR_VIDEO_URL_HERE

#### Description:

This project is a to-do list Chrome extension that I made as my final project for CS50x. I wanted to build something simple, useful, and realistic — something that people actually use in daily life. A to-do list felt like a good choice because it combines user interaction, logic, storage, and UI design, without being unnecessarily complicated.

The extension opens as a popup when you click its icon in the Chrome toolbar. From there, users can add tasks, complete them, edit them, delete them, and filter them based on their status: active and completed. Everything is saved automatically, so even if you close the browser or restart your computer, your tasks will still be there the next time you open the extension.

This project is built using HTML, CSS, and JavaScript only. I did not use any external libraries or frameworks. All the data is stored locally using Chrome’s storage system, which makes the extension fast, light and easy to use without an internet connection.

---

### Why I Built This Project

The main reason I chose this project was because I wanted to build something practical. I use to-do lists a lot myself, especially for school work, and I wanted to understand how these kinds of tools actually work behind the scenes.

I also wanted a project that would let me practice JavaScript properly, especially things like event listeners, DOM manipulation, and saving data. A Chrome extension was perfect for this because it feels like a real product, not just a simple webpage.

---

### How the Extension Works

When the extension opens, it loads any previously saved tasks from Chrome storage. These tasks are then displayed in a list. Each task has a circle icon, the task text, and action icons for editing and deleting.

Users can add a new task by typing in the input field and pressing Enter or clicking the add button. The task immediately appears in the list and is saved automatically.

Clicking on the circle or the task text marks the task as completed or uncompleted Or you can just double-click on the task!. Completed tasks are visually different so users can easily tell which tasks are done.

If the user wants to change a task, they can either click the edit icon next to the task text. it feels very natural and flexible. Tasks can also be deleted at any time using the trash icon.

At the bottom, there are filter options that allow users to view all tasks, only active tasks, or only completed tasks. There is also a button to clear all completed tasks at once.

---

### Features Included

This extension includes the following features:

- Clean and simple user interface with a brown color theme
- Adding tasks using the Enter key or a button
- Marking tasks as completed or active by clicking
- Editing tasks using an edit icon or double click
- Deleting tasks individually
- Filtering tasks (All / Active / Completed)
- Clearing all completed tasks
- Automatic saving using Chrome local storage
- A live counter showing how many tasks are left
- Responsive design that works on different screen sizes

I focused on making sure every feature actually works smoothly instead of adding unnecessary complexity.

---

### Files and What They Do

The project is split into a few files, each with a clear purpose:

- **manifest.json**  
  This file is required for any Chrome extension. It tells Chrome what the extension is, what permissions it needs and which file should be opened as the popup.

- **popup.html**  
  This file contains the structure of the extension. It defines the input field, task list, buttons, filters, and icons.

- **style.css**  
  This file handles the design of the extension. It controls the layout or colors, spacing, fonts, hover effects, and responsiveness. I chose a brown theme to make the extension feel calm and not too bright and kinda coffee themed.

- **script.js**  
  This is the main logic file. It handles adding tasks, deleting them, editing them, marking them as completed, filtering tasks, updating the counter, and saving/loading tasks from storage.

---

### Design Choices I Made

One important decision was using Chrome’s local storage instead of an online database. Since this extension is meant for personal use, local storage made the most sense. It keeps everything simple and works even without an internet connection.

I also decided to make the UI minimal. I didn’t want too many buttons or colors. The goal was to make something that feels easy to use and not overwhelming.

Allowing task saving through both an icon and double-click was another intentional choice. Different users interact differently, so having multiple ways to do the same thing improves usability!!!.

---

### What I Learned

Working on this project helped me understand JavaScript sooo much better, especially how events work and how to update the page dynamically. I also learned how Chrome extensions are structured and how browser storage works.

This project also taught me how small details matter, especially in UI design. Even simple things like spacing, colors, and icons can make a big difference in how usable something feels.

---

### Final Thoughts

This to-do list extension is a small but complete project. It does exactly what it’s supposed to do and includes all the core features a basic to-do app should have. I’m happy with how it turned out and proud to submit it as my CS50x final project.

Building this project was challenging at times, but it was also fun and rewarding, and it helped me feel more confident in my programming skills.
