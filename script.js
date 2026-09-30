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

    if (editPostId !== null) {
        updatePost(editPostId);
    } else addPost();

    });

//If valid, create a new post object (e.g., with id, title, content, timestamp).
function addPost () {
    const newPostId = blogPosts.reduce((maxId, post) => // .reduce() turns all elements of an array to a single value
        Math.max(maxId, post.id), 0) + 1;

    const post = {
        id: newPostId,
        title: inputTitle.value,
        content: inputPost.value
    }

    //Add the new post to your local array of posts.
    blogPosts.push(post);

    displayPosts();
};

// Create a function that takes the array of posts and dynamically creates the HTML to display them.
function displayPosts () {
    
    blogList.innerHTML = "";

    for (let post of blogPosts) {

        let postList = document.createElement('li');
        let postTitle = document.createElement('h3');
        let postContent = document.createElement('p');
        let editButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        postTitle.textContent = post.title;
        postContent.textContent = post.content;
        editButton.textContent = 'Edit';
        deleteButton.textContent = 'Delete';

        //Add event listeners to “Edit” buttons.
        editButton.addEventListener('click', function() {
            editPost(post.id);
        })

        // Use event delegation or add event listeners to “Delete” buttons.
        deleteButton.addEventListener('click', function() {
            deletePost(post.id); //When a “Delete” button is clicked, identify the post to be deleted 
        })

        postList.appendChild(postTitle);
        postList.appendChild(postContent);
        postList.appendChild(editButton);
        postList.appendChild(deleteButton);

        blogList.appendChild(postList);


    }
}

let editPostId = null; // Indicates a post is being edited, not created

function editPost(id) {
    const postToEdit = blogPosts.find(post => post.id === id); //finds first matching item, returns object itself

    editPostId = id;
    // User can change title/content
    inputTitle.value = postToEdit.title;
    inputPost.value = postToEdit.content;
}

function updatePost(id) {
    const postToUpdate = blogPosts.find(post => post.id === id);

    postToUpdate.title = inputTitle.value;
    postToUpdate.content = inputPost.value;
    
    //Re-render the posts.
    displayPosts();

    editPostId = null;
};

function deletePost(id) {
    //Remove the post from your local array.
    blogPosts = blogPosts.filter(post => post.id !== id); // Returns array with only objects that match the condition

    //Re-render the posts.
    displayPosts();

    }
//Load Posts from localStorage: On script load, check localStorage for existing posts. If found, parse them and render them on the page.
//Each post should include its title, content, an “Edit” button, and a “Delete” button. Ensure new posts are added to the display without needing a page refresh.

    //Save the updated array of posts to localStorage (remember to JSON.stringify).
    //Re-render the list of posts on the page.
    //Clear the form fields.
    
    //Update localStorage.
    
    //When an “Edit” button is clicked, populate the form (or a dedicated edit form/modal) with the selected post’s title and content. 
    //Modify the form submission logic (or create a separate update function) to update the existing post in your local array instead of creating a new one.
    //Update localStorage.
    
//Utility Functions (Optional but Recommended): Consider helper functions for tasks like generating unique IDs, saving to localStorage, loading from localStorage, etc.