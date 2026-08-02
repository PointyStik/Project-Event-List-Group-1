ALTER TABLE "Event" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ALTER COLUMN "registrationLink" SET DEFAULT '';
