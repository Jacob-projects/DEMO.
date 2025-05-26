document.addEventListener('DOMContentLoaded', () => {
    let collegeData = [];

    // Load JSON data
    fetch('college_data.json')
        .then(response => response.json())
        .then(data => {
            collegeData = data.filter(item => item['Unnamed: 1'] && !item['Unnamed: 1'].startsWith('Disclaimer'));
            populateDropdowns();
            document.getElementById('college-form').addEventListener('submit', handleSubmit);
            document.getElementById('reset-button').addEventListener('click', resetForm);
            document.getElementById('branch-name').addEventListener('change', updateBranchCodes);
        })
        .catch(error => console.error('Error loading JSON:', error));

    function populateDropdowns() {
        const branchNames = [...new Set(collegeData.map(item => item['Unnamed: 8']))].sort();
        const collegeTypes = [...new Set(collegeData.map(item => item['Unnamed: 5']))].sort();
        const districts = [...new Set(collegeData.map(item => item['Unnamed: 3']))].sort();

        const branchNameSelect = document.getElementById('branch-name');
        branchNames.forEach(name => {
            if (name) {
                const option = document.createElement('option');
                option.value = name;
                option.textContent = name;
                branchNameSelect.appendChild(option);
            }
        });

        const collegeTypeSelect = document.getElementById('college-type');
        collegeTypes.forEach(type => {
            if (type) {
                const option = document.createElement('option');
                option.value = type;
                option.textContent = type;
                collegeTypeSelect.appendChild(option);
            }
        });

        const districtSelect = document.getElementById('district');
        districts.forEach(district => {
            if (district) {
                const option = document.createElement('option');
                option.value = district;
                option.textContent = district;
                districtSelect.appendChild(option);
            }
        });
    }

    function updateBranchCodes() {
        const branchName = document.getElementById('branch-name').value;
        const branchCodeSelect = document.getElementById('branch-code');
        branchCodeSelect.innerHTML = '<option value="">-- Select Branch Code (after Branch Name) --</option>';
        
        if (branchName) {
            const branchCodes = [...new Set(collegeData
                .filter(item => item['Unnamed: 8'] === branchName)
                .map(item => item['Unnamed: 7']))].sort();
            branchCodes.forEach(code => {
                if (code) {
                    const option = document.createElement('option');
                    option.value = code;
                    option.textContent = code;
                    branchCodeSelect.appendChild(option);
                }
            });
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        const branchName = document.getElementById('branch-name').value;
        const branchCode = document.getElementById('branch-code').value;
        const rank = parseInt(document.getElementById('rank').value);
        const category = document.getElementById('category').value;
        const collegeType = document.getElementById('college-type').value;
        const district = document.getElementById('district').value;

        if (!branchName || !rank || !category) {
            alert('Please fill in all required fields.');
            return;
        }

        if (rank < 1) {
            alert('Rank must be a positive integer.');
            return;
        }

        const filteredColleges = collegeData.filter(item => {
            if (!item['Unnamed: 8']) return false;
            if (branchName && item['Unnamed: 8'] !== branchName) return false;
            if (branchCode && item['Unnamed: 7'] !== branchCode) return false;
            if (collegeType && item['Unnamed: 5'] !== collegeType) return false;
            if (district && item['Unnamed: 3'] !== district) return false;
            const cutoff = item[category] ? parseInt(item[category]) : Infinity;
            return rank <= cutoff;
        });

        displayResults(filteredColleges);
    }

    function displayResults(colleges) {
        const resultsBody = document.getElementById('results-body');
        const resultsTable = document.getElementById('results-table');
        const noResults = document.getElementById('no-results');
        resultsBody.innerHTML = '';

        if (colleges.length === 0) {
            resultsTable.style.display = 'none';
            noResults.style.display = 'block';
            return;
        }

        noResults.style.display = 'none';
        resultsTable.style.display = 'table';

        colleges.forEach(college => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${college['Unnamed: 1']}</td>
                <td>${college['Unnamed: 8']} (${college['Unnamed: 7']})</td>
                <td>${college[document.getElementById('category').value] || 'N/A'}</td>
                <td>${college['Unnamed: 3']}</td>
                <td>${college['Unnamed: 5']}</td>
                <td>${college['Unnamed: 27']}</td>
                <td>${college['TGEAPCET-2024 LAST RANK STATEMENT FINAL PHASE'] || 'First Phase'}</td>
            `;
            resultsBody.appendChild(row);
        });

        // Add sorting functionality
        const headers = document.querySelectorAll('#results-table th');
        headers.forEach((header, index) => {
            header.addEventListener('click', () => sortTable(index));
        });
    }

    function sortTable(column) {
        const table = document.getElementById('results-table');
        const rows = Array.from(table.querySelectorAll('tbody tr'));
        const isNumeric = [2, 5].includes(column); // Cutoff Rank and Tuition Fee are numeric
        let ascending = table.querySelectorAll('th')[column].dataset.order !== 'asc';
        
        rows.sort((a, b) => {
            let aValue = a.children[column].textContent;
            let bValue = b.children[column].textContent;
            
            if (isNumeric) {
                aValue = aValue === 'N/A' ? Infinity : parseInt(aValue);
                bValue = bValue === 'N/A' ? Infinity : parseInt(bValue);
                return ascending ? aValue - bValue : bValue - aValue;
            } else {
                return ascending 
                    ? aValue.localeCompare(bValue)
                    : bValue.localeCompare(aValue);
            }
        });

        table.querySelectorAll('th').forEach(th => th.dataset.order = '');
        table.querySelectorAll('th')[column].dataset.order = ascending ? 'asc' : 'desc';
        
        const tbody = table.querySelector('tbody');
        tbody.innerHTML = '';
        rows.forEach(row => tbody.appendChild(row));
    }

    function resetForm() {
        document.getElementById('college-form').reset();
        document.getElementById('branch-code').innerHTML = '<option value="">-- Select Branch Code (after Branch Name) --</option>';
        document.getElementById('results-table').style.display = 'none';
        document.getElementById('no-results').style.display = 'block';
    }
});