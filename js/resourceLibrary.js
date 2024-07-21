// resourceLibrary.js

const resources = [
    // Competitive Programming
    { title: 'Codeforces', description: 'A popular platform for competitive programming contests.', link: 'https://codeforces.com/' },
    { title: 'LeetCode', description: 'A platform for practicing coding problems and preparing for technical interviews.', link: 'https://leetcode.com/' },
    { title: 'HackerRank', description: 'Offers a variety of coding challenges and competitions.', link: 'https://www.hackerrank.com/' },

    // Data Structures and Algorithms (DSA)
    { title: 'GeeksforGeeks', description: 'Comprehensive resource for data structures and algorithms.', link: 'https://www.geeksforgeeks.org/' },
    { title: 'Visualgo', description: 'Visualizations of data structures and algorithms.', link: 'https://visualgo.net/' },
    { title: 'AlgoExpert', description: 'A platform offering coding interview preparation with a focus on algorithms.', link: 'https://www.algoexpert.io/' },

    // Web Development
    { title: 'MDN Web Docs', description: 'Mozilla’s resource for web developers.', link: 'https://developer.mozilla.org/' },
    { title: 'freeCodeCamp', description: 'Offers free coding lessons and projects on web development.', link: 'https://www.freecodecamp.org/' },
    { title: 'W3Schools', description: 'Tutorials and references on web development technologies.', link: 'https://www.w3schools.com/' },

    // Data Science
    { title: 'Kaggle', description: 'A platform for data science competitions and datasets.', link: 'https://www.kaggle.com/' },
    { title: 'DataCamp', description: 'Courses on data science and analytics.', link: 'https://www.datacamp.com/' },
    { title: 'Towards Data Science', description: 'A medium publication sharing data science and AI knowledge.', link: 'https://towardsdatascience.com/' },

    // Machine Learning (ML) & Artificial Intelligence (AI)
    { title: 'Coursera - Machine Learning by Andrew Ng', description: 'A popular course on machine learning by Andrew Ng.', link: 'https://www.coursera.org/learn/machine-learning' },
    { title: 'Fast.ai', description: 'Practical deep learning courses and resources.', link: 'https://www.fast.ai/' },
    { title: 'Google AI', description: 'Resources and research on AI from Google.', link: 'https://ai.google/' },

    // Cybersecurity
    { title: 'OWASP', description: 'Open Web Application Security Project, providing free resources on web security.', link: 'https://owasp.org/' },
    { title: 'TryHackMe', description: 'An online platform for learning cybersecurity through hands-on exercises.', link: 'https://tryhackme.com/' },
    { title: 'Hack The Box', description: 'A platform offering cybersecurity challenges and training.', link: 'https://www.hackthebox.eu/' }
];

function displayResources() {
    const container = document.getElementById('resource-container');
    container.innerHTML = '';

    resources.forEach(resource => {
        const resourceDiv = document.createElement('div');
        resourceDiv.className = 'resource-item';
        resourceDiv.innerHTML = `
            <h3>${resource.title}</h3>
            <p>${resource.description}</p>
            <a href="${resource.link}" target="_blank">Learn More</a>
        `;
        container.appendChild(resourceDiv);
    });
}

function filterResources(query) {
    const filteredResources = resources.filter(resource =>
        resource.title.toLowerCase().includes(query.toLowerCase()) ||
        resource.description.toLowerCase().includes(query.toLowerCase())
    );
    const container = document.getElementById('resource-container');
    container.innerHTML = '';

    filteredResources.forEach(resource => {
        const resourceDiv = document.createElement('div');
        resourceDiv.className = 'resource-item';
        resourceDiv.innerHTML = `
            <h3>${resource.title}</h3>
            <p>${resource.description}</p>
            <a href="${resource.link}" target="_blank">Learn More</a>
        `;
        container.appendChild(resourceDiv);
    });
}

function toggleModal() {
    const modal = document.getElementById('choice-modal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('choice-modal').querySelector('.close').addEventListener('click', () => {
    document.getElementById('choice-modal').style.display = 'none';
});

document.getElementById('view-resources-btn').addEventListener('click', () => {
    document.getElementById('resource-library').classList.remove('hidden');
    document.querySelector('.add-resource').classList.add('hidden');
    document.getElementById('choice-modal').style.display = 'none';
    displayResources(); // Ensure resources are displayed
});

document.getElementById('add-resources-btn').addEventListener('click', () => {
    document.getElementById('resource-library').classList.add('hidden');
    document.querySelector('.add-resource').classList.remove('hidden');
    document.getElementById('choice-modal').style.display = 'none';
});

document.getElementById('search-bar').addEventListener('input', (e) => {
    filterResources(e.target.value);
});

document.getElementById('clear-button').addEventListener('click', () => {
    document.getElementById('search-bar').value = '';
    filterResources('');
});

document.getElementById('resource-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const link = document.getElementById('link').value;

    resources.push({ title, description, link });

    displayResources();
    e.target.reset();
});

window.onload = toggleModal;
