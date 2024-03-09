function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}
function searchFunction() {
    var searchInput = document.getElementById('searchInput').value;
    var searchInputMain = document.getElementById('searchInputMain').value;
    fetchMovies(searchInput, 'moviesSection2');
    fetchMovies(searchInputMain, 'moviesSection2');
}


        
        
    


function showReviewForm() {
    var review = prompt('Enter your review:');
    if (review !== null && review !== "") {
        
        addReviewCard(review);
        alert('Review added successfully!');
    }
}

function toggleFavorite(icon) {
    icon.classList.toggle('active');
}

function addRating(starIndex) {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < starIndex) {
            star.classList.add('filled');
        } else {
            star.classList.remove('filled');
        }
    });
}

function addReviewCard(reviewContent) {
    const reviewSection = document.getElementById('reviewSection');
    const reviewCard = document.createElement('div');
    reviewCard.classList.add('review-card');
    reviewCard.innerHTML = `
    <p>${reviewContent}</p>
    <button class="delete-review-btn" onclick="deleteReview(this)">Delete</button>
    `;
reviewSection.appendChild(reviewCard);
}



function deleteReview(deleteButton) {
    const reviewCard = deleteButton.parentElement;
    reviewCard.remove();
}


