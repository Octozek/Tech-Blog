// Function to handle editing a post
const editPostHandler = async (event) => {
    const id = event.target.getAttribute('data-id');
    const title = prompt('Enter new title:');
    const content = prompt('Enter new content:');
  
    if (title && content) {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post.');
      }
    }
  };
  
  // Function to handle deleting a post
  const deletePostHandler = async (event) => {
    const id = event.target.getAttribute('data-id');
  
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post.');
    }
  };
  
  document.querySelectorAll('.edit-post').forEach((button) => {
    button.addEventListener('click', editPostHandler);
  });
  
  document.querySelectorAll('.delete-post').forEach((button) => {
    button.addEventListener('click', deletePostHandler);
  });
  