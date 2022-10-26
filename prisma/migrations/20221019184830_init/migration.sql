/*
  Warnings:

  - A unique constraint covering the columns `[correo]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_user` to the `Social_Media` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_user` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Social_Media` ADD COLUMN `id_user` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Task` ADD COLUMN `id_user` INTEGER NOT NULL,
    MODIFY `fecha_creacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX `User_correo_key` ON `User`(`correo`);
