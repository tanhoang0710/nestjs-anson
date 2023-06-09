import { ISession } from 'connect-typeorm';
import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Entity('sessions')
export class SessionEntity implements ISession {
  destroyedAt?: Date;
  @Index()
  @Column('bigint')
  public expiredAt = Date.now();

  @PrimaryColumn('varchar', {
    length: 255,
  })
  id = '';

  @Column('text')
  json = '';
}
