// Core Logic

//=Plan how you’ll manage your posts (e.g., an array of post objects).
let blogPosts = [];

//DOM Element Selection: Get references to your form, input fields, error message elements, post display area, etc.
const blogForm = document.getElementById('blog-form');
const inputTitle = document.getElementById('title-input');
const inputPost = document.getElementById('blog-post');
const titleError = document.getElementById('title-error');
const postError = document.getElementById('post-error');
const blogList = document.getElementById('blog-list');

//Add an event listener to the form’s submit event.
blogForm.addEventListener('submit', function(event) {

    event.preventDefault(); //Prevent the default form submission 

    let titleText = inputTitle.value; // gets text from input
    let postText = inputPost.value;
    
    //Display custom error messages if invalid.
    if (titleText === "") {
        titleError.textContent = "Please enter a title"; // puts text inside span
        return;
````}

    if (postText === "") {
        postError.textContent = "Please enter a post";
        return;
    }
    });

//Load Posts from localStorage: On script load, check localStorage for existing posts. If found, parse them and render them on the page.
//Render Posts Function: Create a function that takes the array of posts and dynamically creates the HTML to display them. Each post should include its title, content, an “Edit” button, and a “Delete” button. Ensure new posts are added to the display without needing a page refresh.

//Handle New Post Form Submission
    //Validate the form inputs (title and content are required). 
    //If valid, create a new post object (e.g., with id, title, content, timestamp).
    //Add the new post to your local array of posts.
    //Save the updated array of posts to localStorage (remember to JSON.stringify).
    //Re-render the list of posts on the page.
    //Clear the form fields.

//Handle Delete Post
    //Use event delegation or add event listeners to “Delete” buttons.
    //When a “Delete” button is clicked, identify the post to be deleted (e.g., using a data attribute for the post ID).
    //Remove the post from your local array.
    //Update localStorage.
    //Re-render the posts.

//Handle Edit Post:
    //Add event listeners to “Edit” buttons.
    //When an “Edit” button is clicked, populate the form (or a dedicated edit form/modal) with the selected post’s title and content. You’ll need a way to track which post is being edited.
    //Modify the form submission logic (or create a separate update function) to update the existing post in your local array instead of creating a new one.
    //Update localStorage.
    //Re-render the posts.
//Utility Functions (Optional but Recommended): Consider helper functions for tasks like generating unique IDs, saving to localStorage, loading from localStorage, etc.