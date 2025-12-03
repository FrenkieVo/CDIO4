/*
  Warnings:

  - You are about to drop the column `chuongtrinh` on the `gopy` table. All the data in the column will be lost.
  - You are about to drop the column `diachi` on the `gopy` table. All the data in the column will be lost.
  - You are about to drop the column `dotuoi` on the `gopy` table. All the data in the column will be lost.
  - You are about to drop the column `gioitinh` on the `gopy` table. All the data in the column will be lost.
  - You are about to drop the column `matour` on the `gopy` table. All the data in the column will be lost.
  - You are about to drop the column `ngaykhoihanh` on the `gopy` table. All the data in the column will be lost.
  - You are about to drop the column `noikhoihanh` on the `gopy` table. All the data in the column will be lost.
  - You are about to drop the column `thangdukien` on the `gopy` table. All the data in the column will be lost.
  - You are about to drop the column `yeutochon` on the `gopy` table. All the data in the column will be lost.
  - You are about to alter the column `danhgiachitiet` on the `gopy` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.
  - Made the column `rating` on table `gopy` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `gopy` DROP COLUMN `chuongtrinh`,
    DROP COLUMN `diachi`,
    DROP COLUMN `dotuoi`,
    DROP COLUMN `gioitinh`,
    DROP COLUMN `matour`,
    DROP COLUMN `ngaykhoihanh`,
    DROP COLUMN `noikhoihanh`,
    DROP COLUMN `thangdukien`,
    DROP COLUMN `yeutochon`,
    MODIFY `danhgiachitiet` JSON NULL,
    MODIFY `rating` INTEGER NOT NULL;
