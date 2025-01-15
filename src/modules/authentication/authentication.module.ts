import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { AdapterModule } from 'src/modules/adapters/adapter.module'
import { AuthenticationController } from 'src/modules/authentication/authentication.controller'
import { AuthenticationService } from 'src/modules/authentication/authentication.service'
import { SECRET_KEY, EXPIRATION_TIME } from 'src/utils'

@Module({
  imports: [
    AdapterModule,
    JwtModule.register({
      global: true,
      secret: SECRET_KEY,
      signOptions: { expiresIn: EXPIRATION_TIME },
    }),
  ],
  providers: [AuthenticationService],
  controllers: [AuthenticationController],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
