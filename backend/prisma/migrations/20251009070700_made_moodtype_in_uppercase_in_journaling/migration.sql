/*
  Warnings:

  - The `moodType` column on the `Journaling` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "public"."MoodType" AS ENUM ('HAPPY', 'SAD', 'ANXIOUS', 'EXCITED', 'ANGRY', 'CALM', 'STRESSED', 'NEUTRAL', 'GRATEFUL', 'LONELY');

-- AlterTable
ALTER TABLE "public"."Journaling" DROP COLUMN "moodType",
ADD COLUMN     "moodType" "public"."MoodType";

-- DropEnum
DROP TYPE "public"."moodType";
