/*
  Warnings:

  - You are about to drop the column `credentialsUid` on the `Verification` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Verification" DROP CONSTRAINT "Verification_credentialsUid_fkey";

-- AlterTable
ALTER TABLE "Verification" DROP COLUMN "credentialsUid";
