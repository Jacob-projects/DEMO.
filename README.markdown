# TS EAPCET College Explorer

A web-based tool to help TS EAPCET 2025 aspirants explore potential engineering colleges in Telangana based on their rank, category, desired course, and additional filters like college type and district. Built with HTML, CSS, and JavaScript, it processes 2024 cutoff data to provide an interactive, sortable results table. The application features a modern, responsive UI with dark/light mode support, CSV export, and accessibility considerations.

## Features
- **College Filtering**: Filter colleges by branch, rank, category, college type, and district.
- **Sortable Results**: Interactive table with columns for college name, branch, cutoff rank, district, college type, tuition fee, and phase, sortable by clicking headers.
- **Dynamic Dropdowns**: Branch code options update based on selected branch name.
- **Export to CSV**: Download filtered results as a CSV file for offline use.
- **Dark/Light Mode**: Toggle between themes for user preference.
- **Loading State**: Visual feedback during data processing.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Accessibility**: ARIA labels, high-contrast colors, and keyboard navigation support.

## Screenshots
### Desktop View
![Desktop View](assets/screenshots/desktop.png)

### Mobile View
![Mobile View](assets/screenshots/mobile.png)

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/TS-EAPCET-College-Explorer.git
   cd TS-EAPCET-College-Explorer
   ```
2. **Serve the Application**:
   - Use a local server (e.g., Python's HTTP server):
     ```bash
     python -m http.server 8000
     ```
   - Alternatively, use tools like VS Code's Live Server or a web server (e.g., XAMPP).
3. **Open in Browser**:
   - Navigate to `http://localhost:8000` to access the application.
4. **Ensure Data**:
   - Place `college_data.json` in the root directory. This file contains the 2024 TS EAPCET cutoff data.

## Usage
1. **Select Filters**:
   - Choose a branch name, optionally a branch code, your EAPCET rank, category, college type, and district.
2. **Explore Colleges**:
   - Click "Explore Colleges" to view filtered results in a sortable table.
3. **Export Results**:
   - Click "Export to CSV" to download the results table.
4. **Toggle Theme**:
   - Use the "Toggle Theme" button in the header to switch between dark and light modes.
5. **Reset Form**:
   - Click "Reset" to clear inputs and results.

## Project Structure
```
TS-EAPCET-College-Explorer/
├── index.html           # Main webpage
├── styles.css           # Styling with dark/light mode support
├── script.js            # JavaScript for data processing and interactivity
├── college_data.json    # Sample 2024 cutoff data
├── README.md            # Project documentation
├── LICENSE              # MIT License
└── assets/
    └── screenshots/     # Screenshots for README
        ├── desktop.png
        ├── mobile.png
```

## Data Format
The `college_data.json` should follow this structure (example):
```json
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
```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Disclaimer
This tool uses 2024 TS EAPCET cutoff data and is for informational purposes only. Actual 2025 cutoffs may vary. Always refer to official TSCHE notifications for accurate information.

## Contact
For questions or feedback, open an issue on GitHub or contact [your-email@example.com].