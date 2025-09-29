import * as Notifications from "expo-notifications";

export async function requestAndConfigureNotifications() {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== "granted") return;
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
}

export async function notifyOrderStatus(title, body) {
  try {
    await Notifications.scheduleNotificationAsync({
      content: { title, body },
      trigger: null, // agora
    });
  } catch (e) {
    // Se falhar no Snack, siga com um fallback simples:
    alert(`${title}\n${body}`);
  }
}
