-- CreateTable
CREATE TABLE `LichtrinhCT` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `soluong` INTEGER NOT NULL,
    `thanhtien` INTEGER NOT NULL,
    `noikhoihanh` VARCHAR(191) NULL,
    `ngaykhoihanh` DATETIME(3) NULL,
    `lichtrinhdichuyen` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
