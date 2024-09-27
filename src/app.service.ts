import { Injectable } from '@nestjs/common'
import { message } from './utils'

@Injectable()
export class AppService {
  healthCheck(): string {
    return message.Server_Is_Up_And_Running
  }
}
