This is a personal project for a mens beach volleyball league I run.

Built with redwoodjs (React/graphql/postgres).

Redwood commands

create new app w/ directory
yarn create redwood-app DIRECTORY

run locally
yarn redwood dev

generating page
yarn redwood generate page NAME ROUTE

generate layout (wrapper for set of pages)
yarn redwood g layout NAME

create migration based on prisma schemas
yarn rw prisma migrate dev

view GUI for database
yarn rw prisma studio

CRUD for existing model (includes graphQL GUI for entries at /NAME route)
yarn rw g scaffold NAME

fetching data to display in contained component
yarn rw g cell NAME

component
yarn rw g component NAME

create graphQL interface
yarn rw g sdl NAME

Setup dbAuth
yarn rw setup auth dbAuth

example User Model
model User {
  id                  Int       @id @default(autoincrement())
  name                String?
  email               String    @unique
  hashedPassword      String
  salt                String
  resetToken          String?
  resetTokenExpiresAt DateTime?
}

deploy
yarn rw setup deploy PROVIDER

create secret for each environment
yarn rw g secret