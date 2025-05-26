TS EAPCET College Explorer 🚀

Welcome to the TS EAPCET College Explorer, a sleek and intuitive web application designed to assist TS EAPCET 2025 aspirants in discovering engineering colleges in Telangana. Powered by HTML, CSS, and JavaScript, this tool leverages 2024 cutoff data to help students filter colleges based on their rank, category, desired course, college type, and district. With a modern, responsive UI, dark/light mode toggle, and CSV export functionality, it’s your go-to resource for planning your academic journey! 🎓
✨ Features

🔍 College Filtering: Narrow down colleges by branch, rank, category, college type, and district.
📊 Sortable Results: Interactive table with sortable columns for college name, branch, cutoff rank, district, college type, tuition fee, and phase.
🔄 Dynamic Dropdowns: Branch code options update automatically based on the selected branch name.
📥 Export to CSV: Download filtered results as a CSV file for offline analysis.
🌗 Dark/Light Mode: Switch between themes for a personalized experience.
⏳ Loading State: Visual feedback during data processing for a smooth UX.
📱 Responsive Design: Optimized for desktops, tablets, and mobile devices.
♿ Accessibility: ARIA labels, high-contrast themes, and keyboard navigation support.

📸 Screenshots
Desktop View

Mobile View

🛠️ Installation
Get the TS EAPCET College Explorer up and running in just a few steps:

Clone the Repository:
git clone https://github.com/Jacob-projects/TS_EAPCET_College_Explorer.git
cd TS_EAPCET_College_Explorer


Serve the Application:

Use a local server (e.g., Python’s HTTP server):python -m http.server 8000


Alternatively, use VS Code’s Live Server extension or a web server like XAMPP.


Open in Browser:

Navigate to http://localhost:8000 to access the application.


Ensure Data:

Verify that college_data.json is in the root directory. This file contains the 2024 TS EAPCET cutoff data required for the tool.



🎮 Usage

Select Filters:

Choose a branch name (e.g., Computer Science and Engineering).
Optionally pick a branch code, college type, and district.
Enter your EAPCET rank and select your category (e.g., OC_BOYS).


Explore Colleges:

Click Explore Colleges to view a sortable table of matching colleges based on your inputs.


Export Results:

Use the Export to CSV button to download the results for offline use.


Toggle Theme:

Click Toggle Theme in the header to switch between dark and light modes.


Reset Form:

Hit Reset to clear all inputs and start over.



📂 Project Structure
TS_EAPCET_College_Explorer/
├── index.html           # Main webpage with form and results
├── styles.css           # Styling with dark/light mode support
├── script.js            # JavaScript for data processing and interactivity
├── college_data.json    # 2024 TS EAPCET cutoff data
├── README.md            # Project documentation
├── LICENSE              # MIT License
└── assets/
    └── screenshots/     # Screenshots for documentation
        ├── desktop.png
        ├── mobile.png

📋 Data Format
The college_data.json file should follow this structure:
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

🤝 Contributing
We welcome contributions to make the TS EAPCET College Explorer even better! To contribute:

Fork the Repository.
Create a Branch:git checkout -b feature/your-feature


Commit Changes:git commit -m "Add your feature"


Push to GitHub:git push origin feature/your-feature


Open a Pull Request with a clear description of your changes.

Please ensure your code follows the project’s coding style and includes appropriate tests or documentation.
Ideas for Contributions

Add a search bar for quick college lookup.
Implement advanced filters (e.g., tuition fee range).
Integrate a backend for real-time data updates.
Enhance accessibility with additional ARIA attributes.
Add support for multiple languages.

📜 License
This project is licensed under the MIT License. See the LICENSE file for details.
⚠️ Disclaimer
The TS EAPCET College Explorer uses 2024 TS EAPCET cutoff data for informational purposes only. Actual 2025 cutoffs may vary significantly. Always verify information with official TSCHE sources, such as eapcet.tsche.ac.in, for the most accurate and up-to-date details.
📬 Contact
For questions, feedback, or suggestions, feel free to:

Open an issue on GitHub.
Reach out to the maintainer at [your-email@example.com] (replace with your actual email).

🚀 Future Enhancements

College Predictor Tool: Integrate a rank predictor based on historical data trends.
Interactive Map: Visualize college locations by district.
User Accounts: Save filter preferences for returning users.
API Integration: Fetch live cutoff data from official TSCHE sources.

Thank you for exploring the TS EAPCET College Explorer! Let’s make college planning easier for students across Telangana! 🌟
