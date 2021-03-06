/* SystemJS module definition */
declare var module: NodeModule;

interface NodeModule {
  id: string;
}

interface User {
  uid: string;
  email?: string | null;
  photoURL?: string;
  displayName?: string;
}

interface Blog {
  title: string;
  text: string;
  date: number;
  img: string;
}

interface Event {
  title: string;
  img: string;
  address: string;
  description: string;
  startDate: number;
  endDate: number;
}

interface FriendLocation {
  lider: string;
  anfitrion: string;
  dia: string;
  horario: string;
  animation: string;
  icon: string;
  position: {
    lat: number;
    lng: number;
  };
}
