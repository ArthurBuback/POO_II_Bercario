import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const medicoConst = [
     {
      crm: '465452',
      nome: 'Alice',
      telefone: '(27)998426497',
      especialidade: 'Anestesista'
     },
     {
      crm: '795264',
      nome: 'Pablo',
      telefone: '(27)994652867',
      especialidade: 'Sirurgião' 
     },
     {
      crm: '491664',
      nome: 'Carlos',
      telefone: '(27)997864568',
      especialidade: 'Sirurgião'
     }
  ];
  for (const data of medicoConst) {
    const medico = await prisma.medico.create({
      data: data,
    });
    console.log(medico);
  }


  const maeConst = [
    {
      nome: 'Fabricia',
      endereço: 'Rua campinas 34, Vila Torres',
      telefone: '(27)99145-6390',
      data_nascimento: '01/02/1995, 10:07:07 AM',
      
    },
    {
      nome: 'Marcela',
      endereço: 'Rua tres 80, Santa barbara',
      telefone: '(27)99083-6467',
      data_nascimento: '10/05/1983, 10:07:07 AM'
    },
    {
      nome: 'Debora',
      endereço: 'Rua sao paulo 79, Santo andre',
      telefone: '(27)99726-9290',
      data_nascimento: '12/10/1981, 10:07:07 AM'
    },
  ];
  for (const data of maeConst) {
    const mae = await prisma.mae.create({
      data: data,
    });
    console.log(mae);
  }


  const bebeConst = [
    {
      nome: 'Amora',
      data_nascimento: '01-10-2003',
      peso_de_nascimento: 2.0,
      altura: 0.40,
      mae: 'Fabricia',
      medico_parto: 'Alice'
    },
    {
      nome: 'Aurora',
      data_nascimento: '12-08-2004',
      peso_de_nascimento: 1.0,
      altura: 0.55,
      mae: 'Debora',
      medico_parto: 'Pablo'
    },
    {
      nome: 'Catherine',
      data_nascimento: '05-01-2010',
      peso_de_nascimento: 1.2,
      altura: 0.45,
      mae: 'Marcela',
      medico_parto: 'Carlos'
    },
  ];
  for(const data of bebeConst){
    const bebe = await prisma.bebe.create({
      data: data,
    });
    console.log(bebe);
  }
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