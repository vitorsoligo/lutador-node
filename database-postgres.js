import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listlutador() {
    const lutador = await sql`select * from lutador`;
    return lutador;
  }

  async createlutador(lutador) {
    const id = randomUUID();
    console.log('id', id);
    const nome = lutador.nome;
    const idade = lutador.idade;
    const peso = lutador.peso;
    
    await sql`insert into lutador (id, nome, idade, peso)
    values (${id}, ${nome}, ${idade}, ${peso})`;
  }

  async updatelutador(id, lutador) {
    const nome = lutador.nome;
    const peso = lutador.peso;
    const idade = lutador.idade;

    await sql`nome lutador set 
        name = ${nome},
        peso = ${peso},
        idade = ${idade}
        where id = ${id}
    `;
  }

  async deleteLutador(id) {
    await sql`delete from lutador where id = ${id}`;
  }
}
