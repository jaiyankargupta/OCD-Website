document.addEventListener('DOMContentLoaded', () => {
    const choiceModal = document.getElementById('choice-modal');
    const viewResourcesBtn = document.getElementById('view-resources-btn');
    const addResourcesBtn = document.getElementById('add-resources-btn');
    const resourceLibrarySection = document.getElementById('resource-library');
    const addResourceSection = document.querySelector('.add-resource');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const resourceForm = document.getElementById('resource-form');
    const searchBar = document.getElementById('search-bar');
    const clearButton = document.getElementById('clear-button');
    const resourceContainer = document.getElementById('resource-container');

    const existingResources = [
        { title: 'Competitive Programming for Beginners', description: 'A guide to get started with competitive programming.', link: 'https://example.com/competitive-programming' },
        { title: 'Codeforces', description: 'Competitive programming platform for practice.', link: 'https://codeforces.com/' },
        { title: 'TopCoder', description: 'Online programming competitions and practice.', link: 'https://www.topcoder.com/' },
        { title: 'HackerRank', description: 'Practice programming and compete in coding challenges.', link: 'https://www.hackerrank.com/' },
        { title: 'LeetCode', description: 'Platform for coding practice and interviews.', link: 'https://leetcode.com/' },
        { title: 'AtCoder', description: 'Japanese competitive programming platform.', link: 'https://atcoder.jp/' },
        { title: 'SPOJ', description: 'Online Judge for practice and competitions.', link: 'https://www.spoj.com/' },
        { title: 'UVa Online Judge', description: 'Platform for programming competitions and practice.', link: 'https://onlinejudge.org/' },
        { title: 'Kattis', description: 'Online judge for programming problems.', link: 'https://open.kattis.com/' },
        { title: 'Project Euler', description: 'Mathematical problems requiring programming.', link: 'https://projecteuler.net/' },

        // Data Science
        { title: 'Coursera Data Science Specialization', description: 'Comprehensive data science course on Coursera.', link: 'https://www.coursera.org/specializations/jhu-data-science' },
        { title: 'Kaggle', description: 'Platform for data science competitions and datasets.', link: 'https://www.kaggle.com/' },
        { title: 'DataCamp', description: 'Interactive data science courses and tutorials.', link: 'https://www.datacamp.com/' },
        { title: 'Data Science Handbook', description: 'A guide to data science and machine learning.', link: 'https://www.oreilly.com/library/view/data-science/9781491901427/' },
        { title: 'Python for Data Analysis', description: 'Book for data analysis using Python.', link: 'https://www.oreilly.com/library/view/python-for/9781491957652/' },
        { title: 'Towards Data Science', description: 'Medium publication for data science articles.', link: 'https://towardsdatascience.com/' },
        { title: 'Analytics Vidhya', description: 'Data science resources and courses.', link: 'https://www.analyticsvidhya.com/' },
        { title: 'KDnuggets', description: 'Data science and machine learning news.', link: 'https://www.kdnuggets.com/' },
        { title: 'Data Science Central', description: 'Online resource for data science professionals.', link: 'https://www.datasciencecentral.com/' },
        { title: 'Google Data Science Blog', description: 'Google’s blog for data science insights.', link: 'https://ai.googleblog.com/' },

        // Machine Learning
        { title: 'Deep Learning Specialization by Andrew Ng', description: 'Specialization on Coursera for deep learning.', link: 'https://www.coursera.org/specializations/deep-learning' },
        { title: 'Fast.ai', description: 'Practical deep learning courses.', link: 'https://www.fast.ai/' },
        { title: 'Machine Learning Mastery', description: 'Blog with tutorials on machine learning.', link: 'https://machinelearningmastery.com/' },
        { title: 'MIT OpenCourseWare - Machine Learning', description: 'MIT’s machine learning course materials.', link: 'https://ocw.mit.edu/courses/media-arts-and-sciences/mas-s62-machine-learning-spring-2016/' },
        { title: 'Data Science Handbook', description: 'A guide to data science and machine learning.', link: 'https://www.oreilly.com/library/view/data-science/9781491901427/' },
        { title: 'Google AI Blog', description: 'Blog with updates and research from Google AI.', link: 'https://ai.googleblog.com/' },
        { title: 'Stanford Online - Machine Learning', description: 'Stanford’s machine learning course.', link: 'https://www.coursera.org/learn/machine-learning' },
        { title: 'Udacity Machine Learning Nanodegree', description: 'Comprehensive nanodegree program for machine learning.', link: 'https://www.udacity.com/course/machine-learning-engineer-nanodegree--nd009' },
        { title: 'Kaggle - Machine Learning', description: 'Competitions and resources for machine learning.', link: 'https://www.kaggle.com/learn/machine-learning' },
        { title: 'OpenAI', description: 'Research and updates from OpenAI.', link: 'https://www.openai.com/research' },

        // Cybersecurity
        { title: 'Cybrary', description: 'Free online cybersecurity training.', link: 'https://www.cybrary.it/' },
        { title: 'Krebs on Security', description: 'Blog with updates on cybersecurity.', link: 'https://krebsonsecurity.com/' },
        { title: 'Security+ Certification Study Guide', description: 'Guide for CompTIA Security+ certification.', link: 'https://www.amazon.com/CompTIA-Security-Study-Guide-Exam/dp/1119823214' },
        { title: 'OWASP', description: 'Open Web Application Security Project resources.', link: 'https://owasp.org/' },
        { title: 'HackerOne', description: 'Platform for vulnerability coordination and bug bounty.', link: 'https://www.hackerone.com/' },
        { title: 'SANS Institute', description: 'Cybersecurity training and certifications.', link: 'https://www.sans.org/' },
        { title: 'EC-Council', description: 'Certifications and training for cybersecurity.', link: 'https://www.eccouncil.org/' },
        { title: 'Exploit Database', description: 'Vulnerability database and exploit code.', link: 'https://www.exploit-db.com/' },
        { title: 'Dark Reading', description: 'Cybersecurity news and information.', link: 'https://www.darkreading.com/' },
        { title: 'The Hacker News', description: 'Information security news and updates.', link: 'https://thehackernews.com/' },

        // Web Development
        { title: 'MDN Web Docs', description: 'Comprehensive documentation for web developers.', link: 'https://developer.mozilla.org/' },
        { title: 'W3Schools', description: 'Web development tutorials and references.', link: 'https://www.w3schools.com/' },
        { title: 'FreeCodeCamp', description: 'Free coding tutorials and projects.', link: 'https://www.freecodecamp.org/' },
        { title: 'Codecademy', description: 'Interactive coding lessons.', link: 'https://www.codecademy.com/' },
        { title: 'The Odin Project', description: 'Full-stack web development curriculum.', link: 'https://www.theodinproject.com/' },
        { title: 'Frontend Mentor', description: 'Frontend coding challenges for practice.', link: 'https://www.frontendmentor.io/' },
        { title: 'JavaScript.info', description: 'A comprehensive guide to JavaScript.', link: 'https://javascript.info/' },
        { title: 'CSS-Tricks', description: 'Tips and tricks for CSS and web design.', link: 'https://css-tricks.com/' },
        ];

        function renderResources(resources) {
            const resourceContainer = document.getElementById('resource-container');
            resourceContainer.innerHTML = '';
            
            resources.forEach(resource => {
                const resourceElement = document.createElement('div');
                resourceElement.className = 'resource';
                
                resourceElement.innerHTML = `
                    <h3>${resource.title}</h3>
                    <p>${resource.description}</p>
                    <a href="${resource.link}" target="_blank">Learn More</a>
                `;
                
                resourceContainer.appendChild(resourceElement);
            });
        }
        
    renderResources(existingResources);

    viewResourcesBtn.addEventListener('click', () => {
        choiceModal.style.display = 'none';
        resourceLibrarySection.classList.remove('hidden');
        addResourceSection.classList.add('hidden');
    });

    addResourcesBtn.addEventListener('click', () => {
        choiceModal.style.display = 'none';
        resourceLibrarySection.classList.add('hidden');
        addResourceSection.classList.remove('hidden');
    });

    resourceForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const link = document.getElementById('link').value;

        const newResource = { title, description, link };
        existingResources.push(newResource);
        renderResources(existingResources);

        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        document.getElementById('link').value = '';
        alert('Resource added successfully!');
    });

    clearButton.addEventListener('click', () => {
        searchBar.value = '';
        renderResources(existingResources);
    });

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredResources = existingResources.filter(resource =>
            resource.title.toLowerCase().includes(searchTerm) ||
            resource.description.toLowerCase().includes(searchTerm)
        );
        renderResources(filteredResources);
    });

    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    };

    const currentMode = localStorage.getItem('darkMode');
    if (currentMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', toggleDarkMode);
    // nav toggle for smaller screen
    const navToggle = document.getElementById('nav-toggle');
    const navLeft = document.querySelector('.nav-left');
    const navRight = document.querySelector('.nav-right');
    if (!navToggle) {
        console.error('Navbar toggle button not found');
        return;
    }
    navToggle.addEventListener('click', () => {
      navLeft.classList.toggle('active');
      navRight.classList.toggle('active');
    });
});