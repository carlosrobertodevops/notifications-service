import { MailService } from './mail.service';

export class PostMarkMailService implements MailService {
  sendMail(): string {
    return 'PostMark Service';
  }
}
