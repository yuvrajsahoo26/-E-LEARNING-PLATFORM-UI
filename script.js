function showPage(pageId) { 
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            }); 
            document.getElementById(pageId).classList.add('active'); 
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            }); 
            const activeLink = document.querySelector([`data-page=${pageId}`]);
            if (activeLink) {
                activeLink.classList.add('active');
            }
             
            const navLinks = document.querySelector('.nav-links');
            const hamburger = document.querySelector('.hamburger');
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        } 
        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            const hamburger = document.querySelector('.hamburger');
            
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        } 
        document.addEventListener('click', (e) => {
            const navLinks = document.querySelector('.nav-links');
            const hamburger = document.querySelector('.hamburger');
            
            if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }); 
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = link.getAttribute('data-page');
                showPage(pageId);
            });
        });
 
        let isPlaying = false;
        function toggleVideo() {
            const playBtn = document.querySelector('.play-btn');
            const videoPlaceholder = document.querySelector('.video-placeholder');
            
            if (!isPlaying) {
                playBtn.textContent = '⏸ Pause';
                videoPlaceholder.innerHTML = `
                    <iframe width="5600" height="400" src="https://www.youtube.com/embed/ajdRvxDWH4w?si=he8JHX-U-pZC84t9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                `;
                isPlaying = true;
            } else {
                playBtn.textContent = '▶ Play';
                videoPlaceholder.innerHTML = `
                    🎥 Video Player - "Introduction to JavaScript Variables"
                    <br><br>
                    <small>Click play to start learning</small>
                `;
                isPlaying = false;
            }
        }
         
        document.querySelectorAll('.lesson-item').forEach((item, index) => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.lesson-item').forEach(lesson => {
                    lesson.classList.remove('active');
                });
                item.classList.add('active');
                 
                const lessons = [
                    "Introduction to JavaScript Variables",
                    "Variables and Data Types",
                    "Functions and Scope",
                    "Arrays and Objects",
                    "Control Flow"
                ];
                
                const videoPlaceholder = document.querySelector('.video-placeholder');
                videoPlaceholder.innerHTML = `
                    🎥 Video Player - "${lessons[index]}"
                    <br><br>
                    <small>Click play to start learning</small>
                `;
                 
                document.querySelector('.play-btn').textContent = '▶ Play';
                isPlaying = false;
            });
        });
 
        setInterval(() => {
            const progressBars = document.querySelectorAll('.progress-fill');
            progressBars.forEach(bar => {
                const currentWidth = parseInt(bar.style.width);
                if (currentWidth < 100 && Math.random() > 0.98) {
                    bar.style.width = (currentWidth + 1) + '%';
                    const progressText = bar.parentElement.nextElementSibling;
                    if (progressText) {
                        progressText.textContent = (currentWidth + 1) + '% Complete';
                    }
                }
            });
        }, 5000);