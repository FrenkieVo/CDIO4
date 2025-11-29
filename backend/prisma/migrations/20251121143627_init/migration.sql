-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hoten` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `matkhau` VARCHAR(191) NULL,
    `sodienthoai` VARCHAR(191) NULL,
    `diachi` VARCHAR(191) NULL,
    `trangthai` VARCHAR(191) NULL,
    `creatAT` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
