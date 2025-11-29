-- CreateTable
CREATE TABLE `Goidichvu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tengoi` VARCHAR(191) NULL,
    `mota` VARCHAR(191) NULL,
    `gia` INTEGER NOT NULL,
    `thoiluongngay` INTEGER NOT NULL,
    `trangthai` VARCHAR(191) NULL,
    `hinhanh` VARCHAR(191) NULL,
    `sochoconlai` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
