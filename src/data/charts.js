
import { faXing } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faMobileAlt, faTabletAlt, faUserClock, faBuilding, faCheck, faCross, faMarker } from '@fortawesome/free-solid-svg-icons';

const trafficShares = [
    { id: 1, label: "Present", value: 90, color: "secondary", icon: faCheck },
    { id: 2, label: "Absence", value: 10, color: "primary", icon: faMarker }
];

const totalOrders = [
    { id: 1, label: "July", value: [1, 5, 2, 5, 4, 3], color: "primary" },
    { id: 2, label: "August", value: [2, 3, 4, 8, 1, 2], color: "secondary" }
];

export {
    trafficShares,
    totalOrders
};