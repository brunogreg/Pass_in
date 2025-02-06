import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id:'cb8e6f50-8b55-49ec-b7d9-0446e3a39f76',
            title:'Projeto',
            slug:'Projeto-portifolio',
            details:'Um projeto para praticar',
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect() 
})