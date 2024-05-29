
function replaceProfilePictures() {
    const customImageURL = 'https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVybHxlbnwwfHwwfHx8MA%3D%3D';
  
    // Select all elements with the specified classes
    const profilePictures = document.querySelectorAll('.update-components-actor__avatar-image,.EntityPhoto-circle-2,.EntityPhoto-circle-3,ghost-person,.EntityPhoto-circle-0,.EntityPhoto-circle-5');
  
    // Loop through each profile picture element and replace its source with the custom image URL
    profilePictures.forEach(picture => {
        picture.src = customImageURL;
    });
}

// Call the function initially
replaceProfilePictures();

// Function to observe mutations on the document and replace profile pictures dynamically
function observeProfilePictures() {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.addedNodes.length) {
                replaceProfilePictures();
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Call the function to start observing mutations
observeProfilePictures();

