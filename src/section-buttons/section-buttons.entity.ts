import { DeviceEntity } from 'src/device/device.entity';
import { Base } from '../utils/base';
import { Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { RowEntity } from 'src/row-buttons/row-buttons.entity';

@Entity('section')
export class SectionEntity extends Base {
  @ManyToOne(() => DeviceEntity, (device) => device.sections, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'id_device' })
  device: DeviceEntity;

  @OneToMany(() => RowEntity, (row) => row.section, { onDelete: 'CASCADE' })
  buttons: RowEntity[];
}
