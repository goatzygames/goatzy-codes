import { db } from './firebase-config'; // import Firestore
import { doc, updateDoc, increment, getDoc } from "firebase/firestore";

// This function will increment the view count
async function incrementViewCount(blogId) {
  const blogRef = doc(db, "views", blogId); // 'views' is the collection, and blogId is the document ID

  try {
    // Update the view count by incrementing it
    await updateDoc(blogRef, {
      count: increment(1), // Increment the 'count' field by 1
    });
    console.log(`View count for ${blogId} updated successfully!`);
  } catch (e) {
    console.error("Error updating view count: ", e);
  }
}

// This function will fetch and display the view count for a blog
async function displayViewCount(blogId) {
  const blogRef = doc(db, "views", blogId);
  
  try {
    const docSnapshot = await getDoc(blogRef);
    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      const viewCount = data.count || 0; // Default to 0 if the count doesn't exist
      const viewCountElement = document.getElementById("viewCount");
      if (viewCountElement) {
        viewCountElement.innerText = `Read count: ${viewCount}`;
      }
    } else {
      console.log("No such document!");
    }
  } catch (e) {
    console.error("Error getting document: ", e);
  }
}

// Function to determine the blog page and set the correct blogId
function getBlogId() {
  const path = window.location.pathname; // Get the current URL path

  if (path.includes('blog1.html')) {
    return 'blog1views';
  } else if (path.includes('blog2.html')) {
    return 'blog2views';
  } else if (path.includes('blog3.html')) {
    return 'blog3views';
  } else {
    console.error("Blog not recognized");
    return null;
  }
}

// Call the functions when the page is loaded
window.onload = () => {
  const blogId = getBlogId();  // Get the blogId based on the current page
  if (blogId) {
    incrementViewCount(blogId);
    displayViewCount(blogId);
  }
};
