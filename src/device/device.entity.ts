import { SectionEntity } from 'src/section-buttons/section-buttons.entity';
import { Base } from '../utils/base';
import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';

@Entity('device')
export class DeviceEntity extends Base {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  token: string;

  @Column({ nullable: false })
  host: string;

  @Column({ nullable: false })
  port: number;

  @Column({ nullable: false, default: false })
  active: boolean;

  @OneToMany(() => SectionEntity, (section) => section.device, {
    onDelete: 'CASCADE',
  })
  sections: SectionEntity[];
}
