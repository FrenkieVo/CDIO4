-- CreateTable
CREATE TABLE `Thanhtoan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `phuongthuc` VARCHAR(191) NULL,
    `sotien` INTEGER NOT NULL,
    `trangthai` VARCHAR(191) NULL,
    `ngaythanhtoan` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
