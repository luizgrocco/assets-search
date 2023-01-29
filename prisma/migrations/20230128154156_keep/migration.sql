-- CreateTable
CREATE TABLE "Asset" (
    "id" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "assetType" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "label_ai_ci" TEXT,
    "cnpj" TEXT,
    "hasSeries" BOOLEAN,
    "ticker" TEXT,
    "isin" TEXT,
    "isin_ci" TEXT,
    "managementCompany" TEXT,
    "situation" TEXT,
    "stockExchange" TEXT,
    "type" TEXT,

    CONSTRAINT "Asset_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Asset_id_key" ON "Asset"("id");
