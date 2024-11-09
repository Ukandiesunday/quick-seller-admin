export interface recentDeliveryProps {
  serial_number: number;
  start_destination: string;
  stop_destination: string;
  dispatcher_name: string;
  vehicle_type: string;
  status: string;
}

export const recentDeliveryData: recentDeliveryProps[] = [
  {
    serial_number: 443123,
    start_destination: "No.15 Eastern Highway Calabar, Calabar Nigeria",
    stop_destination: "No.42 Sedem Estate U-Jimco road Calabar, Nigeria",
    dispatcher_name: "Samuel Wilson",
    vehicle_type: "Cargo Van",
    status: "in progress",
  },
  {
    serial_number: 443123,
    start_destination: "No.15 Eastern Highway Calabar, Calabar Nigeria",
    stop_destination: "No.42 Sedem Estate U-Jimco road Calabar, Nigeria",
    dispatcher_name: "Samuel Wilson",
    vehicle_type: "Cargo Van",
    status: "complete",
  },
  {
    serial_number: 443123,
    start_destination: "No.15 Eastern Highway Calabar, Calabar Nigeria",
    stop_destination: "No.42 Sedem Estate U-Jimco road Calabar, Nigeria",
    dispatcher_name: "Samuel Wilson",
    vehicle_type: "Cargo Van",
    status: "complete",
  },
  {
    serial_number: 443123,
    start_destination: "No.15 Eastern Highway Calabar, Calabar Nigeria",
    stop_destination: "No.42 Sedem Estate U-Jimco road Calabar, Nigeria",
    dispatcher_name: "Samuel Wilson",
    vehicle_type: "Cargo Van",
    status: "cancelled",
  },
  {
    serial_number: 443123,
    start_destination: "No.15 Eastern Highway Calabar, Calabar Nigeria",
    stop_destination: "No.42 Sedem Estate U-Jimco road Calabar, Nigeria",
    dispatcher_name: "Samuel Wilson",
    vehicle_type: "Cargo Van",
    status: "in progress",
  },
];
