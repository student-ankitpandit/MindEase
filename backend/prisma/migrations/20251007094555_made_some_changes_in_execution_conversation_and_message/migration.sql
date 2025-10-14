/*
  Warnings:

  - You are about to drop the column `userId` on the `Conversation` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Execution` table. All the data in the column will be lost.
  - You are about to drop the column `response` on the `Execution` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Message` table. All the data in the column will be lost.
  - Added the required column `content` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Conversation" DROP CONSTRAINT "Conversation_userId_fkey";

-- AlterTable
ALTER TABLE "public"."Conversation" DROP COLUMN "userId",
ADD COLUMN     "title" TEXT;

-- AlterTable
ALTER TABLE "public"."Execution" DROP COLUMN "content",
DROP COLUMN "response",
ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'CONVERSATION';

-- AlterTable
ALTER TABLE "public"."Message" DROP COLUMN "userId",
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "role" TEXT NOT NULL,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;
