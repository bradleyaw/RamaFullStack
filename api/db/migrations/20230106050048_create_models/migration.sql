-- CreateTable
CREATE TABLE "Player" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "deleted" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Result" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "season" TEXT NOT NULL DEFAULT '2023 Spring',
    "week_number" INTEGER NOT NULL,
    "playerid" INTEGER NOT NULL,
    "game_one" INTEGER NOT NULL,
    "game_two" INTEGER NOT NULL,
    "game_three" INTEGER NOT NULL,
    "bye" INTEGER NOT NULL,
    "deleted" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
