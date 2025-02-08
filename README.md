# Social-Rest API

## 📝 Description
Social-Rest is a RESTful API backend built with Node.js and Express.js for a feature-rich social network application. This API provides endpoints for managing users, posts, comments, messages, and stories.

## 🛠 Technologies Used
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database (via Mongoose)
- **JWT** - Authentication and Authorization
- **Bcrypt** - Password encryption
- **Multer** - File upload
- **Cookie-parser** - Cookie handling
- **Dotenv** - Environment variable management

## 🚀 Key Features
1. **Authentication & Authorization**
   - Registration
   - Login
   - JWT Authentication

2. **User Management**
   - CRUD user information
   - Search users
   - Upload avatar/cover
   - Follow/Unfollow users
   - Block/Unblock users

3. **Posts**
   - CRUD posts
   - Create posts with single/multiple images (maximum 5)
   - Like/Dislike posts

4. **Comments**
   - Add comments to posts
   - Edit comments
   - Delete comments
   - View comment list
   - Reply to comments
   - Like/Dislike comments/comment replies

5. **Stories**
   - Post stories
   - View stories
   - Manage display duration

6. **Messages**
   - Create conversations
   - Send messages

## System Requirements

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation Guide

### 1. Clone repository

```bash
git clone https://github.com/haraherri/Social-Rest.git
cd Social-Rest
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file and add the following environment variables:

```env
CONNECTION_URL=your_mongodb_connection_string
PORT=8088
JWT_SECRET_KEY=your_jwt_key
JWT_EXPIRE=your_jwt_expire
URL=http://localhost:8088
```

### 4. Start the server

```bash
npm run start
```

After successful startup, the server will be running at: http://localhost:8088

## 📡 API Endpoints

### Authentication Routes
- `POST /api/auth/register` - Register new account
- `POST /api/auth/login` - Login
- `GET /api/auth/logout` - Logout
- `GET /api/auth/refetch` - Get current user information

### User Routes
- `GET /api/user/:userId` - Get user information
- `PUT /api/user/update/:userId` - Update user information
- `POST /api/user/follow/:userId` - Follow user
- `POST /api/user/unfollow/:userId` - Unfollow user
- `POST /api/user/block/:userId` - Block user
- `POST /api/user/unblock/:userId` - Unblock user
- `GET /api/user/blocked/:userId` - Get list of blocked users
- `DELETE /api/user/delete/:userId` - Delete user account
- `GET /api/user/search/:query` - Search users
- `PUT /api/user/update-profile-picture/:userId` - Update profile picture
- `PUT /api/user/update-cover-picture/:userId` - Update cover picture

### Post Routes
- `POST /api/post/create` - Create new post (without images)
- `POST /api/post/create/:userId` - Create post with images (maximum 5 images)
- `PUT /api/post/update/:postId` - Update post
- `GET /api/post/all/:userId` - Get all posts (newsfeed)
- `GET /api/post/user/:userId` - Get posts from a specific user
- `DELETE /api/post/delete/:postId` - Delete post
- `POST /api/post/like/:postId` - Like post
- `POST /api/post/dislike/:postId` - Dislike post

### Comment Routes
- `POST /api/comment/create` - Create new comment
- `POST /api/comment/create/reply/:commentId` - Create reply to comment
- `PUT /api/comment/update/:commentId` - Update comment
- `PUT /api/comment/update/:commentId/replies/:replyId` - Update comment reply
- `GET /api/comment/post/:postId` - Get all comments of a post
- `DELETE /api/comment/delete/:commentId` - Delete comment
- `DELETE /api/comment/delete/:commentId/replies/:replyId` - Delete comment reply
- `POST /api/comment/like/:commentId` - Like comment
- `POST /api/comment/dislike/:commentId` - Dislike comment
- `POST /api/comment/:commentId/replies/like/:replyId` - Like comment reply
- `POST /api/comment/:commentId/replies/dislike/:replyId` - Dislike comment reply

### Story Routes
- `POST /api/story/create/:userId` - Create new story with image
- `GET /api/story/all/:userId` - Get all stories from followed users
- `GET /api/story/user/:userId` - Get stories from a specific user
- `DELETE /api/story/delete/:storyId` - Delete a story
- `DELETE /api/story/delete/stories/:userId` - Delete all stories of a user

### Conversation Routes
- `POST /api/conversation/create` - Create new conversation
- `GET /api/conversation/:userId` - Get all conversations of a user
- `GET /api/conversation/:firstUserId/:secondUserId` - Get conversation between two specific users
- `DELETE /api/conversation/delete/:conversationId` - Delete conversation

### Message Routes
- `POST /api/message/create` - Create new message
- `GET /api/message/:conversationId` - Get all messages in a conversation
- `DELETE /api/message/:messageId` - Delete message

## 🔐 Security

The system is protected by the following security mechanisms:

- User authentication through JWT (JSON Web Tokens)
- Password encryption using bcrypt
- Middleware protection for important routes
- Secure cookie handling according to security standards

## 🤝 Contributing

We always welcome contributions from the community! If you want to contribute to the project, please:

- Create a pull request with the changes you want to make
- Open an issue to discuss new features or report bugs

## 👤 Author

**haraherri**
- GitHub: [@haraherri](https://github.com/haraherri)

## 📝 License

This project is distributed under the ISC License.

## 🙏 Acknowledgments

Thank you for your interest in the Social-Rest API! If you find this project useful, please support us by giving it a ⭐️!