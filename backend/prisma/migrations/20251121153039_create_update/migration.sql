/*
  Warnings:

  - Added the required column `Lichtrinh_id` to the `Danhgia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `User_id` to the `Danhgia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Diadiem_id` to the `Goidichvu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Lichtrinh_id` to the `Hoadon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Thanhtoan_id` to the `Hoadon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `User_id` to the `Hoadon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `User_id` to the `Lichtrinh` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Goidichvu_id` to the `LichtrinhCT` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Lichtrinh_id` to the `LichtrinhCT` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Role_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `danhgia` ADD COLUMN `Lichtrinh_id` INTEGER NOT NULL,
    ADD COLUMN `User_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `goidichvu` ADD COLUMN `Diadiem_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `hoadon` ADD COLUMN `Lichtrinh_id` INTEGER NOT NULL,
    ADD COLUMN `Thanhtoan_id` INTEGER NOT NULL,
    ADD COLUMN `User_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `lichtrinh` ADD COLUMN `User_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `lichtrinhct` ADD COLUMN `Goidichvu_id` INTEGER NOT NULL,
    ADD COLUMN `Lichtrinh_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `Role_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_Role_id_fkey` FOREIGN KEY (`Role_id`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lichtrinh` ADD CONSTRAINT `Lichtrinh_User_id_fkey` FOREIGN KEY (`User_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LichtrinhCT` ADD CONSTRAINT `LichtrinhCT_Lichtrinh_id_fkey` FOREIGN KEY (`Lichtrinh_id`) REFERENCES `Lichtrinh`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LichtrinhCT` ADD CONSTRAINT `LichtrinhCT_Goidichvu_id_fkey` FOREIGN KEY (`Goidichvu_id`) REFERENCES `Goidichvu`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Goidichvu` ADD CONSTRAINT `Goidichvu_Diadiem_id_fkey` FOREIGN KEY (`Diadiem_id`) REFERENCES `Diadiem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Danhgia` ADD CONSTRAINT `Danhgia_Lichtrinh_id_fkey` FOREIGN KEY (`Lichtrinh_id`) REFERENCES `Lichtrinh`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Danhgia` ADD CONSTRAINT `Danhgia_User_id_fkey` FOREIGN KEY (`User_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Hoadon` ADD CONSTRAINT `Hoadon_User_id_fkey` FOREIGN KEY (`User_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Hoadon` ADD CONSTRAINT `Hoadon_Thanhtoan_id_fkey` FOREIGN KEY (`Thanhtoan_id`) REFERENCES `Thanhtoan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Hoadon` ADD CONSTRAINT `Hoadon_Lichtrinh_id_fkey` FOREIGN KEY (`Lichtrinh_id`) REFERENCES `Lichtrinh`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
