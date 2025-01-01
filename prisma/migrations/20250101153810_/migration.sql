/*
  Warnings:

  - You are about to drop the column `experienceId` on the `Technology` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Technology" DROP CONSTRAINT "Technology_experienceId_fkey";

-- AlterTable
ALTER TABLE "Technology" DROP COLUMN "experienceId";
