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
