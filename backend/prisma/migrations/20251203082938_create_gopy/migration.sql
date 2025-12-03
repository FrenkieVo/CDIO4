-- CreateTable
CREATE TABLE `Gopy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `chuongtrinh` VARCHAR(191) NULL,
    `matour` VARCHAR(191) NULL,
    `noikhoihanh` VARCHAR(191) NULL,
    `ngaykhoihanh` DATETIME(3) NULL,
    `hoten` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `sodienthoai` VARCHAR(191) NOT NULL,
    `diachi` VARCHAR(191) NULL,
    `dotuoi` VARCHAR(191) NULL,
    `gioitinh` VARCHAR(191) NULL,
    `yeutochon` VARCHAR(191) NULL,
    `thangdukien` VARCHAR(191) NULL,
    `danhgiachitiet` VARCHAR(191) NULL,
    `gopythem` VARCHAR(191) NULL,
    `rating` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
