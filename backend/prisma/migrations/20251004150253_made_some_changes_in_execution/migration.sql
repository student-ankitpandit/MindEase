/*
  Warnings:

  - Added the required column `response` to the `Execution` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Execution" ADD COLUMN     "response" TEXT NOT NULL;
