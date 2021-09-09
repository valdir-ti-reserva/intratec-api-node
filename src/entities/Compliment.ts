import {Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne} from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Exclude } from 'class-transformer'

import { Tag } from './Tag'
import { User } from './User'

@Entity("compliments")
class Compliment {

  @Exclude()
  @PrimaryColumn()
  readonly id: string

  @Exclude()
  @Column()
  user_sender: string

  @JoinColumn({name: 'user_sender'})
  @ManyToOne(() => User)
  userSender: User

  @Exclude()
  @Column()
  user_receiver: string

  @JoinColumn({name: 'user_receiver'})
  @ManyToOne(() => User)
  userReceiver: User

  @Exclude()
  @Column()
  tag_id: string

  @JoinColumn({ name: "tag_id" })
  @ManyToOne(() => Tag)
  tag: Tag

  @Column()
  message: string

  @Exclude()
  @CreateDateColumn()
  created_at: Date

  constructor() {
    if(!this.id){
      this.id = uuid()
    }
  }

}

export {Compliment}