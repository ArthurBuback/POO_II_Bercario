import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const medico = await prisma.medico.create({
    data: {
      crm: 'Sim',
      nome: 'Alice',
      telefone: '998426497',
      especialidade: 'Anestesista',

    },
  })
  console.log(medico)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })