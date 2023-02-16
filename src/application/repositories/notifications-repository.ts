import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abastract findByIde(notificationId: string): Promise<Notification | null>;

}
