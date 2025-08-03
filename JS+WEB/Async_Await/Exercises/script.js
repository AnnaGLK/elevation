// Exercise 1
// Convert the function to use async/await syntax
// Use try/catch for error handling
// Maintain the same functionality (logging and return values)
// Test with both valid (1-10) and invalid (999) user IDs
// Given Promise-based code:
async function getUserById(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!response.ok) throw new Error("User not found");
    const user = await response.json();
    console.log(`Found user: ${user.name} (${user.email})`);
    return user;
  } catch (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }
}

// Example usage:
getUserById(1);
getUserById(10);
getUserById(20); //error case

// Exercise 2
// Create a function that fetches a user and then fetches all posts by that user.
// Return an object containing both user info and their posts.
// Handle errors at each step with meaningful messages.
// If user doesn't exist, don't attempt to fetch posts.
// Starter code structure:
async function getUserWithPosts(userId) {
  try {
    // 1. Fetch user from: https://jsonplaceholder.typicode.com/users/${userId}
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if (!response.ok) throw new Error("User not found");
    const user = await response.json();
    // 2. Fetch posts from: https://jsonplaceholder.typicode.com/posts?userId=${userId}
    const postsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    if (!postsResponse.ok) throw new Error("Posts not found");
    const posts = await postsResponse.json();
    // 3. Return combined data
    console.log(`Found ${user.name} posts: `, posts);
    return { user, posts };
  } catch (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }
}

// getUserWithPosts(1)

// Exercise 3
// Create a dashboard function that fetches multiple types of data simultaneously and aggregates them.
// Fetch these data sources in parallel:

// All users: https://jsonplaceholder.typicode.com/users
// All posts: https://jsonplaceholder.typicode.com/posts
// All comments: https://jsonplaceholder.typicode.com/comments

async function getUserDataParallel() {
    try {
  // 1. Fetch all data in parallel
  const [users, posts, comments] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users").then((r) => r.json()),
    fetch("https://jsonplaceholder.typicode.com/posts").then((r) => r.json()),
    fetch("https://jsonplaceholder.typicode.com/comments").then((r) =>
      r.json()
    ),
  ]);
  // 2. Summary calculations
  const totalUsers = users.length;
  const totalPosts = posts.length;
  const totalComments = comments.length;
  const avgPostsPerUser = totalPosts / totalUsers || 0;
  const avgCommentsPerPost = totalComments / totalPosts || 0;

  const summary = {
    totalUsers,
    totalPosts,
    totalComments,
    avgPostsPerUser,
    avgCommentsPerPost,
  };

  // 3. Count posts per user
  const postCountPerUser = posts.reduce((acc, post) => {
    acc[post.userId] = (acc[post.userId] || 0) + 1;
    return acc;
  }, {});

  // 4. Map posts by userId to collect their post IDs
  const postIdsByUser = posts.reduce((acc, post) => {
    if (!acc[post.userId]) acc[post.userId] = [];
    acc[post.userId].push(post.id);
    return acc;
  }, {});

  // 5. Count comments per postId
  const commentCountPerPost = comments.reduce((acc, comment) => {
    acc[comment.postId] = (acc[comment.postId] || 0) + 1;
    return acc;
  }, {});

  // 6. Top 3 users by post count, with name and comment count on their posts
  const topUsers = Object.entries(postCountPerUser)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([userId, postCount]) => {
      const user = users.find((u) => u.id === parseInt(userId));
      const userPostIds = postIdsByUser[userId] || [];
      const commentCount = userPostIds.reduce((sum, postId) => {
        return sum + (commentCountPerPost[postId] || 0);
      }, 0);

      return {
        name: user?.name || "Unknown",
        postCount,
        commentCount,
      };
    });

 // 7. Get last 5 posts by highest ID
  const recentPosts = posts.sort((a, b) => b.id - a.id).slice(-5);
  
  // 8. Final return format
    return {
      summary,
      topUsers,
      recentPosts,
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return null;
  }
}

// Run the function
getUserDataParallel().then((data) => {
  console.log(JSON.stringify(data, null, 2));
});