-- AlterTable
ALTER TABLE "public"."CopingStrategy" ADD COLUMN     "completedCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "culturalNote" TEXT,
ADD COLUMN     "duration" INTEGER NOT NULL DEFAULT 10,
ADD COLUMN     "practiceType" TEXT NOT NULL DEFAULT 'general',
ADD COLUMN     "rating" INTEGER,
ADD COLUMN     "steps" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- CreateTable
CREATE TABLE "public"."PeerStory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL DEFAULT 'general',
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "isApproved" BOOLEAN NOT NULL DEFAULT false,
    "isAnonymous" BOOLEAN NOT NULL DEFAULT true,
    "supportCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PeerStory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."StorySupport" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "storyId" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'heart',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StorySupport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."StoryComment" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "storyId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "isApproved" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StoryComment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PeerStory_userId_idx" ON "public"."PeerStory"("userId");

-- CreateIndex
CREATE INDEX "PeerStory_category_idx" ON "public"."PeerStory"("category");

-- CreateIndex
CREATE UNIQUE INDEX "StorySupport_userId_storyId_key" ON "public"."StorySupport"("userId", "storyId");

-- CreateIndex
CREATE INDEX "StoryComment_storyId_idx" ON "public"."StoryComment"("storyId");

-- AddForeignKey
ALTER TABLE "public"."PeerStory" ADD CONSTRAINT "PeerStory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."StorySupport" ADD CONSTRAINT "StorySupport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."StorySupport" ADD CONSTRAINT "StorySupport_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "public"."PeerStory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."StoryComment" ADD CONSTRAINT "StoryComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."StoryComment" ADD CONSTRAINT "StoryComment_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "public"."PeerStory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
