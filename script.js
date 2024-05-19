// Pagination

document.addEventListener("DOMContentLoaded", function() {
    const events = document.querySelectorAll('.event');
    const eventsPerPage = 12;
    let totalPages = Math.ceil(events.length / eventsPerPage);
    let currentPage = 1;

    function showPage(page) {
        const start = (page - 1) * eventsPerPage;
        const end = Math.min(start + eventsPerPage, events.length); // max q-ty pages =< 12

        events.forEach((event, index) => {
            if (index >= start && index < end) {
                event.style.display = 'block';
            } else {
                event.style.display = 'none';
            }
        });
    }

    function createPagination(totalPages, currentPage) {
        const paginationList = document.getElementById('pagination-list');
        paginationList.innerHTML = '';

        function createPageItem(page, text = page) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = "#";
            a.textContent = text;
            if (page === currentPage) {
                a.classList.add('active');
            }
            a.addEventListener('click', function(event) {
                event.preventDefault();
                currentPage = page;
                showPage(currentPage);
                createPagination(totalPages, currentPage);
            });
            li.appendChild(a);
            return li;
        }

        // Left arrow
        if (currentPage > 1) {
            paginationList.appendChild(createPageItem(currentPage - 1, '←'));
        }

        // first 3 pages
        for (let i = 1; i <= 3 && i <= totalPages; i++) {
            paginationList.appendChild(createPageItem(i));
        }

        // three dots
        if (currentPage > 4) {
            const dots = document.createElement('li');
            dots.textContent = '...';
            paginationList.appendChild(dots);
        }

        if (currentPage > 3 && currentPage < totalPages - 2) {
            paginationList.appendChild(createPageItem(currentPage));
        }

        if (currentPage < totalPages - 3) {
            const dots = document.createElement('li');
            dots.textContent = '...';
            paginationList.appendChild(dots);
        }

        // Last two pages
        for (let i = totalPages - 2; i <= totalPages && i > 0; i++) {
            paginationList.appendChild(createPageItem(i));
        }

        // right arrow
        if (currentPage < totalPages) {
            paginationList.appendChild(createPageItem(currentPage + 1, '→'));
        }
    }

    showPage(currentPage);
    createPagination(totalPages, currentPage);
});

// oooooooooooooooooooooooooooooooooooooooooo

