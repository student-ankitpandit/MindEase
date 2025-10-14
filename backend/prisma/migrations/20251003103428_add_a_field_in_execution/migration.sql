/*
  Warnings:

  - Added the required column `executionId` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Message" ADD COLUMN     "executionId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Message" ADD CONSTRAINT "Message_executionId_fkey" FOREIGN KEY ("executionId") REFERENCES "public"."Execution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
