import { RowEntity } from 'src/row-buttons/row-buttons.entity';

import { EnumStyleButton } from 'src/shared/types.shared';
import { Base } from 'src/utils/base';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'button' })
export class ButtonEntity extends Base {
  @Column()
  title: string;

  @Column({
    type: 'enum',
    enum: EnumStyleButton,
    default: EnumStyleButton.DEFAULT,
  })
  style: EnumStyleButton;

  @Column({ default: true })
  isEmpty: boolean;

  @Column({ nullable: false })
  token: string;

  @ManyToOne(() => RowEntity, (row) => row.buttons, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_row' })
  row: RowEntity;
}
