import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AssetsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.asset.findMany();
  }

  search(query: string) {
    const normalizedString = query
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
    const normalizedCNPJ = query.replace(/[.-]/g, '');
    return this.prisma.asset.findMany({
      where: {
        OR: [
          { label_ai_ci: { contains: normalizedString } },
          { cnpj: { contains: normalizedCNPJ } },
        ],
      },
    });
  }
}
