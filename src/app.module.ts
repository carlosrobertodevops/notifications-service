import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MailService } from './mail/mail.service';
// import { SMTPMailService } from './mail/smtp-mail.service';

import { PostMarkMailService } from './mail/postmark-mail.service';
import { HttpModule } from './http.module';


@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [
    {
      provide: MailService,
      /*useClass: SMTPMailService,  */
      useClass: PostMarkMailService,
    },
  ],
})
export class AppModule {}
