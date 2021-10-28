import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateOrdersDrinksAndOrderDrinks1630935706477
  implements MigrationInterface
{
  name = 'CreateOrdersDrinksAndOrderDrinks1630935706477';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "order_drinks" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "price" integer NOT NULL, "orderId" uuid NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_34e8a143c8fe6e313b9fb1623cd" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "drink" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "category" character varying NOT NULL, "fruit" character varying NOT NULL, "description" character varying NOT NULL, "pictureUrl" character varying NOT NULL, "price" double precision NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "orderId" uuid, CONSTRAINT "PK_d2bcca4059e927221cce0f95756" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_drinks" ADD CONSTRAINT "FK_e999a9ed42f334dbcf480ecf33d" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "drink" ADD CONSTRAINT "FK_fe06d5fa0d2ab29c51ba8ea41b1" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "drink" DROP CONSTRAINT "FK_fe06d5fa0d2ab29c51ba8ea41b1"`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_drinks" DROP CONSTRAINT "FK_e999a9ed42f334dbcf480ecf33d"`,
    );
    await queryRunner.query(`DROP TABLE "drink"`);
    await queryRunner.query(`DROP TABLE "order"`);
    await queryRunner.query(`DROP TABLE "order_drinks"`);
  }
}
