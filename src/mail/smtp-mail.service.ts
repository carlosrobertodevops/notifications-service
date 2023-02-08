import { MailService } from './mail.service';

export class SMTPMailService implements MailService {
  sendMail(): string {
    return 'SMTP Mail Service';
  }
}
