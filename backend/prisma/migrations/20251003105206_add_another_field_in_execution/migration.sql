/*
  Warnings:

  - You are about to drop the column `createAt` on the `Execution` table. All the data in the column will be lost.
  - You are about to drop the column `executionId` on the `Message` table. All the data in the column will be lost.
  - Added the required column `content` to the `Execution` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Message" DROP CONSTRAINT "Message_executionId_fkey";

-- AlterTable
ALTER TABLE "public"."Execution" DROP COLUMN "createAt",
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."Message" DROP COLUMN "executionId";
