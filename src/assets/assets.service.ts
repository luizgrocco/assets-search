import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AssetsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.asset.findMany();
  }

  async search(query: string, page: number) {
    const normalizedString = query
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
    const normalizedCNPJ = query.replace(/[.-]/g, '');
    return this.prisma.asset.findMany({
      skip: 30 * page,
      take: 30,
      where: {
        OR: [
          { label_ai_ci: { contains: normalizedString } },
          { cnpj: { contains: normalizedCNPJ } },
        ],
      },
    });
  }
}
