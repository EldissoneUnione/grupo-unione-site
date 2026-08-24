-- AlterTable
ALTER TABLE "Banner" ADD COLUMN     "subtitulo" TEXT;

-- AlterTable
ALTER TABLE "News" ADD COLUMN     "agendadoPara" TIMESTAMP(3),
ADD COLUMN     "blocos" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'publicada';
