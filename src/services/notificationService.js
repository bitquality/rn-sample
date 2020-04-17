import { NativeEventEmitter, NativeModules } from 'react-native'

const NotificationHub = require('react-native-azurenotificationhub');
const PushNotificationEmitter = new NativeEventEmitter(NotificationHub);

const NOTIF_REGISTER_AZURE_HUB_EVENT = 'azureNotificationHubRegistered';
const NOTIF_AZURE_HUB_REGISTRATION_ERROR_EVENT = 'azureNotificationHubRegistrationError';
const DEVICE_NOTIF_EVENT = 'remoteNotificationReceived';

const connectionString = ''; // The Notification Hub connection string
const hubName = '';          // The Notification Hub name
const senderID = '';         // The Sender ID from the Cloud Messaging tab of the Firebase console
const tags = [''];           // The set of tags to subscribe to


function _onAzureNotificationHubRegistered(registrationID) {
    alert('RegistrationID: ' + registrationID);
}

function _onAzureNotificationHubRegistrationError(error) {
    alert('Error: ' + error);
}

function _onRemoteNotification(notification) {
    alert('Notification received: ' + notification);
    const tempLocalNotif = {
        alertBody: `${notification.getMessage()}`,
        alertAction: "view",
        soundName: notification.getSound(),
        applicationIconBadgeNumber: notification.getBadgeCount()
    };
    NotificationHub.presentLocalNotification(tempLocalNotif);
}


export const pushNotificationRegister = async () => {

    //PushNotificationEmitter.addListener(DEVICE_NOTIF_EVENT, this._onRemoteNotification);
    PushNotificationEmitter.addListener(NOTIF_REGISTER_AZURE_HUB_EVENT, this._onAzureNotificationHubRegistered);
    PushNotificationEmitter.addListener(NOTIF_AZURE_HUB_REGISTRATION_ERROR_EVENT, this._onAzureNotificationHubRegistrationError);

    NotificationHub.register({ connectionString, hubName, senderID, tags })
        .catch(reason => console.warn(reason, "Notification registration failed"));

};

export const pushNotificationUnregister = () => {
    console.log("Unregistering from notifications. ");
    NotificationHub.unregister().catch(reason => console.log(reason));
};

export const startPushNotification = async userAlias => {
    pushNotificationRegister();
};
