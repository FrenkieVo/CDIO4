/*
  Warnings:

  - You are about to alter the column `noidung` on the `noidung` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `noidung` MODIFY `noidung` JSON NOT NULL;
