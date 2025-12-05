-- CreateTable
CREATE TABLE `Noidung` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tieude` VARCHAR(191) NOT NULL,
    `hinhanh` VARCHAR(191) NULL,
    `danhMuc` VARCHAR(191) NOT NULL,
    `mota` VARCHAR(191) NULL,
    `noidung` VARCHAR(191) NOT NULL,
    `luotXem` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `trangThai` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
