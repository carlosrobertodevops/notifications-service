import { Notification } from '@application/entities/notification';

export class ViewNotificationMapper {
  static toView(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
    };
  }
}
