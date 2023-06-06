import { NextRequest } from "next/server"
import { ApolloServer } from "@apollo/server"
import { startServerAndCreateNextHandler } from "@as-integrations/next"
import { DateTimeResolver, EmailAddressResolver } from "graphql-scalars"
import { gql } from "graphql-tag"

const resolvers = {
  DateTime: DateTimeResolver,
  Email: EmailAddressResolver,
  Query: {
    hello: () => "world",
  },
}

const typeDefs = gql`
  # Types generated from Prisma schema
  scalar DateTime
  scalar Email

  type User {
    id: ID!
    name: String!
    email: Email!
    emailVerified: String
    image: String
    role: Role!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Account {
    id: ID!
    userId: String!
    type: String!
    provider: String!
    providerAccountId: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Session {
    id: ID!
    sessionToken: String!
    userId: String!
    expires: String!
  }

  type Role {
    id: ID!
    name: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type TaskBoard {
    id: ID!
    title: String!
    description: String
    createdAt: DateTime!
    updatedAt: DateTime!
    owner: User!
  }

  type Task {
    id: ID!
    title: String!
    description: String
    status: TaskStatus!
    priority: TaskPriority!
    dueDate: String
    createdAt: DateTime!
    updatedAt: DateTime!
    board: TaskBoard!
  }

  type Comment {
    id: ID!
    content: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    task: Task!
    user: User!
  }

  type Notification {
    id: ID!
    content: String!
    read: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
    user: User!
  }

  type Attachment {
    id: ID!
    file: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    task: Task!
  }

  enum TaskStatus {
    TO_DO
    IN_PROGRESS
    DONE
  }

  enum TaskPriority {
    LOW
    MEDIUM
    HIGH
    URGENT
  }

  # Root Query and Mutation types

  type Query {
    # User related
    user(id: ID!): User
    users: [User]
    userByEmail(email: Email!): User
    usersByRole(role: String!): [User]

    # Account related
    accountByUser(userId: ID!): [Account]

    # Session related
    sessionsByUser(userId: ID!): [Session]

    # Role related
    roleByName(name: String!): Role

    # TaskBoard related
    taskBoard(id: ID!): TaskBoard
    taskBoards: [TaskBoard]
    taskBoardsByUser(userId: ID!): [TaskBoard]

    # Task related
    tasksByBoard(boardId: ID!): [Task]
    tasksByUser(userId: ID!): [Task]
    tasksByStatus(status: TaskStatus!): [Task]
    tasksByPriority(priority: TaskPriority!): [Task]

    # Comment related
    commentsByTask(taskId: ID!): [Comment]
    commentsByUser(userId: ID!): [Comment]

    # Notification related
    notificationsByUser(userId: ID!): [Notification]

    # Attachment related
    attachmentsByTask(taskId: ID!): [Attachment]
  }

  #input types
  input CreateUserInput {
    name: String!
    email: Email!
  }

  input CreateTaskInput {
    title: String!
    description: String
    status: TaskStatus!
    priority: TaskPriority!
    dueDate: String
    boardId: ID!
  }

  # Mutation response types

  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type UserMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    user: User
  }

  type AccountMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    account: Account
  }

  type SessionMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    session: Session
  }

  type RoleMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    role: Role
  }

  type TaskBoardMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    taskBoard: TaskBoard
  }

  type TaskMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    task: Task
  }

  type CommentMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    comment: Comment
  }

  type NotificationMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    notification: Notification
  }

  type AttachmentMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    attachment: Attachment
  }

  # Mutations types

  type Mutation {
    # Add more mutation fields as needed
    # User related
    createUser(input: CreateUserInput!): UserMutationResponse!
    createTask(input: CreateTaskInput!): TaskMutationResponse!

    # Account related
    createAccount(
      userId: ID!
      type: String!
      provider: String!
      providerAccountId: String!
    ): AccountMutationResponse!
    updateAccount(
      id: ID!
      userId: String
      type: String
      provider: String
      providerAccountId: String
    ): AccountMutationResponse!
    deleteAccount(id: ID!): AccountMutationResponse!

    # Session related
    createSession(
      sessionToken: String!
      userId: ID!
      expires: String!
    ): SessionMutationResponse!
    deleteSession(id: ID!): SessionMutationResponse!

    # Role related
    createRole(name: String!): RoleMutationResponse!
    updateRole(id: ID!, name: String): RoleMutationResponse!
    deleteRole(id: ID!): RoleMutationResponse!

    # TaskBoard related
    createTaskBoard(title: String!, ownerId: ID!): TaskBoardMutationResponse!
    updateTaskBoard(
      id: ID!
      title: String
      description: String
    ): TaskBoardMutationResponse!
    deleteTaskBoard(id: ID!): TaskBoardMutationResponse!

    # Task related
    createTask(
      title: String!
      description: String
      status: TaskStatus!
      priority: TaskPriority!
      dueDate: String
      boardId: ID!
    ): TaskMutationResponse!
    updateTask(
      id: ID!
      title: String
      description: String
      status: TaskStatus
      priority: TaskPriority
      dueDate: String
    ): TaskMutationResponse!
    deleteTask(id: ID!): TaskMutationResponse!

    # Comment related
    createComment(
      content: String!
      taskId: ID!
      userId: ID!
    ): CommentMutationResponse!
    updateComment(id: ID!, content: String): CommentMutationResponse!
    deleteComment(id: ID!): CommentMutationResponse!

    # Notification related
    createNotification(
      content: String!
      read: Boolean!
      userId: ID!
    ): NotificationMutationResponse!
    updateNotification(
      id: ID!
      content: String
      read: Boolean
    ): NotificationMutationResponse!
    deleteNotification(id: ID!): NotificationMutationResponse!
    # Attachment related
    createAttachment(file: String!, taskId: ID!): AttachmentMutationResponse!
    updateAttachment(id: ID!, file: String): AttachmentMutationResponse!
    deleteAttachment(id: ID!): AttachmentMutationResponse!
  }
`

const server = new ApolloServer({
  resolvers,
  typeDefs,
})

export default startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
})
