🎓 TS EAPCET College Explorer

Welcome to the TS EAPCET College Explorer, a modern web tool designed to empower TS EAPCET 2025 aspirants to discover engineering colleges in Telangana! 🌟 Built with HTML, CSS, and JavaScript, this app uses 2024 cutoff data to help you find colleges based on your rank, category, course, and more. With a sleek, responsive UI, dark/light mode toggle, and CSV export, it’s the perfect companion for planning your academic future! 🚀
✨ Key Features

🔍 Smart College Filtering: Search by branch, rank, category, college type, and district.
📊 Interactive Results: Sortable table with college name, branch, cutoff rank, district, type, tuition fee, and phase.
🔄 Dynamic Dropdowns: Branch codes auto-update based on your selected branch.
📥 Export to CSV: Save your results for offline analysis.
🌗 Dark/Light Mode: Switch themes for a personalized experience.
⏳ Loading Feedback: Smooth UX with loading indicators.
📱 Fully Responsive: Looks great on desktops, tablets, and phones.
♿ Accessible Design: ARIA labels, high-contrast colors, and keyboard-friendly navigation.

📸 Screenshots



Desktop View
Mobile View







🛠️ Getting Started
Follow these simple steps to run the TS EAPCET College Explorer locally:

Clone the Repository:
git clone https://github.com/Jacob-projects/TS_EAPCET_College_Explorer.git
cd TS_EAPCET_College_Explorer


Serve the Application:

Launch a local server with Python:python -m http.server 8000


Or use tools like VS Code’s Live Server or XAMPP.


Open in Browser:

Visit http://localhost:8000 to explore the app.


Add Data:

Ensure college_data.json is in the root directory with 2024 TS EAPCET cutoff data.



🎮 How to Use

Set Your Filters:

Pick a branch (e.g., Computer Science).
Optionally select a branch code, college type, or district.
Enter your EAPCET rank and category (e.g., OC_BOYS).


Find Colleges:

Click Explore Colleges to see a sortable table of matching colleges.


Save Results:

Hit Export to CSV to download your results.


Switch Themes:

Use the Toggle Theme button to switch between dark and light modes.


Start Over:

Click Reset to clear filters and results.



📂 Project Structure
TS_EAPCET_College_Explorer/
├── index.html           # Main webpage with form and results
├── styles.css           # Styling with dark/light mode support
├── script.js            # JavaScript for data processing and interactivity
├── college_data.json    # 2024 TS EAPCET cutoff data
├── README.md            # This awesome documentation
├── LICENSE              # MIT License
└── assets/
    └── screenshots/     # Screenshots for the README
        ├── desktop.png
        ├── mobile.png

📋 Data Format
The college_data.json file should look like this:
[
    {
        "Unnamed: 1": "College Name",
        "Unnamed: 3": "District",
        "Unnamed: 5": "College Type",
        "Unnamed: 7": "Branch Code",
        "Unnamed: 8": "Branch Name",
        "Unnamed: 27": "Tuition Fee",
        "OC_BOYS": "5000",
        "TGEAPCET-2024 LAST RANK STATEMENT FINAL PHASE": "Final Phase"
    },
    ...
]

🤝 Contribute to the Project
We’d love your help to make this tool even better! 💡 Here’s how to contribute:

Fork the Repository.
Create a Branch:git checkout -b feature/your-awesome-feature


Commit Changes:git commit -m "Add your awesome feature"


Push to GitHub:git push origin feature/your-awesome-feature


Submit a Pull Request with a clear description.

Ideas to Explore

🔎 Add a search bar for instant college lookup.
📈 Include advanced filters (e.g., tuition fee range).
🌍 Create an interactive map for college locations.
🔗 Integrate a backend for live cutoff data.
🌐 Add multi-language support.

Check out our Contributing Guidelines for more details (coming soon!).
📜 License
This project is proudly licensed under the MIT License. Feel free to use, modify, and share!
⚠️ Disclaimer
The TS EAPCET College Explorer uses 2024 TS EAPCET cutoff data for informational purposes only. Actual 2025 cutoffs may differ. Always check official TSCHE notifications for the latest details.
Citation: Telangana State Council of Higher Education. (2024). TS EAPCET Official Website. Retrieved from https://eapcet.tsche.ac.in.
📬 Get in Touch
Have questions or ideas? Let’s connect! 📩

GitHub Issues: Open an issue for bugs or suggestions.
Email: Reach out at [jacob@example.com] (replace with your email).

🚀 What’s Next?
We’re excited to expand the TS EAPCET College Explorer! Planned features include:

Rank Predictor: Estimate your rank based on past trends.
College Profiles: Detailed pages for each college.
User Accounts: Save your filter preferences.
Real-Time Data: Fetch live cutoffs via API.

Star the repo 🌟 to stay updated and join us in making college planning easier for Telangana students!

Built with ❤️ by Jacob-projectsHappy exploring, and best of luck with your TS EAPCET journey! 🎉
