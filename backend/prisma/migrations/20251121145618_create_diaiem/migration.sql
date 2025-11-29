-- CreateTable
CREATE TABLE `Diadiem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tendiadiem` VARCHAR(191) NULL,
    `diachi` VARCHAR(191) NULL,
    `mota` VARCHAR(191) NULL,
    `hinhanh` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
