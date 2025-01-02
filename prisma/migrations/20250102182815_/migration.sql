-- CreateTable
CREATE TABLE "Experience_technology" (
    "id" SERIAL NOT NULL,
    "experienceId" INTEGER NOT NULL,
    "technologyId" INTEGER NOT NULL,

    CONSTRAINT "Experience_technology_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Experience_technology" ADD CONSTRAINT "Experience_technology_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "Experience"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience_technology" ADD CONSTRAINT "Experience_technology_technologyId_fkey" FOREIGN KEY ("technologyId") REFERENCES "Technology"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
