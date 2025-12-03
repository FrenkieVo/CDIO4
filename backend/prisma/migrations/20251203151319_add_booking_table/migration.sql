-- CreateTable
CREATE TABLE `Booking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hoten` VARCHAR(191) NOT NULL,
    `sodienthoai` VARCHAR(191) NOT NULL,
    `soluong` INTEGER NOT NULL,
    `sotien` INTEGER NOT NULL,
    `tour_id` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_tour_id_fkey` FOREIGN KEY (`tour_id`) REFERENCES `Goidichvu`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
