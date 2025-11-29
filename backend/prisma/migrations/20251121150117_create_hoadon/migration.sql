-- CreateTable
CREATE TABLE `Hoadon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ngayxuat` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `tongtien` INTEGER NOT NULL,
    `trangthai` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
