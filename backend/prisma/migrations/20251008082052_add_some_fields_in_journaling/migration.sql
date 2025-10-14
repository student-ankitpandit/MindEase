/*
  Warnings:

  - You are about to drop the column `dashboardId` on the `Journaling` table. All the data in the column will be lost.
  - You are about to drop the `Dashboard` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Journaling` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."moodType" AS ENUM ('HAPPY', 'SAD', 'ANXIOUS', 'EXCITED', 'CALM', 'STRESSED', 'NEUTRAL');

-- DropForeignKey
ALTER TABLE "public"."Journaling" DROP CONSTRAINT "Journaling_dashboardId_fkey";

-- AlterTable
ALTER TABLE "public"."Journaling" DROP COLUMN "dashboardId",
ADD COLUMN     "moodScore" SMALLINT,
ADD COLUMN     "moodType" "public"."moodType",
ADD COLUMN     "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "title" DROP NOT NULL;

-- DropTable
DROP TABLE "public"."Dashboard";

-- CreateIndex
CREATE INDEX "Journaling_userId_createdAt_idx" ON "public"."Journaling"("userId", "createdAt");

-- AddForeignKey
ALTER TABLE "public"."Journaling" ADD CONSTRAINT "Journaling_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
