-- CreateTable
CREATE TABLE `Lichtrinh` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tenlichtrinh` VARCHAR(191) NULL,
    `ngaytao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `ghichu` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
