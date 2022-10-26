-- AlterTable
ALTER TABLE `Social_Media` MODIFY `estado` VARCHAR(191) NOT NULL DEFAULT 'activo';

-- AlterTable
ALTER TABLE `Task` MODIFY `estado` VARCHAR(191) NOT NULL DEFAULT 'activo';

-- AlterTable
ALTER TABLE `User` MODIFY `estado` VARCHAR(191) NOT NULL DEFAULT 'activo';
