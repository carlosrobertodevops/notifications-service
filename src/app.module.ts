import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MailService } from './mail/mail.service';
import { SMTPMailService } from './mail/smtp-mail.service';
import { PostMarkMailService } from './mail/postmark-mail.service';

@Module({
  imports: [],
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
