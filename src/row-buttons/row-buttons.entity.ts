import { ButtonEntity } from 'src/button-device/button-device.entity';
import { SectionEntity } from 'src/section-buttons/section-buttons.entity';
import { Base } from 'src/utils/base';
import { Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity('row-buttons')
export class RowEntity extends Base {
  @OneToMany(() => ButtonEntity, (button) => button.row, {
    onDelete: 'CASCADE',
  })
  buttons: ButtonEntity[];

  @ManyToOne(() => SectionEntity, (section) => section.buttons, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'id_section' })
  section: SectionEntity;
}
